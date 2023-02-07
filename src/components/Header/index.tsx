import { Badge } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import userDefault from "../../assets/images/default.png";
import logo from "../../assets/images/logo.png";
import { useAuth } from "../../contexts/auth";
import * as Style from "./style";
import { useActive } from "../../contexts/activePage";

interface SearchProp {
  // setSearch: Dispatch<SetStateAction<string>>
  setSearch: any
}

const Header = ({setSearch}:SearchProp) => {
  const { active, setActive, fade, setFade } = useActive();
  const { userStorage, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Style.HeaderContainer>
      <section>
        <div className={ active == "" ? "animate__animated animate__fadeInLeftBig animate__delay-0.5s": ""}>
          <div>
            {userStorage.imageUrl === null ? (
              <img alt="Imagem do Perfil" src={userDefault}></img>
            ) : (
              <img
                alt="Imagem do Perfil"
                src={`https://back-btc-finance-tool-production-0df0.up.railway.app${userStorage.imageUrl}`}
              ></img>
            )}
            <p>{userStorage.name}</p>
            {/* <p className="secondColorElement">(Admin)</p> */}
            <p className="secondColorElement getOut" onClick={() => {logout(); setActive("")}}>
              | SAIR
            </p>
          </div>
          <Badge badgeContent={2} color="warning" className="badge">
            <Style.bell />{" "}
          </Badge>
          <Style.gear />{" "}
        </div>
        {
        fade && <input
          type="text"
          placeholder="Buscar por cliente, empresa, etc..."
          className={active== "home" || active == "" ? 
                              "animate__animated animate__fadeIn animate__delay-0.5s" :
                              "animate__animated animate__fadeOut animate__delay-0.5s"
                    }
          onChange={(e)=> setSearch(e.target.value)}
        ></input>
        }
        <img src={logo} onClick={handleClick}></img>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </section>
    </Style.HeaderContainer>
  );
};

export default Header;
