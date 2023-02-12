import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import React from "react";
import toast from "react-hot-toast";
import Api from "../../services/api";
import { useAsyncError } from "react-router-dom";
import { useProject } from "../../contexts/projectContext";

interface ModalProjectProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  project: any
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

const ProjectSettings = ({
  isModalOpen,
  setIsModalOpen,
  project,

}: ModalProjectProps) => {

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [ projectName, setProjectName ] = useState<string>(project.name)
  const [ description, setDescription ] = useState<string>(project.description)
  const { handleGetProjects } = useProject()

  const updateProject = () =>{
    if(projectName !== "" && description !== ""){
      Api.patch(`/project/${project.id}`,
      {
        name: projectName,
        description: description
      }
      ).then(()=>{
        toast.success("Projeto atualizado");
        handleGetProjects()
        handleCloseModal()
      }).catch(()=>toast.error("Falha ao autalizar"))
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
      <Style.ModalProjectContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>Editar projeto</h2>
        <section>
          <p>Nome</p>
          <input type="text" defaultValue={projectName} onChange={(e)=>setProjectName(e.target.value)}></input>
          <p>Descrição</p>
          <input type="text" defaultValue={description} onChange={(e)=>setDescription(e.target.value)}></input>
        </section>
        <section className="botton">
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
          <Button variant="contained" className="buttonEnter" onClick={()=>updateProject()}>
            Atualizar
          </Button>
        </section>
      </Style.ModalProjectContainer>
    </Modal>
  );
};

export default ProjectSettings;
