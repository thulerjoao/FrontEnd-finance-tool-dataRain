import { Badge, Menu, MenuItem } from "@mui/material";
import { BsPencil, BsTrash } from "react-icons/bs";

import React, { useEffect, useState } from "react";
import * as Style from "./style"
import UserCard from "../UserCard";
import Api from "../../services/api";
import { useUsers } from "../../contexts/userContext";

const teste = ['','','','','','','','','','','','','']


const UsersCard = () => {

  const allUsers = useUsers()
  const users = allUsers.allUsers

  return (
          <Style.UsersContainer>
              <section className="section01">
                <h2>Listagem de Usuários</h2>
              </section>
              <section className="section02">
                  {users && users.map((element: any, index:number)=>{
                  return(
                    <UserCard element={element} key={index}/>
                  )})
                  }
              </section>
          </Style.UsersContainer>  
  );
};

export default UsersCard;
