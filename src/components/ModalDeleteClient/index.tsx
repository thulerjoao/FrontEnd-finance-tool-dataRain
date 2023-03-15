import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import { useClient } from "../../contexts/clientContext";
import { ClientTypes } from "../../types/interface"



interface DeleteProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  client: ClientTypes;
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

const DeleteClient = ({
  isModalOpen,
  setIsModalOpen,
  client,
}: DeleteProps) => {

  const { handleGetClients } = useClient()

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleDeleteClient = () =>{
    Api.delete(`/client/${client.id}`)
    .then((res)=>{
      toast.success("Cliente excluído")
      handleGetClients()
      handleCloseModal()
    })
    .catch((err)=>{
      toast.error('Erro ao excluir')
    })
  }
 
  const firstUp = (prop: string) =>{
    return(prop.charAt(0).toUpperCase() + prop.slice(1))
}
  
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Style.AddClientContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>{`Excluir ${firstUp(client.companyName)} permanentemente?`}</h2>
        <section>
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
          <Button variant="contained" className="buttonEnter" onClick={()=>handleDeleteClient()}>
            Confirmar
          </Button>
        </section>
        
      </Style.AddClientContainer>
    </Modal>
  );
};

export default DeleteClient;
