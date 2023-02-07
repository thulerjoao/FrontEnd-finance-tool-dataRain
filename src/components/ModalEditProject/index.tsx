import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ProjectTypes } from "../../types/interface";
import * as S from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useProject } from "../../contexts/projectContext";
import Api from "../../services/api";
import { ButtonsContainer } from "../../utils/globalStyles";

interface ModalEditProject {
  project: ProjectTypes;
  openEditProject: boolean;
  setOpenEditProject: ({ props }: any) => void;
}

interface EditProjectData {
  id?: string;
  name: string;
  description: string;
}

const updateProjectSchema = yup.object().shape({
  name: yup.string().min(2, "Nome precisa ter mais de 1 caracter"),

  description: yup.string().min(5, "Descrição precisa ter mais que 5 caracteres").max(500, "Descrição muito longa"),
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 450,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

export default function ModalEditProject({
  project,
  openEditProject,
  setOpenEditProject,
}: ModalEditProject) {
  const handleClose = () => setOpenEditProject(!openEditProject);
  const { handleGetProjects } = useProject()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProjectData>({ resolver: yupResolver(updateProjectSchema) });

  const handleEditProject = (values: EditProjectData) => {
    const projectId = project.id || "";
    Api.patch(`project/${projectId}`, values)
      .then((res) => {
        toast.success("Projeto editado com sucesso"), res;
        handleGetProjects();
      })
      .catch((error) => {
        toast.error("Falha ao atualizar projeto"), error;
      });
    handleClose();
  };

  const handleErrorMessage = () => {
    if (errors.name) {
      toast.error(`${errors.name?.message}`);
    } else if (errors.description) {
      toast.error(`${errors.description?.message}`);
    }
  };

  return (
    <div>
      <Modal
        open={openEditProject}
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
          <S.FormEdit onSubmit={handleSubmit(handleEditProject)}>
            <S.EditTeamTitle>
              <h1 className="title-edit-user">Editar Projeto</h1>
            </S.EditTeamTitle>
            <S.InputEditContainer>
              <S.InputLabel htmlFor="name"> Projeto</S.InputLabel>
              <S.InputEditTeam
                defaultValue={project.name}
                type="text"
                {...register("name")}
              />

              <S.InputLabel htmlFor="description">Descrição</S.InputLabel>
              <S.InputTextAria
                defaultValue={project.description}
                {...register("description")}
                rows={5}
                cols={15}
                placeholder="Digite sua mensagem"
              />
            </S.InputEditContainer>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
            >
              <ButtonsContainer>
                <Button
                  className="buttonCancel"
                  variant="contained"
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  className="buttonSave"
                  variant="contained"
                  type="submit"
                  onClick={() => handleErrorMessage()}
                >
                  Editar
                </Button>
              </ButtonsContainer>
            </Box>
          </S.FormEdit>
        </Box>
      </Modal>
    </div>
  );
}
