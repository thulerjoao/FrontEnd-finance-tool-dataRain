import { useState } from "react";
import { toast } from "react-hot-toast";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useTeam } from "../../contexts/teamContext";
import Api from "../../services/api";
import DeleteTeam from "../ModalDeleteTeam";
import TeamSettings from "../ModalEditTeam";

import * as Style from "./style";



const TeamCard = (param:{team:any, count:number}) => {

const element = param.team
const index = param.count

const [ open, setOpen ] = useState<boolean>(false)
const [ isDeleteOpen, setIsDeleteOpen ] = useState<boolean>(false)
const [ isEditeOpen, setIsEditeOpen ] = useState<boolean>(false)

  return (
          <Style.TeamContainer>
                    <section className="card">
                      <p>{`${index<9? `0${index+1}`: index+1} - ${element.name}`}</p>
                      <p>{`R$: ${element.valuePerHour.toFixed(2)} /hr`}</p>
                      <Style.Settings onClick={()=>{setOpen(true)}}/>{" "}
                      {
                      open && 
                        <section className="dropMenu" onMouseLeave={()=>setOpen(false)}>
                            <div onClick={()=>setIsDeleteOpen(true)}>Excluir <BsTrash/> </div>
                            <div onClick={()=>setIsEditeOpen(true)}>Editar <BsPencil/> </div>
                        </section>
                    }   
                    </section>
                    <DeleteTeam
                    isModalOpen={isDeleteOpen}
                    setIsModalOpen={setIsDeleteOpen}
                    teamId={element.id}
                    teamName={element.name}
                  />
                    <TeamSettings
                    isModalOpen={isEditeOpen}
                    setIsModalOpen={setIsEditeOpen}
                    team={element}
                  />
          </Style.TeamContainer>  
  );
};

export default TeamCard;
