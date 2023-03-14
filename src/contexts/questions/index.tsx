import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import Api from "../../services/api";
import React from "react";


interface QuestionsProviderProps{
    children: ReactNode
}

interface QuestionsProviderData{
    questions: any,
    updateQuestion: ()=> void
}

const QuestionsContext = createContext<QuestionsProviderData>({} as QuestionsProviderData)

export const QuestionsProvider = ({children}:QuestionsProviderProps)=>{

    const [ questions, setQuestions ] = useState <any>()

    const updateQuestion = () =>{
        
        Api.get("/question")
        .then((res)=> {
            setQuestions(res.data);
            console.log("entrei aqui sim");
            
        })
        .catch(()=>{})
    }   
    
    useEffect(() => updateQuestion(), [])

    return <QuestionsContext.Provider value={{ questions, updateQuestion }}>{children}</QuestionsContext.Provider>
}

export const useQuestions = ()=> useContext(QuestionsContext)