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
import { FaPeopleArrows, FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useActive } from "../../contexts/activePage";
import { MdOutlinePersonPin } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

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
            <S.AsidebarContentLi className={active === "home" || active === ""? "active" : ""} onClick={() => {navigate("/home"); setActive("home")}}>
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
            {userStorage.roleName === "admin" || userStorage.roleName === "manager"? (
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
            {userStorage.roleName === "admin"? (
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
            {userStorage.roleName === "admin" ? (
              <>
                <S.AsidebarContentLi
                  className={active === "new-user" ? "active" : ""}
                  onClick={() => {
                    navigate("/cadastro-novo-usuario");
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
                  navigate("/cadastro-novo-cliente");
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