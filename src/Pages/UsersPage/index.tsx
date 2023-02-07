import { useState } from 'react';
import AsideBar from '../../components/AsideBar';
import Header from '../../components/Header';
import HomeCard from '../../components/HomeCard';
import UsersCard from '../../components/UsersCard';
import * as Styled from './style';


const UsersPage = () => {

  return (
    <Styled.UsersPageContainer>
      <Header setSearch={""}/>
      <section className="mainSection">
        <div className="mainDiv">
          <div className="AsideBar">
            <AsideBar />
          </div>
          <div className="HomeCard">
            <UsersCard/>
          </div>
        </div>
      </section>
    </Styled.UsersPageContainer>
  );
};

export default UsersPage;
