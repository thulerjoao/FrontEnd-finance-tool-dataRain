import AsideBar from '../../components/AsideBar';
import ExtraHourCard from '../../components/ExtraHourCard';
import Header from '../../components/Header';
import * as Styled from './style';


const ExtraHour = () => {

  return (
    <Styled.ExtraHourContainer>
      <Header setSearch={""}/>
      <section className="mainSection">
        <div className="mainDiv">
          <div className="AsideBar">
            <AsideBar />
          </div>
          <div className="HomeCard">
            <ExtraHourCard/>
          </div>
        </div>
      </section>
    </Styled.ExtraHourContainer>
  );
};

export default ExtraHour;
