import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import { Calendar } from 'react-calendar';
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import { useProject } from "../../contexts/projectContext";
import moment from "moment";

interface ModalConfirmTimeProps {
  isModalOpen: boolean;
  projectId: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  extraHourId:string;
  active: boolean;
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
  active,
  extraHourId,

}: ModalConfirmTimeProps) => {

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { handleGetHours, handleGetExtraHours } = useProject()

  const handleMarkHors = () =>{
    !active?
    Api.post("/normal-hour", {
      projectId: projectId
    }).then(()=>{
      toast.success('Feito')
      handleCloseModal()
      handleGetHours(projectId)
    }).catch(()=>{
      toast.error('Erro ao registrar hora')
      setIsModalOpen(false)
    })
    :
    Api.post("/overtime/user", {
      requestSendOvertimeId: extraHourId
    }).then(()=>{
      toast.success('Feito')
      handleCloseModal()
      handleGetExtraHours(projectId)
    }).catch(()=> {
      toast.error('Erro ao registrar hora extra')
      handleCloseModal()
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
        <h2>{!active? "Registrar hora ordinária" : "Registar hora extra"}</h2>
        <section className="botton">
          <Button variant="contained" className="buttonEnter " onClick={()=>{handleMarkHors()}}>
            Confirmar
          </Button>
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
        </section>
      </Style.ModalConfirmTimeContainer>
    </Modal>
  );
};

export default ConfirmTime;
