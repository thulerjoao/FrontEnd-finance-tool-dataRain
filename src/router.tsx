import { Navigate, Route, Routes } from "react-router-dom";
import FormPage from "./Pages/Form";
import HomePage from "./Pages/Home";
import Login from "./Pages/Login";
import Budget from "./Pages/Budget";
import QuestionsPage from "./Pages/Questions";
import RecoverPasswordPage from "./Pages/RecoverPassword";
import ExtraHour from "./Pages/ExtraHour";
import { useAuth } from "./contexts/auth";
import UsersPage from "./Pages/Users";
import TeamsPage from "./Pages/Teams";
import ClientsPage from "./Pages/ClientsPage";
import Profile from "./Pages/Profile";
import ProjectsPage from "./Pages/Projects";
import Project from "./Pages/Project";
import RegisterNewUser from "./Pages/RegisterNewUser";
import TimeCardPage from "./Pages/TimerSystemCard";

const Router = () => {

  const { logged, userStorage } = useAuth();
  const role = userStorage.role.name

  return (
    <Routes>
      { logged &&
        <>
          { (role === 'financial' || role === 'pre sale')&&
            <>
              <Route path="/home" element={<HomePage />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/usuarios" element={<UsersPage />} />
              <Route path="/equipes" element={<TeamsPage />} />
              <Route path="/clientes" element={<ClientsPage />} />
              <Route path="/perfil" element={<Profile />} />
              <Route path="/questoes" element={<QuestionsPage />} />
            </>          
          }
          { (role === 'manager' || role === 'professional services')&&
            <>
              <Route path="/cartao-ponto/:param" element={<TimeCardPage/>} />
              <Route path="/perfil" element={<Profile />} />
              {role === 'manager' && <Route path="/pedido-hora-extra" element={<ExtraHour />} />}
              <Route path="/projetos" element={<ProjectsPage />} />
              <Route path="/projeto" element={<Project/>} />            
            </>
          }
          {(role === "admin")&&
            <>
              <Route path="/home" element={<HomePage />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/usuarios" element={<UsersPage />} />
              <Route path="/equipes" element={<TeamsPage />} />
              <Route path="/clientes" element={<ClientsPage />} />
              <Route path="/perfil" element={<Profile />} />
              <Route path="/pedido-hora-extra" element={<ExtraHour />} />
              <Route path="/projetos" element={<ProjectsPage />} />
              <Route path="/projeto" element={<Project/>} />
              <Route path="/questoes" element={<QuestionsPage />} />
              <Route path="/cadastro" element={<RegisterNewUser/>} />
              <Route path="/novasenha/:param" element={<RecoverPasswordPage prop={"new"}/>} /> 
              <Route path="/recuperar-senha/:param" element={<RecoverPasswordPage prop={"recover"}/>} />
          </>
        }
        </>
      }
      <Route path="/recuperar-senha/:param" element={<RecoverPasswordPage prop={"recover"}/>} />
      <Route path="/novasenha/:param" element={<RecoverPasswordPage prop={"new"}/>} /> 
      <Route path="/form" element={<FormPage />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to={logged ? ((role === 'manager' || role === 'professional services')? "/cartao-ponto/dot" :"/home") : "/"} />} />
    </Routes>
  );
};

export default Router;
