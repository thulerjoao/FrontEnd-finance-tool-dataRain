import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ProjectTypes } from "../../types/interface";
import * as S from "./style";
import TeamService from "../../services/teams-service";
import { useTeam } from "../../contexts/teamContext";
import { BsHandIndexThumbFill } from "react-icons/bs";
import Api from "../../services/api";
import toast from "react-hot-toast";
import { ButtonsContainer } from "../../utils/globalStyles";
import { Button } from "@mui/material";
import { useProject } from "../../contexts/projectContext";

interface ModalDeleteProps {
  project: ProjectTypes;
  openDeleteProject: boolean;
  setOpenDeleteProject: ({ props }: any) => void;
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

export default function ModalDeleteProject({
  project,
  openDeleteProject,
  setOpenDeleteProject,
}: ModalDeleteProps) {
  const handleClose = () => setOpenDeleteProject(!openDeleteProject);
  const { handleGetProjects } = useProject();

  const deleteTeam = (id: any) => {
    Api.delete(`project/${id}`)
      .then((res) => {
        toast.success("Projeto deletado"), res;
        handleClose();
        handleGetProjects();
      })
      .catch((error) => {
        toast.error("Falha ao deletar projeto"), error;
      });
  };

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={openDeleteProject}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box display="flex" flexDirection="column" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deseja excluir a {project.name}?
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
                  deleteTeam(project.id);
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
