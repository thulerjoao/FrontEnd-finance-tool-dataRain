import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import React from "react";
import toast from "react-hot-toast";
import Api from "../../services/api";
import { useUsers } from "../../contexts/userContext";

interface ModalUserProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  user: any
}

export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    padding: "0",
    borderRadius: "15px",
    boxShadow: "rgb(0 0 0 / 20%) 1px 1px 10px",
  },
};

const UserSettings = ({
  isModalOpen,
  setIsModalOpen,
  user,

}: ModalUserProps) => {

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  
  const { handleGetUsers } = useUsers()
  const [ billable, setBillable] = useState<boolean>(user.billable)
  const [ role, setRole] = useState<any[]>()
  const [ selectedRole, setSelectedRole] = useState<string>()

  const handleFirstRoleId = (prop: any) =>{
    const firstRole = prop.filter((element: any)=>element.name.includes(user.role.name))[0]
    setSelectedRole(firstRole.id)   
  }

  console.log(role);
  

  const firstBilable = () =>{
    if(billable){
      return "sim"
    }else{
      return "nao"
    }
  }

  const handleBillable = (prop:string) => {
    if(prop === "sim"){
      setBillable(true)
    }else{
      setBillable(false)
    }
  }

  const getRoles = () => {
    Api.get("/role")
      .then((res) => {
        setRole(res.data)
        handleFirstRoleId(res.data)
      })
      .catch((err) => {});
  };


  const handleUpdateUser = () =>{
    Api.patch(`user/${user.id}`,
    {
      billable: billable,
      roleId: selectedRole
    }
    )
    .then(()=>{
      handleGetUsers()
      handleCloseModal()
    })
    .catch(()=>{
      toast.error("Não possível atualizar")
    })
  }

  useEffect(()=> getRoles(), [])

    const firstUp = (prop: string) =>{
    return(prop.charAt(0).toUpperCase() + prop.slice(1))
}


  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Style.ModalUserContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>Editar status do usuário</h2>
        <section>
          <h3>{firstUp(user.name)}</h3>
          <p>Billable</p>
          <select value={firstBilable()} onChange={(e)=> handleBillable(e.target.value)}>
              <option value={"sim"} >Sim</option>
              <option value={"nao"}>Não</option>
          </select>
          {user.name.toUpperCase() !== 'ADMIN' && 
          <>
          <p>Posição</p>
          <select value={selectedRole} onChange={(e)=> setSelectedRole(e.target.value)}>
            {role && role.map((element:any, index:number)=>{
              return(
                <option value={element.id} key={index}>{firstUp(element.name)}</option>
              )
            })}
          </select>
          </>
          }
        </section>
        <section className="botton">
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
          <Button variant="contained" className="buttonEnter" onClick={()=>handleUpdateUser()}>
            Atualizar
          </Button>
        </section>
      </Style.ModalUserContainer>
    </Modal>
  );
};

export default UserSettings;
