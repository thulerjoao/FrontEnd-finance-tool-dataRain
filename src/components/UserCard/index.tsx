import { Badge, Menu, MenuItem } from "@mui/material";
import { BsPencil, BsTrash } from "react-icons/bs";
import logo from "../../assets/images/default.png"
import React, { useState } from "react";
import * as Style from "./style"
import DeleteUser from "../ModalDeleteUser";
import { useUsers } from "../../contexts/userContext";
import UserSettings from "../ModalEditUser";

const UserCard = (element: any) => {

  const [ open, setOpen ] = useState<boolean>(false)
  const [ isDeleteOpen, setIsDeleteOpen ] = useState<boolean>(false)
  const [ isEditeOpen, setIsEditeOpen ] = useState<boolean>(false)

  return (
          <Style.UserContainer>
                    <div className="card">
                      <div>
                      <p>{element.element.roleName}</p>
                      <span>
                        <Style.Settings onClick={()=>{setOpen(true)}}/>{' '}
                      </span>
                    </div>
                    <section>
                      <img src={
                        element.element.imageUrl === null? logo :
                        `https://back-btc-finance-tool-production-0df0.up.railway.app${element.element.imageUrl}`
                        }></img>
                      <h2>{element.element.name}</h2>
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
