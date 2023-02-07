import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import toast from "react-hot-toast";
import { useUsers } from "../../contexts/userContext";
import Api from "../../services/api";
import { UserTypes } from "../../types/interface";
import { ButtonsContainer } from "../../utils/globalStyles";
import * as S from "./style";
import React from "react";


interface ModalDeleteProps {
  user: UserTypes;
  openDeleteModal: boolean;
  setOpenDeleteModal: ({ props }: any) => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  heigt: 500,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

export default function ModalDeleteUser({
  user,
  openDeleteModal,
  setOpenDeleteModal,
}: ModalDeleteProps) {
  const handleClose = () => setOpenDeleteModal(!openDeleteModal);
  const { handleGetUsers } = useUsers();

  const deleteUser = (id: any) => {
    Api.delete(`user/${id}`)
      .then((res) => {
        toast.success("Usuário deletado"), res;
        handleClose();
        handleGetUsers();
      })
      .catch((error) => {
        toast.error("Falha ao deletar usuário"), error;
      });
  };

  return (
    <div>
      <Modal
        open={openDeleteModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box display="flex" flexDirection="column" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deseja excluir o usuário {user.name}?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <Box display="flex" alignItems="center" justifyContent="center">
            <ButtonsContainer>
              <Button
                className="buttonCancel"
                variant="contained"
                onClick={handleClose}
              >
                Não
              </Button>
              <Button
                className="buttonSave"
                variant="contained"
                onClick={() => {
                  deleteUser(user.id);
                  {
                    handleClose;
                  }
                }}
              >
                Sim
              </Button>
            </ButtonsContainer>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
