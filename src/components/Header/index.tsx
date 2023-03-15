import { Badge } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import userDefault from "../../assets/images/default.png";
import logo from "../../assets/images/logo.png";
import { useAuth } from "../../contexts/auth";
import * as Style from "./style";
import { useActive } from "../../contexts/activePage";
import socket from "../../socket";
import { NewNotificationPayload } from "../../types/interface";

interface SearchProp {
  // setSearch: Dispatch<SetStateAction<string>>
  setSearch: any
}

const Header = ({setSearch}:SearchProp) => {
  const { active, setActive, fade, setFade } = useActive();
  const { userStorage, logout, notifications, getNotifications } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [ openNot, setOpenNot ] = useState<boolean>(false)
  const [ Notification, setNotification ] = useState<NewNotificationPayload>()

  console.log(notifications);
  


  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
    socket.on('new-notification', (data: any) => {
      console.log(data)
    });
  }, []);

  const firstUp = (prop: string) =>{
    return(prop.charAt(0).toUpperCase() + prop.slice(1)).split(' ').slice(0, 1)
}

function updateElapsedTime(incomingDate: Date): string {
  const createdAt = new Date(incomingDate);
  const timeElapsed = new Date().getTime() - createdAt.getTime();
  const minutes = Math.floor(timeElapsed / (1000 * 60));
  const hours = Math.floor(timeElapsed / (1000 * 60 * 60));
  const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 7));
  const months = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 30.44));
  const years = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));
  
  if(minutes <60){
    return `${minutes} min`
  }else if(hours<24){
    return `${hours} hr`
  }else if(days< 7){
    return `${days} dias`
  }else if(weeks < 4.1){
    return `${weeks} sem`
  }else if(months < 12){
    return `${months} m`
  }else{
    return `${years} a`
  }
}

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
                src={`https://back-btc-finance-tool-production.up.railway.app${userStorage.imageUrl}`}
              ></img>
            )}
            <p>{firstUp(userStorage.name)}</p>
            {/* <p className="secondColorElement">(Admin)</p> */}
            <p className="secondColorElement getOut" onClick={() => {logout(); setActive("")}}>
              | SAIR
            </p>
          </div>
          <Badge badgeContent={2} color="warning" className="badge" onClick={()=>setOpenNot(true)}>
            <Style.bell/>
          </Badge>
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
      {openNot && <Style.Notifications onClick={()=>setOpenNot(false)}>
        <div className="mainBody" onClick={(event)=>{event.stopPropagation()}}>
          {notifications.map((element)=>{
            return(
              <div className={`mainCard ${element.visualized&& "read"}`}>
            <img
                alt="Imagem do Perfil"
                src={element.imageUrl!==null? 
                  `https://back-btc-finance-tool-production.up.railway.app${element.imageUrl}`
                  : userDefault}
            ></img>
            <p>{element.message}</p>
            <p className="time">{updateElapsedTime(element.createdAt)}</p>
          </div>
            )
          })
          }
          {/* <div className="mainCard">
            <img
                alt="Imagem do Perfil"
                src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ"
                // src={`https://back-btc-finance-tool-production.up.railway.app${userStorage.imageUrl}`}
            ></img>
            <p>Requisição de hora extra aceita</p>
          </div>
          <div className="mainCard read">
          <img
                alt="Imagem do Perfil"
                src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ"
                // src={`https://back-btc-finance-tool-production.up.railway.app${userStorage.imageUrl}`}
            ></img>
            <p>Requisição de hora extra aceita</p>
          </div>
          <div className="mainCard read">
          <img
                alt="Imagem do Perfil"
                src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ"
                // src={`https://back-btc-finance-tool-production.up.railway.app${userStorage.imageUrl}`}
            ></img>
            <p>Nova requisição de hora extra</p>
          </div>
          <div className="mainCard read">
          <img
                alt="Imagem do Perfil"
                src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ"
                // src={`https://back-btc-finance-tool-production.up.railway.app${userStorage.imageUrl}`}
            ></img>
            <p>Requisição de hora extra aceita</p>
          </div>
          <div className="mainCard read">
          <img
                alt="Imagem do Perfil"
                src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ"
                // src={`https://back-btc-finance-tool-production.up.railway.app${userStorage.imageUrl}`}
            ></img>
            <p>Requisição de hora extra aceita</p>
          </div> */}
          {/* <div className="botton"><p>visualizar tudo</p></div> */}
        </div>
      </Style.Notifications>}
    </Style.HeaderContainer>
  );
};

export default Header;
