import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import React from "react";
import toast from "react-hot-toast";
import Api from "../../services/api";
import { useUsers } from "../../contexts/userContext";

interface ModalNewUserProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  project: any,
  isManager: boolean,
  handleGetProject: ()=> void
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

const NewUserSettings = ({
  isModalOpen,
  setIsModalOpen,
  project,
  isManager,
  handleGetProject

}: ModalNewUserProps) => {

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { allUsers, budgets, handleGetUsers, handleGetBudgets } = useUsers()
  const [ newUserId, setNewUserId] = useState<string>("")
  const [ newUserValue, setNewUserValue] = useState<number>()

    // filtro para buscar o manager
  const avaliableMannager = allUsers.filter(
    (element) => element.role.name === "manager"
  );

  //filtro para buscar os usuários
  const avaliableUsers = allUsers.filter(
    (element) => element.role.name === "professional services"
  );

    const handleNewUser = () =>{
      if(!isManager){
        if(newUserId === ""){
          avaliableMannager[0].id && registerNewUser(avaliableMannager[0].id)
        }else{
          registerNewUser(newUserId)
        }
      }else{
        if(newUserId === ""){
          avaliableUsers[0].id && registerNewUser(avaliableUsers[0].id)
        }else{
          registerNewUser(newUserId)
        }
      }
    }

    const registerNewUser = (userId:string) =>{
      if(newUserValue !== undefined && newUserValue > 0){
        Api.post("/project/add-user",
        {
          userId: userId,
          projectId: project.id,
          valuePerUserHour: newUserValue,
        }
        )
        .then(()=>{
            handleGetProject()
            handleCloseModal()
            toast.success("Cliente adicionado")
            setNewUserValue(undefined)
            setNewUserId("")
            handleGetUsers()
        })
        .catch(()=>{

          toast.error("Falha ao adicionar")
        })
      }else{
        toast.error("Valor inválido")
      }
    }
    

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Style.ModalNewUserContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>{isManager?"Cadastro de Usuário": "Cadastro de Manager"}</h2>
        <section>
          <p>Nome</p>
          <select onChange={(e)=>setNewUserId(e.target.value)}>
            {isManager?
                    avaliableUsers.map((element, index:number)=>{
                    return(
                      <option key={index} value={element.id}>{element.name}</option>
                    )
                    })
                    :
                    avaliableMannager.map((element, index:number)=>{
                    return(
                      <option key={index} value={element.id}>{element.name}</option>
                    )
                })
            }
          </select>
          <p>Valor por hora</p>
          <input type="number"  onChange={(e)=>{setNewUserValue(e.target.valueAsNumber)}}></input>
        </section>
        <section className="botton">
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
          <Button variant="contained" className="buttonEnter" onClick={()=>{handleNewUser()}}>
            Cadastrar
          </Button>
        </section>
      </Style.ModalNewUserContainer>
    </Modal>
  );
};

export default NewUserSettings;
