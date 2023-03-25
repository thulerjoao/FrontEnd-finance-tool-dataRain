import { Badge, Menu, MenuItem } from "@mui/material";
import { BsPencil, BsTrash } from "react-icons/bs";
import logo from "../../assets/images/default.png"
import React, { useState } from "react";
import * as Style from "./style"
import DeleteUser from "../ModalDeleteUser";
import { useUsers } from "../../contexts/userContext";
import UserSettings from "../ModalEditUser";
import { useAuth } from "../../contexts/auth";

const UserCard = (element: any) => {

  const { userStorage } = useAuth()

  const [ open, setOpen ] = useState<boolean>(false)
  const [ isDeleteOpen, setIsDeleteOpen ] = useState<boolean>(false)
  const [ isEditeOpen, setIsEditeOpen ] = useState<boolean>(false)
  
  const firstUp = (prop: string) =>{
    return(prop.charAt(0).toUpperCase() + prop.slice(1))
}


  return (
          <Style.UserContainer>
                    <div className="card">
                      <div>
                      <p>{firstUp(element.element.role.name)}</p>
                      { userStorage.role.name === "admin" &&
                        <span>
                        <Style.Settings onClick={()=>{setOpen(true)}}/>{' '}
                      </span>}
                    </div>
                    <section>
                      <img src={
                        element.element.imageUrl === null? logo :
                        `http://data-rain-finance-tool-server-production.up.railway.app${element.element.imageUrl}`
                        //`http://localhost:3333/${element.element.imageUrl}`
                        }></img>
                      <h2>{firstUp(element.element.name)}</h2>
                      <p>{element.element.email}</p>
                      <p>{`Billable: ${element.element.billable?'Sim': 'Não'}`}</p>
                    </section>
                    {open && 
                    <section className="dropMenu" onMouseLeave={()=>setOpen(false)}>
                        <div onClick={()=>setIsDeleteOpen(true)}>Excluir <BsTrash/> </div>
                        <div onClick={()=>setIsEditeOpen(true)}>Editar <BsPencil/> </div>
                    </section>}         
                  </div>
                  <DeleteUser 
                    isModalOpen={isDeleteOpen}
                    setIsModalOpen={setIsDeleteOpen}
                    userId={element.element.id}
                    userName={element.element.name}
                  />
                  <UserSettings
                    isModalOpen={isEditeOpen}
                    setIsModalOpen={setIsEditeOpen}
                    user={element.element}
                  />
          </Style.UserContainer>  
  );
};

export default UserCard;
