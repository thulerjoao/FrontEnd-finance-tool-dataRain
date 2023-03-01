import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import { Calendar } from 'react-calendar';

interface ModalAksForHourProps {
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

const AskForHour = ({
  isModalOpen,
  setIsModalOpen,

}: ModalAksForHourProps) => {

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Style.ModalAksForHourContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>Confirmar pedido de hora extra para 26/03/2023?</h2>
        <section className="botton">
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>{handleCloseModal()}}>
            Cancelar
          </Button>
          <Button variant="contained" className="buttonEnter" onClick={()=>{}}>
            Confirmar
          </Button>
        </section>
      </Style.ModalAksForHourContainer>
    </Modal>
  );
};

export default AskForHour;
