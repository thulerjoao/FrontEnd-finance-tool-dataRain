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
import Api from "../../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface SearchProp {
  // setSearch: Dispatch<SetStateAction<string>>
  setSearch: any
}

const Header = ({setSearch}:SearchProp) => {
  const { active, setActive, fade, setFade } = useActive();
  const { userStorage, logout, notifications, getNotifications } = useAuth();
  const navigate = useNavigate()

  const [ openNot, setOpenNot ] = useState<boolean>(false)

  const handleCount =()=>{
    let count = 0
    notifications.map((element: NewNotificationPayload)=>{
      if(!element.visualized){
        count= count + 1
      }
    })
    return count
  }

  const handleVisualize = () =>{
    notifications.map((element)=>{
      if(!element.visualized){
        Api.patch(`/notification/visualized/${element.id}`)
      }
    })
  }

  const handleNavigate = (param:string) =>{
    if(param === "overtime_status"){
      navigate(`/cartao-ponto/extra`)
    }else if(param === "request_send_overtime"){
      navigate(`/pedido-hora-extra`)
    }
    setOpenNot(false)
    handleVisualize()
    handleCount()
  }
  
  useEffect(()=>{
    socket.on('new-notification', (data: NewNotificationPayload) => {
      getNotifications()
    });
  },[])

  useEffect(()=>{
    getNotifications()
  },[])

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
                // src={`https://back-btc-finance-tool-production.up.railway.app${userStorage.imageUrl}`} 
                src={`http://localhost:3333/${userStorage.imageUrl}`}
              ></img>
            )}
            <p>{firstUp(userStorage.name)}</p>
            <p className="secondColorElement getOut" onClick={() => {logout(); setActive("")}}>
              | SAIR
            </p>
          </div>
          <Badge badgeContent={handleCount()} color="warning" className="badge" onClick={()=>{setOpenNot(true)}}>
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
        <img src={logo} ></img>
      </section>
      {openNot && <Style.Notifications onClick={()=>{setOpenNot(false);handleVisualize();handleCount()}}>
        <div className="mainBody" onClick={(event)=>{event.stopPropagation()}}>
          {notifications.map((element)=>{
            return(
              <div className={`mainCard ${element.visualized&& "read"}`} onClick={()=>{
                handleNavigate(element.type)
              }}>
            <img
                alt="Imagem do Perfil"
                src={element.imageUrl!==null? 
                  // `https://back-btc-finance-tool-production.up.railway.app${element.imageUrl}`
                  `http://localhost:3333/${element.imageUrl}`
                  : userDefault}
            ></img>
            <p>{element.message}</p>
            <p className="time">{updateElapsedTime(element.createdAt)}</p>
          </div>
            )
          })
          }
        </div>
      </Style.Notifications>}
    </Style.HeaderContainer>
  );
};

export default Header;
