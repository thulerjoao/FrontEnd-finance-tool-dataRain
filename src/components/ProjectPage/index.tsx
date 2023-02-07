import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useActive } from "../../contexts/activePage";
import { useProject } from "../../contexts/projectContext";
import Api from "../../services/api";
import { ProjectTypes } from "../../types/interface";
import Header from "../Header";
import MockedUserCard from "../MockedUserCard";
import ModalAddClientToProject from "../ModalAddClientProject";
import ProjectCard from "../ProjectCard";
import * as S from "./style";

const ProjectPage = () => {
  const navigate = useNavigate();
  const { setActive } = useActive();
  const { id } = useParams();
  const [values, setValues] = useState<ProjectTypes>({} as ProjectTypes);
  const [valueUser, setValueUser] = useState<any>([]);
  const [openModalClient, setOpenModalClient] = useState<boolean>(false);
  const { estado } = useProject();

  const getAnProject = () => {
    Api.get(`/project/${id}`)
      .then((res) => {
        setValues(res.data);
        setValueUser(res.data.users);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnProject();
  }, [estado]);

  return (
    <>
      <Header setSearch={""}/>
      <S.ProjectAllContainer>
        <S.ProjectPageContainer>
          <S.ProjectPageReturn>
            {" "}
            <S.BackIcon
              onClick={() => {
                navigate("/projects");
                setActive("projects");
              }}
            />{" "}
          </S.ProjectPageReturn>
          <S.ProjectPageHeader>
            <div>
              <span
                onClick={() => {
                  values.client
                    ? toast.error("Este projeto já possui um cliente")
                    : setOpenModalClient(!openModalClient);
                }}
              >
                Adicionar Cliente
              </span>
            </div>
            {openModalClient ? (
              <ModalAddClientToProject
                openModalClient={openModalClient}
                setOpenModalClient={setOpenModalClient}
                project={values}
              />
            ) : null}
            <S.ProjectHeaderTitle>{values.name}</S.ProjectHeaderTitle>
            <S.ProjectHeaderSubtitle>
              {" "}
              Valor total por hora - R$: {(values.summedTimeValueOfAllUsers) && (values.summedTimeValueOfAllUsers).toFixed(2)}
            </S.ProjectHeaderSubtitle>
            <S.ProjectDescription>{values.description}</S.ProjectDescription>
          </S.ProjectPageHeader>
          <S.ProjectPageContent>
            <>
              <MockedUserCard project={values} />
              {valueUser.map((e: any, index: any) => {
                return (
                  <ProjectCard idProject={values.id} user={e} key={index} />
                );
              })}
            </>
          </S.ProjectPageContent>
        </S.ProjectPageContainer>
      </S.ProjectAllContainer>
    </>
  );
};

export default ProjectPage;
