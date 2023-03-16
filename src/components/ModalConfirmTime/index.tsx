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

}: ModalConfirmTimeProps) => {

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { handleGetHours } = useProject()

  const handleMarkHors = () =>{
    Api.post("/normal-hour", {
      projectId: projectId
    }).then(()=>{
      toast.success('Feito')
      handleCloseModal()
      handleGetHours(projectId)
    }).catch(()=>{
      toast.error('Erro ao lançar hora')
      setIsModalOpen(false)
    })
  }

  // const [ overtimeObject, setOvertimeObject ] = useState<any>([])
  // const today = new Date()
  // const overtimeId = overtimeObject.length > 0 && overtimeObject.filter((element: any)=>element.dateToSendTime.includes(moment(today).format('DD/MM/YYYY')))[0].id

  // const handleMarkExtraHors = () =>{
  //   Api.get(`/request-send-overtime/user/status/${projectId}`)
  //     .then((res)=> setOvertimeObject(res.data))
  //     .catch(()=>{})


  //   Api.post("/overtime/user", {
  //     requestSendOvertimeId: overtimeId
  //   }).then(()=>{
  //     toast.success('Feito')
  //     handleCloseModal()
  //     handleGetExtraHours(projectId)
  //   }).catch((err)=>{
  //     toast.error('Erro ao lançar hora')
  //     setIsModalOpen(false)
  //   })
  // }

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
        <h2>Excolha o tipo de hora a ser registrada</h2>
        <section className="botton">
          <Button variant="contained" className="buttonEnter " onClick={()=>{handleMarkHors()}}>
            Hora Ordirdaria
          </Button>
          <Button variant="contained" className="buttonEnter cancel">
            Hora Extra
          </Button>
        </section>
      </Style.ModalConfirmTimeContainer>
    </Modal>
  );
};

export default ConfirmTime;
