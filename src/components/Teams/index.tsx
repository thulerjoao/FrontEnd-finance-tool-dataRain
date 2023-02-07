import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useTeam } from "../../contexts/teamContext";
import Header from "../Header";
import ModalCreateTeam from "../ModalCreateTeam";
import Navbar from "../Navbar";
import TeamsLi from "../TeamsLi";
import * as S from "./style";
import React from "react";


const Teams = () => {
  const { handleGetTeam, team } = useTeam()
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

  useEffect(() =>{
    handleGetTeam()
  },[])

  const { userStorage } = useAuth()

  return (
    <S.MainSection>
      <Header setSearch={""}/>
      <S.TeamsAllContainer>
        <S.TeamsNavbar>
          <Navbar />
        </S.TeamsNavbar>
        <S.TeamsContainer>
          <S.TeamsHeader>
            <S.TeamsTitle>Central de Controle - Equipes</S.TeamsTitle>
          </S.TeamsHeader>
          <S.TeamsContent>
            <S.TeamsSubTitle>
              <p>Equipes</p>
              <p>Valor da Hora</p>
            </S.TeamsSubTitle>
            <S.TeamsUl>
              {userStorage.roleName === "admin" ? (
                <S.TeamMockedLi>
                  <S.TeamMockedLiContent>
                    <span>Cadastrar outra equipe</span>
                    <span>
                      {" "}
                      <S.AddTeamIcon
                        onClick={() => {
                          setOpenCreateModal(!openCreateModal);
                        }}
                      />
                    </span>
                    {openCreateModal ? <ModalCreateTeam setOpenCreateModal={setOpenCreateModal} openCreateModal={openCreateModal} /> : ""}
                  </S.TeamMockedLiContent>
                </S.TeamMockedLi>
              ) : null}
              {team.map((element, index) => {
                return <TeamsLi team={element} key={index} />;
              })}
            </S.TeamsUl>
          </S.TeamsContent>
        </S.TeamsContainer>
      </S.TeamsAllContainer>
    </S.MainSection>
  );
};

export default Teams;
