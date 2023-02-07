import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import toast from "react-hot-toast";
import { useProject } from "../../contexts/projectContext";
import Api from "../../services/api";
import { ButtonsContainer } from "../../utils/globalStyles";

interface ModalDeleteProps {
  userId: string;
  userName: string;
  projectId: string;
  openRemoveModal: boolean;
  setOpenRemoveModal: ({ props }: any) => void;
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

export default function ModalRemoveUser({
  projectId,
  userName,
  userId,
  openRemoveModal,
  setOpenRemoveModal,
}: ModalDeleteProps) {
  const handleClose = () => setOpenRemoveModal(!openRemoveModal);
  const { alteraEstado } = useProject();

  const removeUser = (id: any) => {
    Api.delete(`project/remove-user/${projectId}/${id}`)
      .then((res) => {
        toast.success("Usuário removido do projeto"), res;
        handleClose();
        alteraEstado();
      })
      .catch((error) => {
        toast.error("Falha ao remover usuário do projeto"), error;
      });
  };

  return (
    <div>
      <Modal
        open={openRemoveModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box display="flex" flexDirection="column" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deseja remover o usuário {userName}?
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
                  removeUser(userId);
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
