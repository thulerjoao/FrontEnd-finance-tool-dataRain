import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useProject } from "../../contexts/projectContext";
import Api from "../../services/api";
import ProjectIndividualCard from "../ProjectsIndividualCard";
import * as Style from "./style";

const ProjectsCard = () => {

  const navigate = useNavigate()
  const [ openNewTeam, setOpenNewTeam ] = useState<boolean>(false)
  // const [ allProjects, setAllProjects ] = useState<any>([])
  const [ newTeam, setNewTeam ] = useState<string>()
  const [ newTeamValue, setNewTeamValue ] = useState<string>()
  const { projects, handleGetProjects } = useProject()

  const allProjects = projects || []

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

  // const handleAllProjects = () =>{
  //   Api.get("/project")
  //   .then((res)=>{
  //       setAllProjects(res.data)
  //   })
  //   .catch((err)=>{})
  // }

  // const handleNext = (projectId: string) =>{
  //   projectId && sessionStorage.setItem("projectId", projectId);
  //   navigate("/projeto")
  // }


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
                    <input type="text" onChange={(e)=>setNewTeam(e.target.value)}></input>
                  </div>
                  <div>
                    <p >Decrição</p>
                    <input type="text" className="inputDescription" onChange={(e)=>setNewTeamValue(e.target.value)}></input>
                  </div>
                  <p className="confirmNewProject" onClick={()=>{handleNewProject()}}>Cadastrar</p>
                </section>}
                <section className="allCards">
                {allProjects && allProjects.map((element:any , index:number)=>{
                  return(
                  <ProjectIndividualCard count={index} team={element}/>
                  )
                  })}
                  </section>

              </section>
          </Style.ProjectsContainer>  
  );
};

export default ProjectsCard;
