import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import { useUsers } from "../../contexts/userContext";

interface DeleteProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  project : any,
  userId : string,
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

const DeleteUserProject = ({
  isModalOpen,
  setIsModalOpen,
  project,
  userId,
  handleGetProject
}: DeleteProps) => {

const handleCloseModal = () => {
  setIsModalOpen(false);
};
  
  
  const handleDeleteUserProject = () =>{
    Api.delete(`/project/remove-user/${project.id}/${userId}`)
    .then((res)=>{
      handleGetProject()
      handleCloseModal()
      toast.success("Usuario excluído do projeto")

    })
    .catch((err)=>{
      toast.error('Falha ao excluir')
    })
  }
 
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Style.AddUserProjectContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>{`Deseja realemente excluir o usuário?`}</h2>
        <section>
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
          <Button variant="contained" className="buttonEnter" onClick={()=>handleDeleteUserProject()}>
            Confirmar
          </Button>
        </section>
      </Style.AddUserProjectContainer>
    </Modal>
  );
};

export default DeleteUserProject;
