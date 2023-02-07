import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import * as Style from "./style";
import Modal from "react-modal";
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import { useQuestions } from "../../contexts/questions";

interface DeleteProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  questionIndex: number;
  questionId: string
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

const DeleteQuestion = ({
  isModalOpen,
  setIsModalOpen,
  questionIndex,
  questionId
}: DeleteProps) => {

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const { updateQuestion } = useQuestions()
  
  const handleDelete = () =>{
    Api.delete(`/question/${questionId}`)
      .then(()=>{
        updateQuestion()
        handleCloseModal()
      })
      .catch(()=>{toast.error("Erro ao excluir")})
  }

 
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Style.AddQuestionContainer>
        <div>
          <Style.BackArrow onClick={handleCloseModal} />
        </div>
        <h2>{`A questão ${questionIndex+1} será excluida permanentemente`}</h2>
        <section>
          <Button variant="contained" className="buttonEnter" onClick={()=> handleDelete()}>
            Confirmar
          </Button><Button variant="contained" className="buttonEnter cancel" onClick={()=>handleCloseModal()}>
            Cancelar
          </Button>
        </section>
        
      </Style.AddQuestionContainer>
    </Modal>
  );
};

export default DeleteQuestion;
