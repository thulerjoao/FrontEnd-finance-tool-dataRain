import * as Style from "./style";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Calendar } from 'react-calendar';
import { useState } from "react";
import moment from "moment";
import { Button } from "@mui/material";
import 'react-calendar/dist/Calendar.css';

interface TimerSystemProps {
  setIsTimerSystem: Dispatch<SetStateAction<boolean>>
}

const TimerSystemExtraHour = ({setIsTimerSystem}:TimerSystemProps) => {

  const [date, setDate] = useState(new Date());
  const [ text, setText ] = useState<string>('')



  return (
          <Style.TimeCardContainer>
              <section className="section01">
                <h2>Gerenciamento de hora extra</h2>         
              </section>
              <section className="section02">
                <div className="mainCard">
                  <div className="fisrtSection">
                      <div className="topPart">
                      <select>
                        <option>Projeto 01</option>
                        <option>Projeto 02</option>
                        <option>Projeto 03</option>
                        <option>Projeto 04</option>
                      </select>
                      <p>ATENÇÃO: Lançamento de hora extra liberado para o dia de hoje.</p>
                      </div>
                      <div className="askForTime">
                          <Calendar className="calendar" value={date} onChange={setDate}/>
                          <textarea value={text} onChange={(e)=>setText(e.target.value)} wrap="hard" placeholder="Detalhes do pedido para hora extra"></textarea>
                          <Button  variant="contained" className="buttonLaunch" onClick={()=>{}}>Lançar pedido</Button>
                      </div>
                      {/* <section className="mainSection">
                        <div>
                  
                        </div>
                        <div></div>
                      </section> */}
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
          </Style.TimeCardContainer>
          
          
  );
};

export default TimerSystemExtraHour;