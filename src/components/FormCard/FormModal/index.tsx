import { Button } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import * as Style from "./style"
import Modal from "react-modal";
import Api from "../../../services/api";
import { toast } from "react-hot-toast";
import React from "react";


interface FormModalProps {
    isModalOpen: boolean;
    data:any;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
    setStepNumber: Dispatch<SetStateAction<number>>
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
      padding: '0',
      borderRadius: '15px',
      boxShadow: 'rgb(0 0 0 / 20%) 1px 1px 10px',
    }
  }

const FormModal = ({ isModalOpen, data, setIsModalOpen, setStepNumber }: FormModalProps) => {

    const handleCloseModal = () =>{
        setIsModalOpen(false)
    }

    const handleFinish = () =>{
        Api.post("/budget-request", data)
            .then(()=>{
                setStepNumber(3)
            })
            .catch((error)=>{
                console.log(error);
                console.log(data)
                toast.error("Erro ao enviar formulário");
            })
    }
    
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            style={customStyles}
            >
            <Style.FormModalContainer>
                <div>
                    <Style.BackArrow onClick={handleCloseModal}/>
                </div>
                <p>
                    Formulário preenchido com sucesso!
                </p>
                <Button variant="contained" className="buttonEnter" onClick={()=>handleFinish()}>Concluir</Button>
            </Style.FormModalContainer>
        </Modal>
    )
}

export default FormModal