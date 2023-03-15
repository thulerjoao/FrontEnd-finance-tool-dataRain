import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Api from "../../services/api";
import { UserTypes } from "../../types/interface";
import { useAuth } from "../auth";
import React from "react";

interface userProviderData {
    allUsers: UserTypes[];
    budgets: any;
    handleGetUsers: () => void;
    handleGetBudgets: () => void;
}

interface userProviderProps {
    children: ReactNode;
}

const UserContex = createContext<userProviderData>({} as userProviderData)

export const UserProvider = ({children}: userProviderProps) => {
    const[ allUsers , setAllUsers] = useState<UserTypes[]>([])
    const[ budgets, setBudgets ] = useState()

    const{ logged } = useAuth()

    const handleGetUsers = () => {
        Api.get("/user")
          .then((res) => setAllUsers(res.data))
          .catch((error) => {});
      };

    const handleGetBudgets = () => {
      Api.get("/budget-request")
        .then((res)=>setBudgets(res.data))
        .catch((error)=>{setBudgets(undefined)})
    }
  
      useEffect(() => {
        if (logged){
          handleGetUsers();
          handleGetBudgets();
        };
      }, [logged]);
      

    return (
        <UserContex.Provider value={{allUsers, budgets, handleGetUsers, handleGetBudgets}}>{children}</UserContex.Provider>
    )
}

export const useUsers = () => useContext(UserContex)