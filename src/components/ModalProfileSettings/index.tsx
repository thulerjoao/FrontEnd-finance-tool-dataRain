import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import React from "react";

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
          <p>Nome</p>
          <input placeholder="Digite o email para recuperação" />
          <p>Nova senha</p>
          <input placeholder="Digite o email para recuperação" />
          <p>Confirmação de nova senha</p>
          <input placeholder="Digite o email para recuperação" />
          <p>Senha Atual *</p>
          <input placeholder="Digite o email para recuperação" className="currentPassword"/>
        </section>
        <section className="botton">
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
          <Button variant="contained" className="buttonEnter">
            Atualizar
          </Button>
        </section>
      </Style.ModalProfileContainer>
    </Modal>
  );
};

export default ProfileSettings;
