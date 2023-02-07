import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userDefault from "../../assets/images/default.png";
import { useActive } from "../../contexts/activePage";
import { useAuth } from "../../contexts/auth";
import Api from "../../services/api";
import { ProjectTypes } from "../../types/interface";
import Header from "../Header";
import ModalAddClientToProject from "../ModalAddClientProject";
import ModalReqUserHour from "../ModalReqUserHour";
import ModalUserHour from "../ModalUserHour";
import * as S from "./style";

const ProjectUserPage = () => {
  const navigate = useNavigate();
  const { setActive } = useActive();
  const { userStorage } = useAuth();
  const { id, manager } = useParams();
  const [values, setValues] = useState<ProjectTypes>({} as ProjectTypes);
  const [users, setUsers] = useState<any>([]);
  const [openModalClient, setOpenModalClient] = useState<boolean>(false);

  //states que alteram status do modal
  const [openModalAddHour, setOpenModalAddHour] = useState<boolean>(false);
  const [openModalReqHour, setOpenModalReqHour] = useState<boolean>(false);

  const getProject = async () => {
    await Api.get(`/project/${id}`)
      .then((res) => {
        setValues(res.data);
        setUsers(res.data.users);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProject();
  }, []);

  const userCurrentProject: any = users.filter((element: any) => {
    return userStorage.id === element.user.id;
  });

  return (
    <>
      <Header  setSearch={""}/>
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
            {openModalClient ? (
              <ModalAddClientToProject
                openModalClient={openModalClient}
                setOpenModalClient={setOpenModalClient}
                project={values}
              />
            ) : null}
            <S.ProjectHeaderTitle>{values.name}</S.ProjectHeaderTitle>
            <S.ProjectDescription>
              Descrição: {values.description}
            </S.ProjectDescription>
            <S.ProjectDescription>
              Nome do manager: {manager}
            </S.ProjectDescription>
          </S.ProjectPageHeader>
          <S.ProjectPageContent>
            {userCurrentProject.map((e: any) => {
              return (
                <div className="content-page">
                  {e.user.imageUrl === null ? (
                    <S.Image key={e.id} src={userDefault} alt="Imagem perfil" />
                  ) : (
                    <S.Image
                      key={e.id}
                      src={`https://back-btc-finance-tool-production-0df0.up.railway.app/${e.user.imageUrl}`}
                      alt="Imagem perfil"
                    />
                  )}
                  <p className="name-user">Nome: {e.user.name}</p>
                  <p className="email-user">Email: {e.user.email} </p>
                  <p className="function-user">Função: {e.user.position} </p>
                </div>
              );
            })}
            {userStorage.billable ? (
              <div>
                <button
                  className="add-hour"
                  onClick={() => setOpenModalAddHour(!openModalAddHour)}
                >
                  Registrar hora
                </button>
                <button
                  className="add-hour-extra"
                  onClick={() => {
                    setOpenModalReqHour(!openModalReqHour);
                  }}
                >
                  Requisitar hora extra
                </button>
              </div>
            ) : null}
          </S.ProjectPageContent>
        </S.ProjectPageContainer>
      </S.ProjectAllContainer>
      {openModalAddHour ? (
        <ModalUserHour
          openModalAddHour={openModalAddHour}
          setOpenModalAddHour={setOpenModalAddHour}
        />
      ) : null}
      {openModalReqHour ? (
        <ModalReqUserHour
          openModalReqHour={openModalReqHour}
          setOpenModalReqHour={setOpenModalReqHour}
        />
      ) : null}
    </>
  );
};

export default ProjectUserPage;
