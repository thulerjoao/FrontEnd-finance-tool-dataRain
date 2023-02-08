import { Navigate, Route, Routes } from "react-router-dom";
import AllProjects from "./components/AllProjects";
import CreateClientCard from "./components/CreateClientCard";
import ProjectPage from "./components/ProjectPage";
import ProjectUserPage from "./components/ProjectUserPage";
import Teams from "./components/Teams";
import CreateAccount from "./Pages/CreateAccount";
import FormPage from "./Pages/Form";
import HomePage from "./Pages/Home";
import Login from "./Pages/Login";
import Budget from "./Pages/Budget";
import QuestionsPage from "./Pages/QuestionsPage";
import RecoverPasswordPage from "./Pages/RecoverPassword";
import ExtraHour from "./Pages/ExtraHour";
import { useAuth } from "./contexts/auth";
import UsersPage from "./Pages/UsersPage";
import TeamsPage from "./Pages/Teams";
import ClientsPage from "./Pages/ClientsPage";
import Profile from "./Pages/Profile";
import ProjectsPage from "./Pages/Projects";

const Router = () => {

  const { logged } = useAuth()

  return (
    <Routes>
      <Route path="/users" element={<UsersPage />} />
      <Route path="/usuarios" element={<UsersPage />} />

      <Route path="/teams" element={<Teams />} />
      <Route path="/equipes" element={<TeamsPage />} />

      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/clientes" element={<ClientsPage />} />
      
      <Route path="/profile" element={<Profile />} />
      <Route path="/perfil" element={<Profile />} />

      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projetos" element={<ProjectsPage />} />

      <Route path="/project-user/:id/:manager" element={<ProjectUserPage />} />

      <Route path="/project-page/:id" element={<ProjectPage />} />


      <Route path="/" element={<Login />} />
      <Route path="/cadastro-novo-usuario" element={<CreateAccount />} />
      <Route path="/cadastro-novo-cliente" element={<CreateClientCard />} />
      <Route path="/novasenha/:param" element={<RecoverPasswordPage/>} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/questoes" element={<QuestionsPage />} />
      <Route path="/pedido-hora-extra" element={<ExtraHour />} />


      

      <Route path="*" element={<Navigate to={logged ? "/home" : "/"} />} />

    </Routes>
  );
};

export default Router;
