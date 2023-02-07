import { useEffect } from "react";
import { useUsers } from "../../contexts/userContext";
import Header from "../Header";
import UserCard from "../UserCard/indext";
import * as S from "./style";
import React from "react";
import AsideBar from "../AsideBar";


const UsersPage = () => {
const { handleGetUsers, user } = useUsers()

  useEffect(() => {
    handleGetUsers()
  },[])
  return (
    <S.MainSection>
      <Header setSearch={""} />
      <S.UserAllContent>
        <S.UserAsidebar>
          <AsideBar />
        </S.UserAsidebar>
          <S.UsersPageContainer>
            <S.UsersPageHeader>
              <S.UsersPageTitle>Central de Controle - Usuários</S.UsersPageTitle>
            </S.UsersPageHeader>
            <S.UsersPageContent>
              {user.map((element, index) => {
                return <UserCard user={element} key={element.id} />;
              })}
            </S.UsersPageContent>
          </S.UsersPageContainer>
        
      </S.UserAllContent>
    </S.MainSection>
  );
};

// export default UsersPage;
