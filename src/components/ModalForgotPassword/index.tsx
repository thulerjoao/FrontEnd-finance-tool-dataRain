import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import React from "react";

interface ForgotPasswordProps {
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

const ForgotPassword = ({
  isModalOpen,
  setIsModalOpen,
}: ForgotPasswordProps) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Style.ForgotPasswordContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>Recuperação de senha</h2>
        <section>
          <p>Enviaremos um email para que possa concluir a ação</p>
          <input placeholder="Digite o email para recuperação" />
        </section>
        <Button variant="contained" className="buttonEnter">
          Enviar
        </Button>
      </Style.ForgotPasswordContainer>
    </Modal>
  );
};

export default ForgotPassword;
