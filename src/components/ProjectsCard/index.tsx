import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../services/api";
import * as Style from "./style";

const teste = ['','','','','','','','','','','','','']



const ProjectsCard = () => {

  const navigate = useNavigate()
  const [ openNewTeam, setOpenNewTeam ] = useState<boolean>(false)
  const [ allProjects, setAllProjects ] = useState<any>([])

  const handleAllProjects = () =>{
    Api.get("/project")
    .then((res)=>{
        setAllProjects(res.data)
    })
    .catch((err)=>{})
  }

  const handleNext = (projectId: string) =>{
    projectId && sessionStorage.setItem("projectId", projectId);
    navigate("/projeto")
  }

useEffect(()=>{
  handleAllProjects()
},[])

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
                  <p className="confirmNewProject" onClick={()=>{}}>Cadastrar</p>
                </section>}
                <section className="allCards">
                {allProjects && allProjects.map((element:any , index:number)=>{
                  return(
                  <div key={index} className="card" onClick={()=>{
                    handleNext(element.id);
                    }}>
                        <p>{`Projeto ${element.name}`}</p>
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
