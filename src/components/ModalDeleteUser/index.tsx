import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import { useQuestions } from "../../contexts/questions";
import { useUsers } from "../../contexts/userContext";

interface DeleteProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  userId: string;
  userName: string;
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

const DeleteUser = ({
  isModalOpen,
  setIsModalOpen,
  userId,
  userName
}: DeleteProps) => {

  const { handleGetUsers } = useUsers()

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleDeleteUser = () =>{
    Api.delete(`/user/${userId}`)
    .then((res)=>{
      handleGetUsers()
      handleCloseModal()
    })
    .catch((err)=>{
      toast.error('Erro ao excluir usuário')
    })
  }
 
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Style.AddUserContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>{`A questão será excluida permanentemente`}</h2>
        <section>
          <Button variant="contained" className="buttonEnter" onClick={()=>handleDeleteUser()}>
            Confirmar
          </Button><Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
        </section>
        
      </Style.AddUserContainer>
    </Modal>
  );
};

export default DeleteUser;
