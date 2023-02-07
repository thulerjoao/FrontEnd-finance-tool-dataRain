import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { BsThreeDotsVertical, BsPencil, BsTrash } from "react-icons/bs";
import { UserTypes } from "../../types/interface";
import ModalDeleteUser from "../ModalDeleteUser";
import ModalEditUser from "../ModalEditUser";
import { useAuth } from "../../contexts/auth";
import ModalEditRole from "../ModalEditRole";
import toast from "react-hot-toast";

interface MenuProps {
  user: UserTypes;
}

export default function BasicMenu({ user }: MenuProps) {
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = React.useState<boolean>(false);
  const [openEditRole, setOpenEditRole] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { userStorage } = useAuth();

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <BsThreeDotsVertical />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {userStorage.roleName === "admin" ? (
          <div>
            <MenuItem
              className="MenuItem"
              onClick={() => {
                handleClose();
                setOpenDeleteModal(!openDeleteModal);
              }}
            >
              <BsTrash /> Excluir
            </MenuItem>
            <MenuItem
              className="MenuItem"
              onClick={() => {
                setOpenEditRole(!openEditRole);
                handleClose();
              }}
            >
              <BsPencil /> Editar Usuário
            </MenuItem>
          </div>
        ) : (
          <MenuItem
            selected
            className="MenuItem"
            onClick={() => {
              setOpenEditModal(!openEditModal);
              handleClose();
            }}
          >
            <BsPencil /> Editar
          </MenuItem>
        )}
      </Menu>
      {openEditRole ? (
        <ModalEditRole
          openEditRole={openEditRole}
          setOpenEditRole={setOpenEditRole}
          user={user}
        />
      ) : null}

      {openDeleteModal ? (
        <ModalDeleteUser
          user={user}
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
        />
      ) : null}

      {openEditModal ? (
        <ModalEditUser
          userStorage={user}
          openModal={openEditModal}
          setOpenModal={setOpenEditModal}
        />
      ) : null}
    </div>
  );
}
