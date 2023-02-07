import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

import { BsPencil, BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import { ProjectTypes } from "../../types/interface";
import ModalDeleteClient from "../ModalDeleteClient";
import ModalDeleteProject from "../ModalDeleteProject";
import ModalEditClient from "../ModalEditClient";
import ModalEditProject from "../ModalEditProject";

interface ProjectProps {
  project: ProjectTypes;
}

export default function BasicMenuProject({ project }: ProjectProps) {
  const [openDeleteProject, setOpenDeleteProject] =
    React.useState<boolean>(false);
  const [openEditProject, setOpenEditProject] = React.useState<boolean>(false);
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
        <div>
          <MenuItem
            className="MenuItem"
            onClick={() => {
              handleClose();
              setOpenDeleteProject(!openDeleteProject);
            }}
          >
            <BsTrash /> Excluir
          </MenuItem>
          <MenuItem
            className="MenuItem"
            onClick={() => {
              setOpenEditProject(!openEditProject);
              handleClose();
            }}
          >
            <BsPencil /> Editar
          </MenuItem>
        </div>
      </Menu>

      {openDeleteProject ? (
        <ModalDeleteProject
          project={project}
          openDeleteProject={openDeleteProject}
          setOpenDeleteProject={setOpenDeleteProject}
        />
      ) : null}

      {
        openEditProject ? (
          <ModalEditProject openEditProject={openEditProject} setOpenEditProject={setOpenEditProject} project={project}/>
        ) : null
      }
    </div>
  );
}
