import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { useProject } from "../../contexts/projectContext";
import Api from "../../services/api";
import ProjectIndividualCard from "../ProjectsIndividualCard";
import * as Style from "./style";

const ProjectsCard = () => {

  const navigate = useNavigate()
  const [ openNewTeam, setOpenNewTeam ] = useState<boolean>(false)
  const { userStorage } = useAuth()
  const [ newTeam, setNewTeam ] = useState<string>()
  const [ newTeamValue, setNewTeamValue ] = useState<string>()
  const { projects, handleGetProjects } = useProject()


  useEffect(()=>{
    handleGetProjects()
  },[])
  

  const handleNewProject = () =>{
    if(newTeam !== "" && newTeamValue !== ""){
      Api.post("/project",
      {
        name: newTeam,
        description: newTeamValue
      }
      )
      .then(()=>{
        handleGetProjects()
        setOpenNewTeam(false)
        toast.success("Projeto criado")
      }).catch(()=>{
        toast.error("Erro ao criar projeto")
      })
    }
  }

  return (
          <Style.ProjectsContainer>
              <section className="section01">
                <h2>Projetos</h2>
                { userStorage.role.name === "admin" && 
                  <div className="newTeam">
                    <p onClick={()=>setOpenNewTeam(!openNewTeam)}>{`Adicionar novo projeto ${openNewTeam? '-' : '+'}`}</p>
                  </div>
                }         
              </section>
              <section className="section02">
                {openNewTeam && <section className="registerTeam newQuestion animate__animated animate__fadeInDownBig animate__delay-0.5s">
                  <div>
                    <p>Nome</p>
                    <input type="text" onChange={(e)=>setNewTeam(e.target.value)}></input>
                  </div>
                  <div>
                    <p >Decrição</p>
                    <input type="text" className="inputDescription" onChange={(e)=>setNewTeamValue(e.target.value)}></input>
                  </div>
                  <p className="confirmNewProject" onClick={()=>{handleNewProject()}}>Cadastrar</p>
                </section>}
                <section className="allCards">
                {projects && projects.map((element:any , index:number)=>{
                  return(
                  <ProjectIndividualCard key={index} count={index} team={element}/>
                  )
                  })}
                  </section>

              </section>
          </Style.ProjectsContainer>  
  );
};

export default ProjectsCard;
