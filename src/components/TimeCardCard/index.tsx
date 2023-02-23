import * as Style from "./style";
import { Calendar } from 'react-calendar';
import { useState } from "react";

const TimeCardCard = () => {

  const [date, setDate] = useState(new Date());
  console.log(date);
  


  return (
          <Style.TimeCardContainer>
              <section className="section01">
                <h2>Cartão de ponto</h2>         
              </section>
              <section className="section02">
                <div>
                  <h1>Selecione uma data</h1>
                  <Style.StyledCalendar value={date} onChange={setDate} />
                </div>
              </section>
          </Style.TimeCardContainer>  
  );
};

export default TimeCardCard;
