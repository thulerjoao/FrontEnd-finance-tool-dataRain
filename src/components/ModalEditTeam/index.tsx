import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import React from "react";
import toast from "react-hot-toast";
import Api from "../../services/api";
import { useAsyncError } from "react-router-dom";
import { useTeam } from "../../contexts/teamContext";

interface ModalTeamProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  team: any
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

const TeamSettings = ({
  isModalOpen,
  setIsModalOpen,
  team,

}: ModalTeamProps) => {

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [ teamName, setTeamName ] = useState<string>(team.name)
  const [ teamValue, setTeamValue ] = useState<number>(team.valuePerHour)
  const { handleGetTeam } = useTeam()

  const updateTeam = () =>{
    if(teamName !== "" && teamValue !== undefined && teamValue > 0){
      Api.patch(`/team/${team.id}`,
      {
        name: teamName,
        valuePerHour: teamValue
      }
      ).then(()=>{
        toast.success("Equipe atualizada");
        handleGetTeam()
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
      <Style.ModalTeamContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>Editar equipe</h2>
        <section>
          <p>Nome</p>
          <input type="text" defaultValue={team.name} onChange={(e)=>setTeamName(e.target.value)}></input>
          <p>Valor por hora</p>
          <input type="number" defaultValue={team.valuePerHour} onChange={(e)=>setTeamValue(e.target.valueAsNumber)}></input>
        </section>
        <section className="botton">
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
          <Button variant="contained" className="buttonEnter" onClick={()=>updateTeam()}>
            Atualizar
          </Button>
        </section>
      </Style.ModalTeamContainer>
    </Modal>
  );
};

export default TeamSettings;
