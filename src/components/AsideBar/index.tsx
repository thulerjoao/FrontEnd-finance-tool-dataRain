import * as S from "./style";
import Logo from "../../assets/img/logo.svg";
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { GrDocumentTime } from 'react-icons/gr'
import { BsGraphUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { FaPeopleArrows, FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useActive } from "../../contexts/activePage";

const AsideBar = () => {
  const navigate = useNavigate();
  const { userStorage } = useAuth()
  const { active, setActive } = useActive();

  return (
    <S.AsidebarContainer>
      <S.AsidebarLogo onClick={
          ()=>{navigate("/home");
          setActive("home")}
          }>
          <S.AsidebarImg src={Logo} alt="Logo da empresa" />
        </S.AsidebarLogo>
        <S.AsidebarContent>
          <S.AsidebarContentUl>
            <S.AsidebarContentLi 
              className={active === "home" || active === ""? "active" : ""} 
              onClick={() => {navigate("/home"); 
              setActive("home")}}>
              <span>
                <AiOutlineHome />
              </span>
              Formulários
            </S.AsidebarContentLi>
            <S.AsidebarContentLi 
              className={active === "timeCard"? "active" : ""} 
              onClick={() => {navigate("/cartao-ponto/dot"); 
              setActive("timeCard")}}>
              <span>
                <GrDocumentTime />
              </span>
              Ponto Digital
            </S.AsidebarContentLi>
            {userStorage.role.name === "admin" ? (
              <>
                <S.AsidebarContentLi
                  className={active === "users" ? "active" : ""}
                  onClick={() => {
                    navigate("/usuarios");
                    setActive("users");
                  }}
                >
                  <span>
                  
                    <FaPeopleArrows />
                  </span>
                  Usuários
                </S.AsidebarContentLi>
                <S.AsidebarContentLi
                  className={active === "teams" ? "active" : ""}
                  onClick={() => {
                    navigate("/equipes");
                    setActive("teams");
                  }}
                >
                  <span>
                  
                    <AiOutlineTeam />
                  </span>
                  Equipes
                </S.AsidebarContentLi>
                <S.AsidebarContentLi
                  className={active === "clients" ? "active" : ""}
                  onClick={() => {
                    navigate("/clientes");
                    setActive("clients");
                  }}
                >
                  <span>
                    <FaUsers />
                  </span>
                  Clientes
                </S.AsidebarContentLi>
              </>
            ) : null}
            <S.AsidebarContentLi
              className={active === "profile" ? "active" : ""}
              onClick={() => {
                navigate("/perfil");
                setActive("profile");
              }}
            >
              <span>
                <CgProfile />
              </span>
              Perfil
            </S.AsidebarContentLi>
            {userStorage.role.name === "admin" || userStorage.role.name === "manager"? (
            <S.AsidebarContentLi
              className={active === "extra-hour" ? "active" : ""}
              onClick={() => {
                navigate("/pedido-hora-extra");
                setActive("extra-hour");
              }}
            >
              <span>
                <S.ExtraHourIcon/>
              </span>
              Hora Extra
            </S.AsidebarContentLi>
            ) : null}
            <S.AsidebarContentLi
              className={active === "projects" ? "active" : ""}
              onClick={() => {
                navigate("/projetos");
                setActive("projects");
              }}
            >
              <span>
                <S.ProjectIcon />
              </span>
              Projetos
            </S.AsidebarContentLi>
            {userStorage.role.name === "admin"? (
            <S.AsidebarContentLi
            className={active === "questoes" ? "active" : ""}
            onClick={() => {
              navigate("/questoes");
              setActive("questoes");
            }}
            >
            <span>
              <BsGraphUp />
            </span>
            Questionário
          </S.AsidebarContentLi>
            ) : null}
            {userStorage.role.name === "admin" ? (
              <>
                <S.AsidebarContentLi
                  className={active === "new-user" ? "active" : ""}
                  onClick={() => {
                    navigate("/cadastro");
                    setActive("new-user");
                  }}
                >
                  <span>
                    <AiOutlineUserAdd />
                  </span>
                  Cadastro
                </S.AsidebarContentLi>
              </>
            ) : null}
          </S.AsidebarContentUl>
        </S.AsidebarContent>
    </S.AsidebarContainer>
  );
};

export default AsideBar;