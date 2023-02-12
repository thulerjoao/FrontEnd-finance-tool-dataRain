import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Api from "../../services/api";
import DeleteProject from "../ModalDeleteProject";
import ProjectSettings from "../ModalEditProject";
import * as Style from "./style";


const ProjectIndividualCard = (param:{team:any, count:number}) => {

  const element = param.team
  const index = param.count

  const navigate = useNavigate()
  const [ openNewTeam, setOpenNewTeam ] = useState<boolean>(false)
  const [ allProjectIndividual, setAllProjectIndividual ] = useState<any>([])
  const [ newTeam, setNewTeam ] = useState<string>()
  const [ newTeamValue, setNewTeamValue ] = useState<string>()

  const [ open, setOpen ] = useState<boolean>(false)
  const [ isDeleteOpen, setIsDeleteOpen ] = useState<boolean>(false)
  const [ isEditeOpen, setIsEditeOpen ] = useState<boolean>(false)


  const handleNext = (projectId: string) =>{
    projectId && sessionStorage.setItem("projectId", projectId);
    navigate("/projeto")
  }


  return (
          <Style.ProjectIndividualContainer>
                  <div key={index} className="card" onClick={()=>{
                    handleNext(element.id);
                    }}>
                        <p>{`${index<9? `0${index+1}`: index+1} - ${element.name}`}</p>
                        <Style.Settings onClick={(event)=>{event.stopPropagation();setOpen(true)}}/>{" "}
                  </div>
                  {
                      open && 
                        <section className="dropMenu" onMouseLeave={()=>setOpen(false)}>
                            <div onClick={()=>setIsDeleteOpen(true)}>Excluir <BsTrash/> </div>
                            <div onClick={()=>setIsEditeOpen(true)}>Editar <BsPencil/> </div>
                        </section>
                    }   
                    
                    <DeleteProject
                    isModalOpen={isDeleteOpen}
                    setIsModalOpen={setIsDeleteOpen}
                    projectId={element.id}
                    projectName={element.name}
                  />
                    <ProjectSettings
                    isModalOpen={isEditeOpen}
                    setIsModalOpen={setIsEditeOpen}
                    project={element}
                  />
          </Style.ProjectIndividualContainer>  
  );
};

export default ProjectIndividualCard;
