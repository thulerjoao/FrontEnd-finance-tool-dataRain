import * as S from "./style";
import Logo from "../../assets/img/logo.svg";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlineMessage,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useActive } from "../../contexts/activePage";

const AsideBar = () => {
  const navigate = useNavigate();
  const { userStorage } = useAuth()
  const { active, setActive } = useActive();

  return (
    <S.NavbarContainer>
      <S.NavbarWrapper>
      <S.NavbarLogo onClick={
          ()=>{navigate("/home");
          setActive("home")}
          }>
          <S.NavbarImg src={Logo} alt="Logo da empresa" />
        </S.NavbarLogo>
        <S.NavbarContent>
          <S.NavbarContentUl>
            <S.NavbarContentLi className={active === "home" || active === ""? "active" : ""} onClick={() => {navigate("/home"); setActive("home")}}>
              <span>
                <AiOutlineHome />
              </span>
              Início
            </S.NavbarContentLi>
            {userStorage.roleName === "admin" ? (
              <div>
                <S.NavbarContentLi
                  className={active === "users" ? "active" : ""}
                  onClick={() => {
                    navigate("/users");
                    setActive("users");
                  }}
                >
                  <span>
                    <FaUsers />
                  </span>
                  Usuários
                </S.NavbarContentLi>
                <S.NavbarContentLi
                  className={active === "teams" ? "active" : ""}
                  onClick={() => {
                    navigate("/teams");
                    setActive("teams");
                  }}
                >
                  <span>
                    <AiOutlineTeam />
                  </span>
                  Equipes
                </S.NavbarContentLi>
                <S.NavbarContentLi
                  className={active === "clients" ? "active" : ""}
                  onClick={() => {
                    navigate("/clients");
                    setActive("clients");
                  }}
                >
                  <span>
                    <AiOutlineTeam />
                  </span>
                  Clientes
                </S.NavbarContentLi>
              </div>
            ) : null}
            <S.NavbarContentLi
              className={active === "profile" ? "active" : ""}
              onClick={() => {
                navigate("/profile");
                setActive("profile");
              }}
            >
              <span>
                <CgProfile />
              </span>
              Perfil
            </S.NavbarContentLi>
            {userStorage.roleName === "admin" || userStorage.roleName === "manager"? (
            <S.NavbarContentLi
              className={active === "extra-hour" ? "active" : ""}
              onClick={() => {
                navigate("/extra-hour");
                setActive("extra-hour");
              }}
            >
              <span>
                <S.ExtraHourIcon/>
              </span>
              Hora Extra
            </S.NavbarContentLi>
            ) : null}
            <S.NavbarContentLi
              className={active === "projects" ? "active" : ""}
              onClick={() => {
                navigate("/projects");
                setActive("projects");
              }}
            >
              <span>
                <S.ProjectIcon />
              </span>
              Projetos
            </S.NavbarContentLi>
            {userStorage.roleName === "admin"? (
            <S.NavbarContentLi
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
          </S.NavbarContentLi>
            ) : null}
            {userStorage.roleName === "admin" ? (
              <div>
                <S.NavbarContentLi
                  className={active === "new-user" ? "active" : ""}
                  onClick={() => {
                    navigate("/new-user");
                    setActive("new-user");
                  }}
                >
                  <span>
                    <AiOutlineUserAdd />
                  </span>
                  Cadastrar Usuário
                </S.NavbarContentLi>
                <S.NavbarContentLi
                className={active === "new-client" ? "active" : ""} 
                onClick={() => {
                  navigate("/new-client");
                  setActive("new-client");
                  }}>
                  <span>
                    <AiOutlineUserAdd />
                  </span>
                  Cadastrar Cliente
                </S.NavbarContentLi>
              </div>
            ) : null}
          </S.NavbarContentUl>
        </S.NavbarContent>
      </S.NavbarWrapper>
    </S.NavbarContainer>
  );
};

export default AsideBar;