import { Navigate, Route, Routes } from "react-router-dom";
import AllProjects from "./components/AllProjects";
import ClientsPage from "./components/ClientsPage";
import CreateClientCard from "./components/CreateClientCard";
import Profile from "./components/Profile";
import ProjectPage from "./components/ProjectPage";
import ProjectUserPage from "./components/ProjectUserPage";
import Teams from "./components/Teams";
import UsersPage from "./components/Users";
import CreateAccount from "./Pages/CreateAccount";
import FormPage from "./Pages/Form";
import HomePage from "./Pages/Home";
import Login from "./Pages/Login";
import Budget from "./Pages/Budget";
import QuestionsPage from "./Pages/QuestionsPage";
import RecoverPasswordPage from "./Pages/RecoverPassword";
import ExtraHour from "./Pages/ExtraHour";
import { useAuth } from "./contexts/auth";

const Router = () => {

  const { logged } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/new-user" element={<CreateAccount />} />
      <Route path="/new-client" element={<CreateClientCard />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/project-page/:id" element={<ProjectPage />} />
      <Route path="/project-user/:id/:manager" element={<ProjectUserPage />} />
      <Route path="/novasenha/:param" element={<RecoverPasswordPage/>} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/questoes" element={<QuestionsPage />} />
      <Route path="/extra-hour" element={<ExtraHour />} />

      <Route path="*" element={<Navigate to={logged ? "/home" : "/"} />} />

    </Routes>
  );
};

export default Router;
