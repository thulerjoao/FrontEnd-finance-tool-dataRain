import * as Style from "./style";
import React, { useEffect } from "react";
import { Calendar } from 'react-calendar';
import { useState } from "react";
import moment from "moment";
import { Button } from "@mui/material";



const TimerSystemCard = () => {


  const [time, setTime] = useState(moment().format('HH:mm:ss'));

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
                  <span className="machine">
                    <div className="screen">
                      <h2>{time}</h2>
                      <h3>{firstUp(getCurrentDate())}</h3>
                    </div>
                    <div className="cardSpace">
                      <div className="card"><p>FIM EXPEDIENTE - 15:37</p></div>
                    </div>
                    <div className="cardSpace">
                      <div className="card"><p>VOLTA ALMOÇO - 12:50</p></div>
                    </div>
                    <div className="cardSpace">
                      <div className="card"><p>SAIDA ALMOÇO - 11:57</p></div>
                    </div>
                    <div className="cardSpace">
                      <div className="card"><p>ENTRADA - 07:59</p></div>
                    </div>
                  </span>
                  <span className="buttons">
                    <Button  variant="contained" className="buttonEnter " onClick={()=>{}}>Marcar Ponto
                    </Button>
                    <Button  variant="contained" className="buttonEnter extra" onClick={()=>{}}>Solicitar hora extra
                    </Button>
                  </span>
                </div>
              </section>
              




              {/* {test.map((element, index)=>{
                    return(
                      <div key={index} className="registers">
                        {element}
                      </div>
                    )
                  })} */}
                  
          </Style.TimeCardContainer>
          
          
  );
};

export default TimerSystemCard;
