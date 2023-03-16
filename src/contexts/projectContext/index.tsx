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
  projectHours: any;
  handleGetHours: (prop:string)=>void
}

interface ProjectProviderProps {
  children: ReactNode;
}

const ProjectContext = createContext<ProjectProviderData>(
  {} as ProjectProviderData
);

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);
  const [ projectHours, setProjectHours ] = useState<any>()
  const { logged, userStorage } = useAuth();

 

  const handleGetProjects = () => {
    if(userStorage.role.name === "admin"){
        Api.get("/project")
        .then((res) => {
          setProjects(res.data)
          handleGetHours(res.data[0].id)
        })
        .catch((err) => {});
      }else{
        Api.get(`/project/user`)
      .then((res) => {
        setProjects(res.data)

        handleGetHours(res.data[0].id)
      })
      .catch((err) => {});
      }
  };

  useEffect(() => {
    if (logged) {
      handleGetProjects();
    }
  }, [logged]);

  const handleGetHours = (id:string) => {
    Api.get(`/normal-hour/${id}`)
    .then((res)=> {
      setProjectHours(res.data);
    })
    .catch(()=>setProjectHours([]))
  } 

  return (
    <ProjectContext.Provider
      value={{ projects, handleGetProjects, projectHours, handleGetHours }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
