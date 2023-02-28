import * as Style from "./style";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";
import moment from "moment";
import { Button } from "@mui/material";
import AskForHour from "../AskForHour";

interface TimerSystemProps {
  setIsTimerSystem: Dispatch<SetStateAction<boolean>>
}


const TimerSystemCard = ({setIsTimerSystem}:TimerSystemProps) => {


  const [time, setTime] = useState(moment().format('HH:mm:ss'));
  const [ isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);



    const getCurrentDate = (): string => {
      const date = new Date();
      const options:any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('pt-BR', options);
    };
  
    const firstUp = (prop: string) =>{
      return(prop.charAt(0).toUpperCase() + prop.slice(1))
    }

    const test = ["7:30", "12:02", "13:01"]

  return (
          <Style.TimeCardContainer>
              <section className="section01">
                <h2>Sistema de ponto</h2>         
              </section>
              <section className="section02">
                <div className="mainCard">
                <div className="topPart">
                  <select>
                    <option>Projeto 01</option>
                    <option>Projeto 02</option>
                    <option>Projeto 03</option>
                    <option>Projeto 04</option>
                  </select>
                  <p>ATENÇÃO: Lançamento de hora extra liberado para o dia de hoje.</p>
                </div>
                  <span className="machine">
                    <div className="screen">
                      <h2>{time}</h2>
                      <h3>{firstUp(getCurrentDate())}</h3>
                    </div>
                    <div className="cardSpace">
                      <div className="card title"><p>Projeto x</p></div>
                      <div className="card"><p>Fim hora extra - 19:23</p></div>
                      <div className="card"><p>Início hora extra - 16:48</p></div>
                      <div className="card"><p>Fim expediente - 15:37</p></div>
                      <div className="card"><p>Volta do almoço - 12:50</p></div>
                      <div className="card"><p>Saida para alomoço - 11:57</p></div>
                      <div className="card lastOne"><p>Início expediente - 07:59</p></div>
                    </div>
                  </span>
                  <span className="buttons">
                    <Button  variant="contained" className="buttonEnter " onClick={()=>{}}>Marcar Ponto
                    </Button>
                    <Button  
                      variant="contained" 
                      className="buttonEnter extra" 
                      onClick={()=>{setIsTimerSystem(false)}
                      }>Hora extra
                    </Button>
                  </span>
                </div>
              </section>
              <AskForHour
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                  />    
          </Style.TimeCardContainer>
          
          
  );
};

export default TimerSystemCard;
