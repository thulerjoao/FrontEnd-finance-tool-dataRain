import * as Style from "./style";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Calendar } from 'react-calendar';
import { useState } from "react";
import moment from "moment";
import { Button } from "@mui/material";
import 'react-calendar/dist/Calendar.css';
import AskForHour from "../ModalAskForHour";
import { toast } from "react-hot-toast";
import Api from "../../services/api";
import { useProject } from "../../contexts/projectContext";
import { ExtraHour } from "../../types/interface";

interface TimerSystemProps {
  setIsTimerSystem: Dispatch<SetStateAction<boolean>>,
  projectId:string,
  handleProject:(prop:string)=>void,
  handleStatus:()=>void,
  isExtraHour: boolean,
  extraHour: ExtraHour[],
}

const TimerSystemExtraHour = ({setIsTimerSystem, projectId, handleProject, handleStatus, isExtraHour, extraHour}:TimerSystemProps) => {

  const { projects } = useProject()
  
  const [date, setDate] = useState(new Date());
  const comertialDate = (moment(date).format('DD/MM/YYYY'));
  

  const [ text, setText ] = useState<string>('')
  const [ isModalOpen, setIsModalOpen] = useState<boolean>(false)

  

  const handleRequire = () =>{
    var umDiaAtras = new Date();
    umDiaAtras.setDate(umDiaAtras.getDate() - 1)
    if(date >= umDiaAtras ){
      if(text !== ''){
        setIsModalOpen(true)
      }else{
        toast.error('Justificativa inválida')
      }
    }else{
      toast.error("Data inválida")
    }
  }

  const finishRequirement = () =>{
      Api.post('/request-send-overtime/user',{
      projectId: projectId,
      dateToSendTime: comertialDate,
      requestDescription: text,
    }).then(()=>{
      toast.success("Pedido enviado")
      setIsModalOpen(false)
    }).catch(()=>{
      toast.error("Falha ao realizar pedido")
      setIsModalOpen(false)
    })
  }

  useEffect(() => {
    handleStatus()
  }, []);
  

  return (
          <Style.TimeCardContainer>
              <section className="section01">
                <h2>Gerenciamento de hora extra</h2>         
              </section>
              <section className="section02">
                <div className="mainCard">
                  <div className="fisrtSection">
                      <div className="topPart">
                      <select value={projectId} onChange={(e)=>handleProject(e.target.value)}>
                        {projects && projects.map((element)=>{
                          return(
                            <option value={element.id}>{element.name}</option>
                          )
                        })}
                      </select>
                      {isExtraHour&& <p className="extraAlert">ATENÇÃO: Lançamento de hora extra liberado para o dia de hoje</p>}
                      </div>
                      <div className="askForTime">
                          <Calendar className="calendar" value={date} onChange={setDate}/>
                          <textarea value={text} onChange={(e)=>setText(e.target.value)} wrap="hard" placeholder="Justificativa do pedido de hora extra"></textarea>
                          <Button  variant="contained" className="buttonLaunch" onClick={()=>{handleRequire()}}>Lançar pedido</Button>
                      </div>
                      <div className="statusSection">
                        <h3>Status de pedidos</h3>
                        <section>
                          {extraHour && extraHour.map((element)=>{
                            return(
                              <div>
                                <p className={element.status}>- {element.dateToSendTime} - {element.status === "approved"? 
                                  "Aprovado":element.status === "analyze"?"Em Análise": "Negado"} </p>
                                <p className="description">{element.requestDescription}</p>
                              </div>
                            )
                          })}
                          {extraHour.length == 0 && <div><p>Nenhuma requisição encontrada</p></div>}
                        </section>
                      </div>
                  </div>
                  <span className="buttons">
                    <Button  
                      variant="contained" 
                      className="buttonEnter extra" 
                      onClick={()=>{setIsTimerSystem(true)}
                      }>Ponto digital
                    </Button>
                  </span>
                </div>
              </section>
              <AskForHour
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    comertialDate={comertialDate}
                    finishRequirement={finishRequirement}
                  />   
          </Style.TimeCardContainer>
          
          
  );
};

export default TimerSystemExtraHour;
