import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import { useProject } from "../../contexts/projectContext";



interface DeleteProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  projectId: string;
  projectName: string;
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

const DeleteProject = ({
  isModalOpen,
  setIsModalOpen,
  projectId,
  projectName,
}: DeleteProps) => {


  const { handleGetProjects } = useProject()

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleDeleteProject = () =>{
    Api.delete(`/project/${projectId}`)
    .then((res)=>{
      handleGetProjects()
      handleCloseModal()
      toast.success("Projeto excluído")
    })
    .catch((err)=>{
      toast.error('Erro ao excluir')
    })
  }
 
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Style.AddProjectContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>{`Excluir ${projectName} permanentemente?`}</h2>
        <section>
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
          <Button variant="contained" className="buttonEnter" onClick={()=>handleDeleteProject()}>
            Confirmar
          </Button>
        </section>
        
      </Style.AddProjectContainer>
    </Modal>
  );
};

export default DeleteProject;
