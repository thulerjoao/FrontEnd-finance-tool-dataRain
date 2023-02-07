import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useTeam } from "../../contexts/teamContext";
import Api from "../../services/api";
import { ButtonsContainer } from "../../utils/globalStyles";
import * as S from "./style";


interface CreateTeamData {
  id?: string;
  name: string;
  valuePerHour: number;
}

const createTeamSchema = yup.object().shape({
  name: yup.string().required("Nome da equipe obrigatória"),

  valuePerHour: yup.number().required("Campo obrigatório"),
});

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

interface ModalProps {
  openCreateModal: boolean;
  setOpenCreateModal: ({ props }: any) => void;
}

export default function ModalCreateTeam({
  setOpenCreateModal,
  openCreateModal,
}: ModalProps) {
  const handleClose = () => setOpenCreateModal(!openCreateModal);
  const { handleGetTeam } = useTeam();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTeamData>({ resolver: yupResolver(createTeamSchema) });

  const handleCreateTeam = (data: CreateTeamData) => {
    Api.post("team", data)
      .then((res) => {
        res;
        toast.success("Time criado com sucesso");
        handleClose();
        handleGetTeam();
      })
      .catch((error) => {
        error;
        toast.error("Falha ao criar time");
      });
    handleClose();
  };

  return (
    <div>
      <Modal
        onClose={handleClose}
        open={openCreateModal}
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
          <S.FormCreate onSubmit={handleSubmit(handleCreateTeam)}>
            <S.CreateTeamTitle>
              <h1 className="title-create-user">Criar Equipe</h1>
            </S.CreateTeamTitle>
            <S.InputCreateContainer>
              <S.InputLabel htmlFor="name">Nome da Equipe</S.InputLabel>
                <S.InputCreateTeam type="text" {...register("name")} />

              <S.InputLabel htmlFor="valuePerHour">Valor da hora R$:</S.InputLabel>
                <S.InputCreateTeam type="text" {...register("valuePerHour")} />

            </S.InputCreateContainer>
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
