import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import React from "react";
import { useAuth } from "../../contexts/auth";
import Api from "../../services/api";
import { toast } from "react-hot-toast";

interface ModalProfileProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
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

const ProfileSettings = ({
  isModalOpen,
  setIsModalOpen,
}: ModalProfileProps) => {

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { userStorage, getUserByToken } = useAuth()
  const [ name, setName ] = useState<string>()
  const [ newPassword, setNewPassword ] = useState<string>()
  const [ confirmPassword, setConfirmPassword ] = useState<string>()
  const [ currentPassword, setCurrentPassword ] = useState<string>()


  const handleFilter = () =>{
    if(newPassword !== undefined){
      if(newPassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/\|.()])[0-9a-zA-Z$*&@#!:;/\|.()]{8,}$/)){
        if(newPassword === confirmPassword){
          handleUpdateUser()
        }else{
          toast.error("As senhas não coincidem")
        }
      }else{
        toast.error("A senha deve conter um caracter especial, um número e ao menos uma letra maiúscula")
      }
    }else{
      handleUpdateUser()
    }
  }


  const handleUpdateUser = () => {
    if(name!== ""){
      Api.patch(`user/myself`, 
      {
        name: name,
        currentPassword: currentPassword,
        password: newPassword,
        confirmPassword: confirmPassword
      }
      )
      .then(()=>{
        handleCloseModal()
        getUserByToken()
        toast.success("Perfil atualizado")
      })
      .catch(()=>toast.error("Falha ao atualizar perfil"))
    }else{
      toast.error("Valores inválidos")
    }
  }


  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Style.ModalProfileContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>Editar dados da conta</h2>
        <section>
          <p>Nome *</p>
          <input placeholder="Digite o email para recuperação" defaultValue={userStorage.name} onChange={(e)=>setName(e.target.value)}/>
          <p>Nova senha</p>
          <input type="password" placeholder="Digite uma nova senha" onChange={(e)=>setNewPassword(e.target.value)}/>
          <p>Confirmação de nova senha</p>
          <input type="password" placeholder="Confirme sua nova senha" onChange={(e)=>setConfirmPassword(e.target.value)}/>
          <p>Senha Atual *</p>
          <input type="password" placeholder="Confirme sua senha atual" className="currentPassword" onChange={(e)=>setCurrentPassword(e.target.value)}/>
        </section>
        <section className="botton">
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
          <Button variant="contained" className="buttonEnter" onClick={()=>handleFilter()}>
            Atualizar
          </Button>
        </section>
      </Style.ModalProfileContainer>
    </Modal>
  );
};

export default ProfileSettings;
