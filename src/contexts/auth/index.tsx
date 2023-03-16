import { createContext, useContext, ReactNode, useState, useEffect, Dispatch } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Api from "../../services/api";
import { NewNotificationPayload, UserTypes } from "../../types/interface";
import React from "react";

interface AuthProviderProps{
    children: ReactNode
}

interface loginParams{
    token:string,
    user:UserTypes,
    isChecked: Boolean,
}

interface AuthProviderData{
    logged:boolean,
    login: (param:loginParams)=> void,
    logout: ()=> void,
    logoutStay: ()=> void,
    userStorage: UserTypes,
    getUserByToken: () => void;
    notifications: NewNotificationPayload[];
    getNotifications: ()=> void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({children}:AuthProviderProps)=>{
    
    const navigate = useNavigate();
    const [ notifications, setNotifications ] = useState<NewNotificationPayload[]>([])
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

    const handleNavigate = (user:UserTypes) =>{
        if( user.role.name ==="admin" || user.role.name ==="financial" || user.role.name ==="pre sale"){
            navigate("/home")
        }else{
            navigate("/cartao-ponto/dot")
        }
    }

    const login = ({token, user, isChecked}:loginParams) =>{
        if(isChecked){
            localStorage.setItem("token", token)
        }
        sessionStorage.setItem("token", token)
        setLogged(true);
        user && setUserStorage(user)
        getNotifications()
        handleNavigate(user)   
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

    const getNotifications = () =>{
        Api.get(`/notification`)
            .then((res)=>{setNotifications(res.data);
            })
            .catch((err)=>{setNotifications([])})
    }

    return <AuthContext.Provider value={{logged, login, logout, logoutStay, userStorage, getUserByToken, notifications, getNotifications}}>{children}</AuthContext.Provider>
}

export const useAuth = ()=> useContext(AuthContext)