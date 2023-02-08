import AsideBar from '../../components/AsideBar';
import Header from '../../components/Header';
import TeamsCard from '../../components/TeamsCard';
import * as Styled from './style';


const TeamsPage = () => {

  return (
    <Styled.TeamsPageContainer>
      <Header setSearch={""}/>
      <section className="mainSection">
        <div className="mainDiv">
          <div className="AsideBar">
            <AsideBar />
          </div>
          <div className="HomeCard">
            <TeamsCard/>
          </div>
        </div>
      </section>
    </Styled.TeamsPageContainer>
  );
};

export default TeamsPage;
