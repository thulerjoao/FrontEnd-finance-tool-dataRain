import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ClientTypes } from "../../types/interface";
import * as S from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as yup from "yup";
import { useClient } from "../../contexts/clientContext";
import Api from "../../services/api";
import { ButtonsContainer } from "../../utils/globalStyles";

interface ModalEditProps {
  client: ClientTypes;
  openEditModal: boolean;
  setOpenEditModal: ({ props }: any) => void;
}

interface EditClientData {
  id?: string;
  companyName: string;
  email: string;
  phone: string;
  mainContact: string;
  technicalContact?: string;
  technicalContactPhone?: string;
  technicalContactEmail?: string;
}

const updateSchema = yup.object().shape({
  email: yup.string().email("Email inválido"),
  phone: yup.string().max(11, "Campo telefone pode conter apenas 11 dígitos"),
  companyName: yup.string(),
  mainContact: yup.string(),
  technicalContact: yup.string(),
  technicalContactPhone: yup.string().max(11, "Máximo 11 dígitos"),
  technicalContactEmail: yup.string().email("Email inválido"),
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 650,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

export default function ModalEditClient({
  client,
  openEditModal,
  setOpenEditModal,
}: ModalEditProps) {
  const handleClose = () => setOpenEditModal(!openEditModal);
  const { handleGetClients } = useClient();

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<EditClientData>({ resolver: yupResolver(updateSchema) });

  const handleEditTeam = (values: EditClientData) => {
    const clientId = client.id || "";
    Api.patch(`client/${clientId}`, values)
      .then((res) => {
        toast.success("Cliente editado com sucesso"), res;
        handleGetClients();
      })
      .catch((error) => {
        toast.error("Falha ao atualizar cliente"), error;
      });
    handleClose();
  };

  const handleErrorMessage = () => {
    if (errors.companyName) {
      toast.error(`${errors.companyName?.message}`);
      clearErrors();
    } else if (errors.email) {
      toast.error(`${errors.email?.message}`);
      clearErrors();
    } else if (errors.phone) {
      toast.error(`${errors.phone?.message}`);
      clearErrors();
    } else if (errors.mainContact) {
      toast.error(`${errors.mainContact?.message}`);
      clearErrors();
    } else {
      clearErrors;
    }
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
            <S.EditClientTitle>
              <h1 className="title-client">Editar cliente</h1>
            </S.EditClientTitle>
            <S.InputsEditContainer>
              <S.InputLabel>Email</S.InputLabel>
              <S.ClientInputs
                defaultValue={client.email}
                type="email"
                {...register("email")}
              />

              <S.InputLabel>Telefone</S.InputLabel>
              <S.ClientInputs
                defaultValue={client.phone}
                type="tel"
                {...register("phone")}
              />

              <S.InputLabel>Nome do Cliente</S.InputLabel>
              <S.ClientInputs
                defaultValue={client.companyName}
                type="text"
                {...register("companyName")}
              />

              <S.InputLabel>Nome do contato</S.InputLabel>
              <S.ClientInputs
                defaultValue={client.mainContact}
                type="text"
                {...register("mainContact")}
              />

              <S.InputLabel>Nome do contato Técnico</S.InputLabel>
              <S.ClientInputs
                defaultValue={client.technicalContact}
                type="text"
                {...register("technicalContact")}
              />

              <S.InputLabel>Telefone do contato Técnico</S.InputLabel>
              <S.ClientInputs
                defaultValue={client.technicalContactPhone}
                type="tel"
                {...register("technicalContactPhone")}
              />

              <S.InputLabel>Email do contato Técnico</S.InputLabel>
              <S.ClientInputs
                defaultValue={client.technicalContactEmail}
                type="email"
                {...register("technicalContactEmail")}
              />
            </S.InputsEditContainer>
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
