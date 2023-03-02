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

interface TimerSystemProps {
  setIsTimerSystem: Dispatch<SetStateAction<boolean>>
}

const TimerSystemExtraHour = ({setIsTimerSystem}:TimerSystemProps) => {

  const { projects } = useProject()
  const [ projectId, setProjectId ] = useState<string>(projects[0].id)
  
  const [date, setDate] = useState(new Date());
  const currentDate = new Date()
  const comertialDate = (moment(date).format('DD/MM/YYYY'));

  console.log(currentDate);
  

  const [ text, setText ] = useState<string>('')
  const [ isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleRequire = () =>{
    if(date >= currentDate){
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
    }).catch(()=>{
      toast.error("Falha ao realizar pedido")
    })
  }
  
 

  return (
          <Style.TimeCardContainer>
              <section className="section01">
                <h2>Gerenciamento de hora extra</h2>         
              </section>
              <section className="section02">
                <div className="mainCard">
                  <div className="fisrtSection">
                      <div className="topPart">
                      <select onChange={(e)=>setProjectId(e.target.value)}>
                        {projects && projects.map((element)=>{
                          return(
                            <option value={element.id}>{element.name}</option>
                          )
                        })}
                      </select>
                      <p>ATENÇÃO: Lançamento de hora extra liberado para o dia de hoje.</p>
                      </div>
                      <div className="askForTime">
                          <Calendar className="calendar" value={date} onChange={setDate}/>
                          <textarea value={text} onChange={(e)=>setText(e.target.value)} wrap="hard" placeholder="Justificativa do pedido de hora extra"></textarea>
                          <Button  variant="contained" className="buttonLaunch" onClick={()=>{handleRequire()}}>Lançar pedido</Button>
                      </div>
                      <div className="statusSection">
                        <h3>Status de pedidos</h3>
                        <section>
                          <div>
                            <p className="approved">- 17/03/2023 - Aprovado</p>
                            <p className="description">Preciso dessa hora para ajustar o modal de editar clientes</p>
                          </div>
                          <div>
                            <p>- 17/03/2023 - Em análise</p>
                            <p className="description">Preciso dessa hora para ajustar o modal de editar clientes</p>
                          </div>
                          <div>
                            <p>- 17/03/2023 - Em análise</p>
                            <p className="description">Preciso dessa hora para ajustar o modal de editar clientes</p>
                          </div>
                          <div>
                            <p className="reproved">- 17/03/2023 - Reprovado</p>
                            <p className="description">Preciso dessa hora para ajustar o modal de editar clientes</p>
                          </div>
                          <div>
                            <p>- 17/03/2023 - Em análise</p>
                            <p className="description">Preciso dessa hora para ajustar o modal de editar clientes</p>
                          </div>
                          <div>
                            <p className="reproved">- 17/03/2023 - Reprovado</p>
                            <p className="description">Preciso dessa hora para ajustar o modal de editar clientes</p>
                          </div>
                          <div>
                            <p className="reproved">- 17/03/2023 - Reprovado</p>
                            <p className="description">Preciso dessa hora para ajustar o modal de editar clientes</p>
                          </div>
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
