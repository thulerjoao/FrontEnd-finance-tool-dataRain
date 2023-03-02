import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import { Calendar } from 'react-calendar';
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import { useProject } from "../../contexts/projectContext";

interface ModalConfirmTimeProps {
  isModalOpen: boolean;
  projectId: string;
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

const ConfirmTime = ({
  isModalOpen,
  setIsModalOpen,
  projectId,

}: ModalConfirmTimeProps) => {

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { handleGetHours } = useProject()

  const handleMarkHors = () =>{
    Api.post("/normal-hour", {
      projectId: projectId
    }).then(()=>{
      toast.success('Feito')
      handleCloseModal()
      handleGetHours(projectId)
    }).catch(()=>{
      toast.error('Erro ao lançar hora')
      setIsModalOpen(false)
    })
  }



  

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Style.ModalConfirmTimeContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>Confirmar registro de horário?</h2>
        <section className="botton">
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>{handleCloseModal()}}>
            Cancelar
          </Button>
          <Button variant="contained" className="buttonEnter" onClick={()=>{handleMarkHors()}}>
            Confirmar
          </Button>
        </section>
      </Style.ModalConfirmTimeContainer>
    </Modal>
  );
};

export default ConfirmTime;
