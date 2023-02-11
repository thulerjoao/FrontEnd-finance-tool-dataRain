import { useState } from "react";
import * as Style from "./style";

const teste = ['','','','','','','','','','','','','']



const TeamsCard = () => {

  const [ openNewTeam, setOpenNewTeam ] = useState<boolean>(false)

  return (
          <Style.TeamsContainer>
              <section className="section01">
                <h2>Equipes</h2>         
                <div className="newTeam">
                  <p onClick={()=>setOpenNewTeam(!openNewTeam)}>{`Cadastrar nova equipe ${openNewTeam? '-' : '+'}`}</p>
                </div>
              </section>
              <section className="section02">
                {openNewTeam && <section className="registerTeam newQuestion animate__animated animate__fadeInDownBig animate__delay-0.5s">
                  <div>
                    <p>Nome da equipe</p>
                    <p >Valor por hora</p>
                  </div>
                  <div>
                    <input type="text"></input>
                    <input type="number"></input>
                  </div>
                  <p className="confirmNewTeam" onClick={()=>{}}>Cadastrar</p>
                </section>}
                {teste.map((element:any , index:number)=>{
                  return(
                    <section className="card">
                      <p>{`Equipe - Equipe 0${index+1}`}</p>
                      <p>{`R$: ${100+(5*index)},00 /hr`}</p>
                      <Style.Settings/>{" "}
                    </section>
                  )
                  })}

              </section>
          </Style.TeamsContainer>  
  );
};

export default TeamsCard;
