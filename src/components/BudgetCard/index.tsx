import { Button } from "@mui/material"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import * as Styled from "./style"
import React, { useEffect, useState } from "react";
import Api from "../../services/api";
import reportPDF from "../Report/report"

const BudgetCard = () =>{

    const navigate = useNavigate()
    const clientId = sessionStorage.getItem("clientId")

    const [ getInputFree, setGetInputFree ] = useState<boolean>(true)
    const [ answers, setAnswers ] = useState<any>()
    const [ budGet, setBudGet ] = useState<any>()
    const [ totalHours, setTotalHours ] = useState<number>(0)
    const [ totalValue, setTotalValue ] = useState<number>(0)
    const [ coment, setComent ] = useState<string>() //para futura implementação do campo de comentário adicional

    const handleSave = () =>{
        Api.patch(`/budget-request/${clientId}`, 
        {
            formResponses: [
                ...budGet
            ]
        }
        )
            .then(()=>toast.success("Orçamento salvo"))
            .catch(()=>toast.error("Erro ao alterar orçamento"))
    }

    const handleFinishBudget = () =>{
        Api.patch(`/budget-request/${clientId}`, 
        {
            formResponses: [
                ...budGet
            ]
        }
        )
            .then(()=>{
                Api.post("/budget-request/approved",
                {
                    budgetRequestId: clientId
                }
                )
                .then(()=>{
                    navigate("/home");
                    toast.success("Orçamento concluído")
                })
                .catch(()=>toast.error("Erro ao finalizar"))
            }) 
            .catch(()=>toast.error("Erro ao alterar orçamento"))
    }

    const handleTotalValues = () =>{
        let newHour:number = 0
        let newValue: number =0
        budGet && budGet.map((element: any)=>{
            if(!isNaN(element.workHours) && element.workHours !==null){
                newHour = newHour + element.workHours
                setTotalHours(newHour)
            }
            if(!isNaN(element.valuePerHour) && element.valuePerHour !== null){
                newValue = newValue + element.valuePerHour
                setTotalValue(newValue)
            }
        })
        
    }

    const handleGetForm = () =>{
        Api.get(`/budget-request/${clientId}`)
            .then((res)=>{
                setAnswers(res.data);
                // setBudGetId(res.data)
                setBudGet(res.data.formResponses.map((element: any)=>{
                    return {
                        id: element.id,
                        valuePerHour: element.valuePerHour,
                        workHours: element.workHours
                    }   
                })) 
            })
            .catch((err)=>{console.log(err)})
    }

    const handleUpdateHour = (index: number , value:number) =>{
        let budget = budGet
        budget[index].valuePerHour = value
        setBudGet(budget)
    }

    const handleUpdateValue = (index: number, value:number) =>{
        let budget = budGet
        budget[index].workHours = value
        setBudGet(budget)
    }

    useEffect(()=>handleGetForm(), [])
    useEffect(()=>handleTotalValues(), [budGet])

    
    const handlePDF = () =>{
        Api.patch(`/budget-request/${clientId}`, 
        {
            formResponses: [
                ...budGet
            ]
        }
        )
            .then(()=>{
                let data
                Api.get(`/budget-request/${clientId}`)
                    .then((res)=>{
                        data = res.data;
                        reportPDF(data)
                    })
                    .catch(()=> toast.error("Erro ao gerar PDF"))
               
        }).catch(()=> toast.error("Erro ao gerar PDF"))
        
        
    }
    return(
        <Styled.BudgetContainer>
            
                <Styled.ProjectPageReturn>
                    {" "}
                    <Styled.BackIcon onClick={() => navigate("/home")} />{" "}
                </Styled.ProjectPageReturn>
                <section className="client">
                    <div>
                        <p onClick={()=>handleTotalValues()}>Cliente</p>
                        <h3>{answers && answers.client.mainContact.charAt(0).toUpperCase() + answers.client.mainContact.slice(1)}</h3>
                    </div>
                    <div>
                        <p>Empresa</p>
                        <h3>{answers && answers.client.companyName.charAt(0).toUpperCase() + answers.client.companyName.slice(1)}</h3>
                    </div>
                </section>
                
                <div className="title">
                    <div className="fisrth2">
                        <h2 className="fisrth2">Questões</h2>
                    </div>
                    <div>
                        <h2>Equipe</h2>
                    </div>
                    <div>
                        <h2>Horas</h2>
                    </div>
                    <div>
                        <h2>Valor/hr</h2>
                    </div>
                </div>
                <section className="mainSection">
                { answers && answers.formResponses.map((element:any, index:any)=>{
                    return( 
                        <section className="summary">
                            <div className="questions">
                                    <div>
                                        <h4>{`${index + 1}- `}</h4>
                                        <h4>{`${element.question.description}`}</h4>
                                    </div>
                                    <p>{`${element.alternative !== null?`R. Obj.: ${element.alternative.description}` : ""}`}</p>
                                    <p>{`${element.responseDetails !== null? `R. Disc.: ${element.responseDetails}` : ""}`}</p>
                            </div>
                            <div className="team">
                                <p>{ element.alternative !== null? element.alternative.teams[0].team.name : "____"}</p>
                            </div>
                            <div className="hours">
                                <section>
                                    <div>
                                        <input
                                            className={element.workHours? "" : "empty"} 
                                            type="number" 
                                            value={getInputFree? element.workHours: undefined} 
                                            onChange={(e)=> {
                                            handleUpdateValue(index, e.target.valueAsNumber);
                                            handleTotalValues();
                                            }}
                                            onClick={()=>setGetInputFree(false)}
                                            ></input>
                                        <p> hr</p>
                                    </div>
                                </section>
                            </div>
                            <div className="value">
                                <section>
                                    <div>
                                        <p>R$: </p>
                                        <input
                                            className={element.valuePerHour? "" : "empty"} 
                                            type="number" 
                                            value={getInputFree? element.valuePerHour: undefined} 
                                            onChange={(e)=> {
                                            handleUpdateHour(index, e.target.valueAsNumber);
                                            handleTotalValues();
                                            }}
                                            onClick={()=>setGetInputFree(false)}
                                            ></input>
                                    </div>
                                </section>
                            </div>
                        </section>
                    )
                })
                }
                <section className="details">
                    <h2>Nota sobre o orçamento</h2>
                    <textarea wrap="hard" placeholder="Comentário adicional" onChange={(e)=>setComent(e.target.value)}></textarea>
                    <div className="extract">
                        <p>{`Horas Totais = ${totalHours.toFixed(0)}hr`}</p>
                        <p>{`Valor Total = R$ ${(totalHours * totalValue).toFixed(2)}`}</p>
                    </div>
                </section>
                <section className="botton">
                    <Button  variant="contained" className="buttonEnter" onClick={()=>{
                        handleFinishBudget()
                        }}>Finalizar orçamento
                    </Button>
                    <Button  variant="contained" className="buttonEnter save" onClick={()=>{
                        handleSave()
                        }}>Salvar alterações
                    </Button>
                    <Button  variant="contained" className="buttonEnter report" onClick={()=>{
                        handlePDF()
                        }}>Gerar Relatório
                    </Button>
                </section>
            </section>
   
        </Styled.BudgetContainer>
    )
}

export default BudgetCard