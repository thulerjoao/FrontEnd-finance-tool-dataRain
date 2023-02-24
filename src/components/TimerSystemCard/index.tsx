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


  return (
          <Style.TimeCardContainer>
              <section className="section01">
                <h2>Sistema de ponto</h2>         
              </section>
              <section className="section02">
                <div className="mainCard">
                  <h2>{time}</h2>
                  <h3>{firstUp(getCurrentDate())}</h3>
                  <span className="buttons">
                    <Button  variant="contained" className="buttonEnter save" onClick={()=>{}}>Registrar horário
                    </Button>
                    <Button  variant="contained" className="buttonEnter save" onClick={()=>{}}>Solicitar hora extra
                    </Button>
                  </span>
                </div>
              </section>
          </Style.TimeCardContainer>  
  );
};

export default TimerSystemCard;
