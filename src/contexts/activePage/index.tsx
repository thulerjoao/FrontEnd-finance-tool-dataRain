import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ActiveProviderProps{
    children: ReactNode
}

interface ActiveProviderData{
    active: string,
    fade: boolean,
    setActive: (param:string)=> void,
    setFade: (param:boolean)=> void,
}

const ActiveContext = createContext<ActiveProviderData>({} as ActiveProviderData)

export const ActiveProvider = ({children}:ActiveProviderProps)=>{
    
    const [ active, setActive ] = useState<string>("home")
    const [ fade, setFade ] = useState<boolean>(true)

    const handleFade = () =>{
        if(active === "home" || active === ""){
            setFade(true)
        }else{
            setFade(false)
        }
    }

    useEffect(()=>{
        setTimeout(()=> handleFade(), 500);
    },[active])

    return <ActiveContext.Provider value={{ active, fade, setActive, setFade }}>{children}</ActiveContext.Provider>
}

export const useActive = ()=> useContext(ActiveContext)