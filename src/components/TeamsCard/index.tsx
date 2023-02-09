import { useState } from "react";
import * as Style from "./style";


const TeamsCard = () => {

  const [ openNewTeam, setOpenNewTeam ] = useState<boolean>(false)

  return (
          <Style.TeamsContainer>
              <section className="section01">
                <h2>Equipes</h2>         
              </section>
              <section className="section02">
                <div className="newTeam">
                  <p onClick={()=>setOpenNewTeam(!openNewTeam)}>{`Cadastrar nova equipe ${openNewTeam? '-' : '+'}`}</p>
                </div>
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
                <div className="top">
                  <p>Equipes</p>
                  <p>Valor/Hora</p>
                </div>

              </section>
          </Style.TeamsContainer>  
  );
};

export default TeamsCard;
