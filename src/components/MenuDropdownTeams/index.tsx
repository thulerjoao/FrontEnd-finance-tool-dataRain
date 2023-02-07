import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./style.css";

import { BsThreeDotsVertical, BsPencil, BsTrash } from "react-icons/bs";
import { TeamsTypes } from "../../types/interface";
import ModalDeleteTeam from "../ModalDeleteTeam";
import ModalEditTeam from "../ModalEditTeam";
import ModalCreateTeam from "../ModalCreateTeam";

interface MenuProps {
  team: TeamsTypes;
}

export default function BasicMenu({ team }: MenuProps) {
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <MenuItem
          className="MenuItem"
          onClick={() => {
            handleClose();
            setOpenDeleteModal(!openDeleteModal);
          }}
        >
          <BsTrash /> Excluir
        </MenuItem>
      </Menu>
      {openDeleteModal ? <ModalDeleteTeam team={team} openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal} /> : null}
      {openEditModal ? <ModalEditTeam team={team} openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} /> : null}
    </div>
  );
}
