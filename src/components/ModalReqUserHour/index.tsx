import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import Api from "../../services/api";
import * as S from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 350,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

interface CreateData {
  requestDescription: string;
  projectId: string;
}

const createReqSchema = yup.object().shape({
  requestDescription: yup
    .string()
    .required("Descrição obrigatória")
    .min(5, "Descrição muito curta")
    .max(200, "Descrição muito longa"),
});

interface ModalAddProps {
  openModalReqHour: boolean;
  setOpenModalReqHour: ({ props }: any) => void;
}

const ModalReqUserHour = ({
  openModalReqHour,
  setOpenModalReqHour,
}: ModalAddProps) => {
  const { id } = useParams();
  const handleClose = () => setOpenModalReqHour(!openModalReqHour);
  const [value, setValue] = useState<string>();

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<CreateData>({ resolver: yupResolver(createReqSchema) });

  const handleErrorMessage = () => {
    if (errors.requestDescription) {
      toast.error(`${errors.requestDescription?.message}`);
      clearErrors();
    } else {
      clearErrors;
    }
  };

  const handleHour = (data: CreateData) => {
    const res = {
      projectId: id,
      requestDescription: data.requestDescription,
    };
    Api.post("request-send-overtime", res)
      .then((res) => {
        toast.success("Sucesso ao requisitar hora extra");
        handleClose();
        res;
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao requisitar solicitação de hora");
        handleClose();
      });
  };

  return (
    <div>
      <Modal
        open={openModalReqHour}
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
          <form onSubmit={handleSubmit(handleHour)}>
            <TextField
              label={"Adicione uma descrição"}
              defaultValue=""
              type={"text"}
              placeholder="Adicione uma descrição"
              multiline
              rows={5}
              fullWidth
              {...register("requestDescription")}
            />

            <S.ButtonsContainer>
              <Button
                variant="contained"
                className="buttonCancel"
                onClick={handleClose}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="contained"
                className="buttonSave"
                onClick={() => handleErrorMessage()}
              >
                Requisitar
              </Button>
            </S.ButtonsContainer>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalReqUserHour;
