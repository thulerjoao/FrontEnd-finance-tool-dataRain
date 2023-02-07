import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { UserTypes } from "../../types/interface";
import * as S from "./style";
import React from "react";

import { Button } from "@mui/material";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../../contexts/auth";
import Api from "../../services/api";

interface ModalEditUserProps {
  userStorage: UserTypes;
  openModal: boolean;
  setOpenModal: ({ props }: any) => void;
}

interface EditUserData {
  name: string;
  email: string;
  currentPassword?: string;
  password?: string;
  confirmPassword?: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 550,
  bgcolor: "background.paper",
  border: "0",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

export default function ModalEditUser({
  userStorage,
  openModal,
  setOpenModal,
}: ModalEditUserProps) {
  const handleClose = () => setOpenModal(!openModal);
  const [values, setValues] = useState<any>({});
  const { getUserByToken } = useAuth();

  const handleEdit = () => {
    //validação manuel se a senha possui números, letras e caracteres especiais
    const senha = new RegExp(
      "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/|.()])[0-9a-zA-Z$*&@#!:;/|.()]{8,}$"
    );

    //validação manual = se o nome possui apenas letras
    const onlyString = new RegExp(
      "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
    );

    if (values.password) {
      let validation = senha.test(values.password);
      if (!validation) {
        toast.error(`É preciso ter pelo menos uma letra maiuscula
        uma minuscula
         um simbolo(# @ *)
          e um numero`);
        return;
      }
    }

    if (values.name) {
      let validation = onlyString.test(values.name);
      if (!validation) {
        toast.error("O nome deve conter apenas letras");
        return;
      }
    }
    if (values.password !== values.confirmPassword) {
      toast.error("As senhas não coincidem ");
    } else {
      Api.patch("/user/myself", values)
        .then((res) => {
          res;
          toast.success("Usuário editado");
          getUserByToken();
        })
        .catch((error) => {
          error;
          toast.error("Erro ao editar usuário");
        });
      handleClose();
    }
  };

  const testeRegex = () => {
    const a = "Abcd@1234";
    const b = "12314123";

    const senha = new RegExp(
      "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/|.()])[0-9a-zA-Z$*&@#!:;/|.()]{8,}$"
    );

    const onlyNumbers = new RegExp("^[0-9]+$");

    const onlyString = new RegExp(
      "^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
    );
    console.log(senha.test(a));
    console.log(senha.test(b));
  };

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: EditUserData) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <Modal
        open={openModal}
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
          <S.EditUserTitle>
            <h1 className="title-user">Editar Usuário</h1>
          </S.EditUserTitle>
          <S.FormEdit onSubmit={(e) => e.preventDefault()}>
            <S.InputsEditUser>
              <S.InputLabel>Nome</S.InputLabel>
              <S.InputEditUser
                type="text"
                onChange={handleChangesValues}
                name="name"
              />
              <S.InputLabel htmlFor="email">E-mail</S.InputLabel>
              <S.InputEditUser
                name="email"
                type="email"
                onChange={handleChangesValues}
              />
              <S.InputLabel htmlFor="currentPassword">Senha atual</S.InputLabel>
                <S.InputEditUser
                  name="currentPassword"
                  type="password"
                  onChange={handleChangesValues}
                />

              <S.InputLabel htmlFor="password">Nova senha</S.InputLabel>
                <S.InputEditUser
                  name="password"
                  type="password"
                  onChange={handleChangesValues}
                />
              <S.InputLabel htmlFor="confirmPassword">Confime a senha</S.InputLabel>
                <S.InputEditUser
                  name="confirmPassword"
                  type="password"
                  onChange={handleChangesValues}
                />

            </S.InputsEditUser>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="100%"
            >
              <S.ButtonsContainer>
                <Button
                  className="buttonCancel"
                  variant="contained"
                  onClick={handleClose}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  className="buttonSave"
                  onClick={() => handleEdit()}
                >
                  Editar
                </Button>
              </S.ButtonsContainer>
            </Box>
          </S.FormEdit>
        </Box>
      </Modal>
    </div>
  );
}
