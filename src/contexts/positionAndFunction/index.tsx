import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Api from "../../services/api";

interface postionAndFunctionData {
    role: any[];
    position: any[];
    getRoles: () => void;
    getPosition: () => void;
}

interface userProviderProps {
    children: ReactNode;
}

const UserContex = createContext<postionAndFunctionData>({} as postionAndFunctionData)

export const PositionAndFunctionProvider = ({children}: userProviderProps) => {
    
  const [ role, setRole ] = useState([]);
  const [ position, setPosition ] = useState([]);
  // const [ selectedRole, setSelectedRole  ] = useState<string>()
  // const [ selectedPosition, setSelectedPosition ] = useState<string>()

  const getRoles = () => {
    Api.get("/role")
      .then((res) => {
        setRole(res.data)
        // setSelectedRole(res.data[0].id)
      })
      .catch((err) => {});
  };

  const getPosition = () =>{
    Api.get("/position")
    .then((res) => {
      setPosition(res.data)
      // setSelectedPosition(res.data[0].id)
    })
    .catch((err) => {});
  }

  useEffect(()=>{
    getRoles();
    getPosition();
  }
    ,[])


    return (
        <UserContex.Provider value={{role, position, getRoles, getPosition}}>{children}</UserContex.Provider>
    )
}

export const usePositionAndFunction = () => useContext(UserContex)