import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import React from "react";
import toast from "react-hot-toast";
import Api from "../../services/api";
import { useAsyncError } from "react-router-dom";
import { useClient } from "../../contexts/clientContext";

interface ModalClientProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  client: any;
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

const ClientSettings = ({
  isModalOpen,
  setIsModalOpen,
  client,

}: ModalClientProps) => {

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { handleGetClients } = useClient()

  const [ comapnyName, setComapnyName ] = useState<string>(client.companyName)
  const [ comapnyEmail, setComapnyEmail ] = useState<string>(client.email)
  const [ mainContact, setMainContact ] = useState<string>(client.mainContact)
  const [ mainPhone, setMainPhone ] = useState<number>(client.phone)
  const [ technicalContact, setTechnicalContact ] = useState<string>(client.technicalContact)
  const [ technicalPhone, setTechnicalPhone ] = useState<number>(client.technicalContactPhone)
  const [ technicalEmail, setTechnicalEmail ] = useState<string>(client.technicalContactEmail)

  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.([a-z]+)?$/i

  const updateClient = () =>{
      if(comapnyName !== "" && comapnyEmail !== "" && mainContact !== ""){
        if(mainPhone >= 8){
          if(comapnyEmail.match(regex)){
            Api.patch(`/client/${client.id}`,
            {
              email: comapnyEmail,
              phone: mainPhone,
              companyName: comapnyName,
              mainContact: mainContact,
              technicalContact: technicalContact,
              technicalContactPhone: technicalPhone,
              technicalContactEmail : technicalEmail
            }
            )
            .then(()=>{
              toast.success("Cliente atualizado")
              handleGetClients()
              handleCloseModal()
            }).catch(()=>{
              toast.error("Falha ao atualizar cliente")
            })
          }else{
            toast.error("Email principal inválido")
          }
        }else{
        toast.error("Telefone principal inválido")
      }
      }else{
        toast.error("Preencha os campos origatórios")
      }
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Style.ModalClientContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>Editar cliente</h2>
        <section>
          <p>Nome da empresa *</p>
          <input type="text" defaultValue={comapnyName} onChange={(e)=>setComapnyName(e.target.value)}></input>
          <p>Email *</p>
          <input type="text" defaultValue={comapnyEmail} onChange={(e)=>setComapnyEmail(e.target.value)}></input>
          <p>Contato principal *</p>
          <input type="text" defaultValue={mainContact} onChange={(e)=>setMainContact(e.target.value)}></input>
          <p>Telefone contato principal *</p>
          <input type="number" defaultValue={mainPhone} onChange={(e)=>setMainPhone(e.target.valueAsNumber)}></input>
          <p>Contato técnico</p>
          <input type="text" defaultValue={technicalContact} onChange={(e)=>setTechnicalContact(e.target.value)}></input>
          <p>Telefone contato técnico</p>
          <input type="number" defaultValue={technicalPhone} onChange={(e)=>setTechnicalPhone(e.target.valueAsNumber)}></input>
          <p>Email contato técnico</p>
          <input type="text" defaultValue={technicalEmail} onChange={(e)=>setTechnicalEmail(e.target.value)}></input>
        </section>
        <section className="botton">
          <Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
          <Button variant="contained" className="buttonEnter" onClick={()=>{updateClient()}}>
            Atualizar
          </Button>
        </section>
      </Style.ModalClientContainer>
    </Modal>
  );
};

export default ClientSettings;
