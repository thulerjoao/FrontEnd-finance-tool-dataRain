import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as S from "./style";
import { ButtonsContainer } from "../../utils/globalStyles";
import React from "react";

import { toast } from "react-hot-toast";
import { useAuth } from "../../contexts/auth";
import Api from "../../services/api";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 300,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

interface ModalUdpateProps {
  setOpenUploadModal: ({ props }: any) => void;
  openUploadModal: boolean;
}

interface ModalUpdateData {
  imageUrl: any;
}

export default function ModalUploadImg({
  openUploadModal,
  setOpenUploadModal,
}: ModalUdpateProps) {
  const handleClose = () => setOpenUploadModal(!openUploadModal);

  const { getUserByToken } = useAuth();

  const handleImage = () => {
    const data = new FormData();

    let input = document.querySelector("#arquivo") as HTMLInputElement;


    data.append('file', input.files![0]);
    Api.post("/user/profile-picture", data)
      .then((res) => {
        toast.success("Imagem atualizada");
        getUserByToken();
      })
      .catch((err) => {
        toast.error("Falha ao atualizar imagem");
        console.log(err);
      });


    handleClose();
  };

  return (
    <div>
      <Modal
        open={openUploadModal}
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Trocar imagem de perfil
          </Typography>
          <S.FormUpload onSubmit={(e) => e.preventDefault()}>
            <S.LabelUpload htmlFor="name">
              {" "}
              Imagem:
              <S.InputUpload
                name="image"
                type="file"
                accept="image/*"
                id="arquivo"
              />
            </S.LabelUpload>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
            >
              <ButtonsContainer>
                <Button
                  variant="contained"
                  className="buttonCancel"
                  onClick={() => handleClose()}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  className="buttonSave"
                  onClick={()=> handleImage()}
                >
                  Salvar
                </Button>
              </ButtonsContainer>
            </Box>
          </S.FormUpload>
        </Box>
      </Modal>
    </div>
  );
}
