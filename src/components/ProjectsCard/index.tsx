import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Api from "../../services/api";
import * as Style from "./style";

const teste = ['','','','','','','','','','','','','']



const ProjectsCard = () => {

  const navigate = useNavigate()
  const [ openNewTeam, setOpenNewTeam ] = useState<boolean>(false)
  const [ allProjects, setAllProjects ] = useState<any>([])
  const [ newTeam, setNewTeam ] = useState<string>()
  const [ newTeamValue, setNewTeamValue ] = useState<string>()

  const handleNewProject = () =>{
    if(newTeam !== "" && newTeamValue !== ""){
      Api.post("/project",
      {
        name: newTeam,
        description: newTeamValue
      }
      )
      .then(()=>{
        handleAllProjects()
        setOpenNewTeam(false)
        toast.success("Projeto criado")
      }).catch(()=>{
        toast.error("Erro ao criar projeto")
      })
    }
  }

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
                  <div key={index} className="card" onClick={()=>{
                    handleNext(element.id);
                    }}>
                        <p>{`${index<9? `0${index+1}`: index+1} - ${element.name}`}</p>
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
