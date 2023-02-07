import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ButtonsContainer } from "../../utils/globalStyles";
import * as S from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Api from "../../services/api";
import { toast } from "react-hot-toast";
import { useProject } from "../../contexts/projectContext";

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

interface ModalProps {
  openProjectModal: boolean;
  setOpenProjectModal: ({ props }: any) => void;
}

interface CreateProjectData {
  name: string;
  description: string;
}

const createProjectSchema = yup.object().shape({
  name: yup.string().required("Nome do projeto obrigatório"),
  description: yup
    .string()
    .min(10, "Descrição muito curta")
    .max(500, "Descrição muito longa")
    .required("Descrição obrigatória"),
});

export default function ModalCreateProject({
  setOpenProjectModal,
  openProjectModal,
}: ModalProps) {
  const handleClose = () => setOpenProjectModal(!openProjectModal);
  const { handleGetProjects } = useProject();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProjectData>({
    resolver: yupResolver(createProjectSchema),
  });

  const handleCreateProject = (data: CreateProjectData) => {
    Api.post("/project", data).then((res) => {
      res;
      toast.success("Projeto criado com sucesso.");
      handleClose();
      handleGetProjects();
    });
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
        onClose={handleClose}
        open={openProjectModal}
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
          <S.FormCreate onSubmit={handleSubmit(handleCreateProject)}>
            <S.FormCreateTitle>
              <h1 className="title-create-project">Criar Projeto</h1>
            </S.FormCreateTitle>
            <S.InputsCreateProject>
              <S.InputLabel htmlFor="name">Nome do projeto</S.InputLabel>
              <S.InputCreateTeam type="text" {...register("name")} />

              <S.InputLabel htmlFor="description">Descrição</S.InputLabel>
              <S.InputTextAria
                {...register("description")}
                rows={5}
                cols={15}
                placeholder="Digite sua mensagem"
              />
            </S.InputsCreateProject>
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
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  variant="contained"
                  className="buttonSave"
                  type="submit"
                  onClick={() => handleErrorMessage()}
                >
                  Criar
                </Button>
              </ButtonsContainer>
            </Box>
          </S.FormCreate>
        </Box>
      </Modal>
    </div>
  );
}
