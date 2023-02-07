import * as S from "./style";
import Logo from "../../assets/img/logo.svg";
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useActive } from "../../contexts/activePage";

const AsideBar = () => {
  const asideigate = useNavigate();
  const { userStorage } = useAuth()
  const { active, setActive } = useActive();

  return (
    <S.AsidebarContainer>
      <S.AsidebarLogo onClick={
          ()=>{asideigate("/home");
          setActive("home")}
          }>
          <S.AsidebarImg src={Logo} alt="Logo da empresa" />
        </S.AsidebarLogo>
        <S.AsidebarContent>
          <S.AsidebarContentUl>
            <S.AsidebarContentLi className={active === "home" || active === ""? "active" : ""} onClick={() => {asideigate("/home"); setActive("home")}}>
              <span>
                <AiOutlineHome />
              </span>
              Início
            </S.AsidebarContentLi>
            {userStorage.roleName === "admin" ? (
              <>
                <S.AsidebarContentLi
                  className={active === "users" ? "active" : ""}
                  onClick={() => {
                    asideigate("/users");
                    setActive("users");
                  }}
                >
                  <span>
                    <FaUsers />
                  </span>
                  Usuários
                </S.AsidebarContentLi>
                <S.AsidebarContentLi
                  className={active === "teams" ? "active" : ""}
                  onClick={() => {
                    asideigate("/teams");
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
                    asideigate("/clients");
                    setActive("clients");
                  }}
                >
                  <span>
                    <AiOutlineTeam />
                  </span>
                  Clientes
                </S.AsidebarContentLi>
              </>
            ) : null}
            <S.AsidebarContentLi
              className={active === "profile" ? "active" : ""}
              onClick={() => {
                asideigate("/profile");
                setActive("profile");
              }}
            >
              <span>
                <CgProfile />
              </span>
              Perfil
            </S.AsidebarContentLi>
            {userStorage.roleName === "admin" || userStorage.roleName === "manager"? (
            <S.AsidebarContentLi
              className={active === "extra-hour" ? "active" : ""}
              onClick={() => {
                asideigate("/extra-hour");
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
                asideigate("/projects");
                setActive("projects");
              }}
            >
              <span>
                <S.ProjectIcon />
              </span>
              Projetos
            </S.AsidebarContentLi>
            {userStorage.roleName === "admin"? (
            <S.AsidebarContentLi
            className={active === "questoes" ? "active" : ""}
            onClick={() => {
              asideigate("/questoes");
              setActive("questoes");
            }}
            >
            <span>
              <BsGraphUp />
            </span>
            Questionário
          </S.AsidebarContentLi>
            ) : null}
            {userStorage.roleName === "admin" ? (
              <>
                <S.AsidebarContentLi
                  className={active === "new-user" ? "active" : ""}
                  onClick={() => {
                    asideigate("/new-user");
                    setActive("new-user");
                  }}
                >
                  <span>
                    <AiOutlineUserAdd />
                  </span>
                  Cadastrar Usuário
                </S.AsidebarContentLi>
                <S.AsidebarContentLi
                className={active === "new-client" ? "active" : ""} 
                onClick={() => {
                  asideigate("/new-client");
                  setActive("new-client");
                  }}>
                  <span>
                    <AiOutlineUserAdd />
                  </span>
                  Cadastrar Cliente
                </S.AsidebarContentLi>
              </>
            ) : null}
          </S.AsidebarContentUl>
        </S.AsidebarContent>
    </S.AsidebarContainer>
  );
};

export default AsideBar;