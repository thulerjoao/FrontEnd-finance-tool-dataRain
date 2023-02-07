import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { TeamsTypes } from "../../types/interface";
import * as S from "./style";
import React from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useTeam } from "../../contexts/teamContext";
import Api from "../../services/api";
import TeamService from "../../services/teams-service";
import { ButtonsContainer } from "../../utils/globalStyles";
import { Button } from "@mui/material";

interface ModalEditProps {
  team: TeamsTypes;
  openEditModal: boolean;
  setOpenEditModal: ({ props }: any) => void;
}

interface EditTeamData {
  id?: string;
  name: string;
  valuePerHour: number;
}

const updateTeamSchema = yup.object().shape({
  name: yup.string().required("Nome da equipe obrigatória"),

  valuePerHour: yup.number().required("Campo obrigatório"),
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 320,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

export default function ModalEditTeam({
  team,
  openEditModal,
  setOpenEditModal,
}: ModalEditProps) {
  const handleClose = () => setOpenEditModal(!openEditModal);
  const { handleGetTeam } = useTeam();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditTeamData>({ resolver: yupResolver(updateTeamSchema) });

  const handleEditTeam = (values: EditTeamData) => {
    const teamId = team.id || "";
    Api.patch(`team/${teamId}`, values)
      .then((res) => {
        toast.success("Equipe editada com sucesso"), res;
        handleGetTeam();
      })
      .catch((error) => {
        toast.error("Falha ao atualizar equipe"), error;
      });
    handleClose();
  };

  return (
    <div>
      <Modal
        open={openEditModal}
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
          <S.FormEdit onSubmit={handleSubmit(handleEditTeam)}>
            <S.EditTeamTitle>
              <h1 className="title-edit-user">Criar Equipe</h1>
            </S.EditTeamTitle>
            <S.InputEditContainer>
              <S.InputLabel htmlFor="name"> Equipe</S.InputLabel>
              <S.InputEditTeam
                defaultValue={team.name}
                type="text"
                {...register("name")}
              />

              <S.InputLabel htmlFor="valuePerHour">Valor R$</S.InputLabel>
              <S.InputEditTeam
                defaultValue={team.valuePerHour}
                type="text"
                {...register("valuePerHour")}
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
