import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useProject } from "../../contexts/projectContext";
import Api from "../../services/api";
import Header from "../Header";
import ModalCreateProject from "../ModalCreateProject";
import Navbar from "../Navbar";
import ProjectLi from "../ProjectLi";
import * as S from "./style";


const AllProjects = () => {
  const [openProjectModal, setOpenProjectModal] = useState<boolean>(false);
  const { userStorage } = useAuth();
  const { project, handleGetProjects } = useProject();
  const [userProject, setUserProject] = useState<any>([]);

  const handleUserProject = async () => {
    await Api.get("project/user")
      .then((res) => setUserProject(res.data))
      .catch((err) => console.log(err));
  };

  if (userStorage.roleName === "admin") {
    useEffect(() => {
      handleGetProjects();
    }, []);
  } else {
    useEffect(() => {
      handleUserProject();
    }, []);
  }

  return (
    <S.MainSection>
      <Header setSearch={""}/>
      <S.AllContainer>
        <S.ProjectNavbar>
          <Navbar />
        </S.ProjectNavbar>
        <S.ProjectsContainer>
          <S.ProjectsHeader>
            <S.ProjectsTitle>Central de Controle - Projetos</S.ProjectsTitle>
          </S.ProjectsHeader>
          <S.ProjectsContent>
            <S.ProjectsUl>
              {userStorage.roleName === "admin" ? (
                <S.NewProject>
                  <S.NewProjectContent>
                    <span>Criar outro projeto</span>
                    <span>
                      {" "}
                      <S.AddProjectIcon
                        onClick={() => setOpenProjectModal(!openProjectModal)}
                      />
                    </span>
                  </S.NewProjectContent>
                </S.NewProject>
              ) : null}

              {userStorage.roleName === "admin"
                ? project.map((element) => {
                    return <ProjectLi project={element} key={element.id} />;
                  })
                : userProject.map((element:any) => {
                    return <ProjectLi project={element.project} manager={element.manager} userId={userStorage.id} key={element.id} />;
                  })}
            </S.ProjectsUl> 
          </S.ProjectsContent>
        </S.ProjectsContainer>  
        {openProjectModal ? (
          <ModalCreateProject
            openProjectModal={openProjectModal}
            setOpenProjectModal={setOpenProjectModal}
          />
        ) : null}
      </S.AllContainer>
    </S.MainSection>
  );
};

export default AllProjects;
