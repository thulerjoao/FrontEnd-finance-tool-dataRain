import { useState } from "react";
import * as Style from "./style";

const teste = ['','','','','','','','','','','','','']



const ProjectsCard = () => {

  const [ openNewTeam, setOpenNewTeam ] = useState<boolean>(false)

  return (
          <Style.ProjectsContainer>
              <section className="section01">
                <h2>Projetos</h2>         
                <div className="newTeam">
                  <p onClick={()=>setOpenNewTeam(!openNewTeam)}>{`Adicionar novo projeto ${openNewTeam? '-' : '+'}`}</p>
                </div>
              </section>
              <section className="section02">
                {openNewTeam && <section className="registerTeam newQuestion animate__animated animate__fadeInDownBig animate__delay-0.5s">
                  <div>
                    <p>Nome</p>
                    <input type="text"></input>
                  </div>
                  <div>
                    <p >Decrição</p>
                    <input type="text" className="inputDescription"></input>
                  </div>
                  <p className="confirmNewTeam" onClick={()=>{}}>Cadastrar</p>
                </section>}
                <section className="allCards">
                {teste.map((element:any , index:number)=>{
                  return(
                  <div className="card">
                        <p>{`Projeto 0${index+1}`}</p>
                        <Style.Settings/>{" "}
                  </div>
                  )
                  })}
                  </section>

              </section>
          </Style.ProjectsContainer>  
  );
};

export default ProjectsCard;
