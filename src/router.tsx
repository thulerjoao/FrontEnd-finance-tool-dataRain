import { Navigate, Route, Routes } from "react-router-dom";
import CreateAccount from "./Pages/CreateAccount";
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
import CreateClient from "./Pages/CreateClient";

const Router = () => {

  const { logged } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/usuarios" element={<UsersPage />} />
      <Route path="/equipes" element={<TeamsPage />} />
      <Route path="/clientes" element={<ClientsPage />} />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/pedido-hora-extra" element={<ExtraHour />} />
      <Route path="/projetos" element={<ProjectsPage />} />
      <Route path="/questoes" element={<QuestionsPage />} />
      <Route path="/cadastro-novo-usuario" element={<CreateAccount />} />
      <Route path="/cadastro-novo-cliente" element={<CreateClient/>} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/novasenha/:param" element={<RecoverPasswordPage/>} />

      <Route path="*" element={<Navigate to={logged ? "/home" : "/"} />} />
    </Routes>
  );
};

export default Router;
