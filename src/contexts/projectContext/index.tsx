import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import Api from "../../services/api";
import { ProjectTypes } from "../../types/interface";
import { useAuth } from "../auth";

interface ProjectProviderData {
  projects: ProjectTypes[];
  handleGetProjects: () => void;
  estado: boolean;
  alteraEstado: () => void;
}

interface ProjectProviderProps {
  children: ReactNode;
}

const ProjectContext = createContext<ProjectProviderData>(
  {} as ProjectProviderData
);

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);
  const [estado, setEstado] = useState<boolean>(false)
  const { logged } = useAuth();

  const alteraEstado = ()=>{
    setEstado(!estado)
  }

  const handleGetProjects = () => {
    Api.get("/project")
      .then((res) => {setProjects(res.data)})
      .catch((err) => {});
  };

  useEffect(() => {
    if (logged) handleGetProjects();
  }, [logged]);

  return (
    <ProjectContext.Provider
      value={{ projects, handleGetProjects, estado, alteraEstado }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
