import { Button, MenuItem, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useClient } from "../../contexts/clientContext";
import { useProject } from "../../contexts/projectContext";
import Api from "../../services/api";
import { ProjectTypes } from "../../types/interface";
import * as S from "./style";

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

interface ModalAddProps {
  openModalClient: boolean;
  setOpenModalClient: ({ props }: any) => void;
  project: ProjectTypes;
}

const ModalAddClientToProject = ({
  project,
  openModalClient,
  setOpenModalClient,
}: ModalAddProps) => {
  const handleClose = () => setOpenModalClient(!openModalClient);
  const { client } = useClient();
  const [value, setValue] = useState<string>();
  const { alteraEstado } = useProject();
  const [filtered, setFiltered] = useState<ClientTypes[]>([]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log();
    const result: any = client.filter((element) => {
      if (e.target.value === "") return client;
      return (
        element.companyName
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        element.email.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFiltered(result);
  };



  //adicionar um cliente
  const handleAddClient = () => {
    const data = {
      projectId: project.id,
      clientId: value,
    };
    Api.post("/project/add-client", data)
      .then((res) => {
        res;
        toast.success("Cliente adicionado ao projeto");
        handleClose();
        alteraEstado();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao adicionar cliente ao projeto");
      });
  };

  return (
    <div>
      <Modal
        open={openModalClient}
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
          <form onSubmit={(e) => e.preventDefault()}>
            <TextField
              label="Selecione o cliente"
              defaultValue=""
              fullWidth
              required
              select
              onChange={(e) => {
                setValue(e.target.value);
              }}
              SelectProps={{
                multiple: false,
              }}
            >
              {client.map((element: any) => {
                return (
                  <MenuItem value={element.id} key={element.id}>
                    {element.companyName} <br /> {element.email}
                  </MenuItem>
                );
              })}
            </TextField>
            {/* <S.SearchInput
              list="data"
              onChange={(e) => {setValue(e.target.value)
                console.log(value)}}
              placeholder="Search"
            />
            <S.OptionsList id="data">
              {client.map((op) => (
                <option >
                  <p>{op.companyName}</p> <br />
                  <br />
                  <p>{op.email}</p>
                  <p>{op.id}</p>
                </option>
              ))}
            </S.OptionsList> */}
            <S.ButtonsContainer>
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
                onClick={() => {
                  handleAddClient();
                }}
              >
                Adicionar
              </Button>
            </S.ButtonsContainer>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddClientToProject;
