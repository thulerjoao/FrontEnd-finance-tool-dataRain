import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Api from "../../services/api";
import { UserTypes } from "../../types/interface";
import React from "react";

interface AuthProviderProps{
    children: ReactNode
}

interface loginParams{
    token:string,
    user:UserTypes | null,
    isChecked: Boolean,
}

interface AuthProviderData{
    logged:boolean,
    login: (param:loginParams)=> void,
    logout: ()=> void,
    logoutStay: ()=> void,
    userStorage: UserTypes,
    getUserByToken: () => void;

}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({children}:AuthProviderProps)=>{
    
    const navigate = useNavigate();
    const [logged, setLogged] = useState<boolean>(true);
    const [userStorage , setUserStorage] = useState<UserTypes>({
        id: "",
        name: "",
        email:"",
        password:"",
        imageUrl: "",
        position: "",
        role: {name: ""},
        billable: false,
    })

    const getUserByToken = () =>{
        Api.get("/user/myself")
        .then((res)=>{
            setUserStorage(res.data)
        })
        .catch((err)=>{})
    }

    const checkTokenExpiration = ()=>{

        const token = localStorage.getItem("token");
        token && sessionStorage.setItem("token", token);
        
        Api.get("/user/myself")
            .then((res)=>{
                setUserStorage(res.data)
                setLogged(true);
                navigate("/home")
            })
            .catch(()=>{
                logout();
                toast.error("Login necessário")
            })
    }

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token) checkTokenExpiration();
    } , [])

    const login = ({token, user, isChecked}:loginParams) =>{
        if(isChecked){
            localStorage.setItem("token", token)
        }
        sessionStorage.setItem("token", token)
        setLogged(true);
        user && setUserStorage(user)
        navigate("/home")
    }

    const logout = () =>{
        localStorage.clear();
        sessionStorage.clear();
        setLogged(false);
        navigate("/");
    }

    const logoutStay = () =>{
        localStorage.clear();
        sessionStorage.clear();
        setLogged(false);
    }

    return <AuthContext.Provider value={{logged, login, logout, logoutStay, userStorage, getUserByToken}}>{children}</AuthContext.Provider>
}

export const useAuth = ()=> useContext(AuthContext)