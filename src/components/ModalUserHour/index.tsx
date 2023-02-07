import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import Api from "../../services/api";
import * as S from "./style";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 250,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

interface ModalAddProps {
  openModalAddHour: boolean;
  setOpenModalAddHour: ({ props }: any) => void;
}

const ModalUserHour = ({
  openModalAddHour,
  setOpenModalAddHour,
}: ModalAddProps) => {
  const { id } = useParams();
  const handleClose = () => setOpenModalAddHour(!openModalAddHour);
  const [statusHour, setStatusHour] = useState<any | undefined>({});
  const [normalHourId, setNormalHourId] = useState<string>();

  const getNormalHour = () => {
    Api.get(`/normal-hour/${id}`)
      .then((res) => {
        setStatusHour(res.data.status);
        if (res.data.normalHourId) setNormalHourId(res.data.normalHourId);
      })
      .catch((err) => console.log(err));
  };

  const handleHour = () => {
    const data = {
      projectId: id,
    };
    if (status === 0) {
      Api.post("/normal-hour", data)
        .then((res) => {
          res;
          toast.success("Hora registrada com sucesso");
          handleClose();
        })
        .catch((err) => {
          console.log(err);
          toast.error("Falha ao registrar hora");
          handleClose();
        });
    } else if (status === 1 || status === 2 || status === 3) {
      Api.patch(`/normal-hour/${normalHourId}/${id}`)
        .then((res) => {
          toast.success("Hora registrada com sucesso");
          handleClose();
        })
        .catch((err) => {
          toast.error("Falha ao registrar hora");
          handleClose();
        });
    } else {
      toast.error("Você terminou o serviço hoje");
      handleClose();
    }
  };

  console.log(statusHour);
  console.log(statusHour.statusCode);
  useEffect(() => {
    getNormalHour();
  }, []);

  //pega o codigo do status
  const status: any = statusHour.statusCode;
  // console.log(status)

  return (
    <div>
      <Modal
        open={openModalAddHour}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginTop="10px"
          sx={style}
        >
          <form onSubmit={(e) => e.preventDefault()}>
            <S.Title>Deseja registrar hora?</S.Title>
            <S.ButtonsContainer>
              <Button
                variant="contained"
                className="buttonCancel"
                onClick={handleClose}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                className="buttonSave"
                onClick={() => handleHour()}
              >
                Registrar
              </Button>
            </S.ButtonsContainer>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalUserHour;
