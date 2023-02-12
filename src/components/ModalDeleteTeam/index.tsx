import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import { useTeam } from "../../contexts/teamContext";



interface DeleteProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  teamId: string;
  teamName: string;
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

const DeleteTeam = ({
  isModalOpen,
  setIsModalOpen,
  teamId,
  teamName,
}: DeleteProps) => {


  const { handleGetTeam } = useTeam()

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleDeleteTeam = () =>{
    Api.delete(`/team/${teamId}`)
    .then((res)=>{
      handleGetTeam()
      handleCloseModal()
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
      <Style.AddTeamContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>{`Equipe ${teamName} será excluida permanentemente`}</h2>
        <section>
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
          <Button variant="contained" className="buttonEnter" onClick={()=>handleDeleteTeam()}>
            Confirmar
          </Button>
        </section>
        
      </Style.AddTeamContainer>
    </Modal>
  );
};

export default DeleteTeam;
