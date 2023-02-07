import { useState } from 'react';
import AsideBar from '../../components/AsideBar';
import Header from '../../components/Header';
import HomeCard from '../../components/HomeCard';
import Navbar from '../../components/Navbar';
import * as Styled from './style';


const HomePage = () => {

  const [ search , setSearch ] = useState<string>("")

  return (
    <Styled.HomeContainer>
      <Header setSearch={setSearch}/>
      <section className="mainSection">
        <div className="mainDiv">
          <div className="AsideBar">
            {/* <AsideBar /> */}
            <Navbar />
          </div>
          <div className="HomeCard">
            <HomeCard search={search}/>
          </div>
        </div>
      </section>
    </Styled.HomeContainer>
  );
};

export default HomePage;
