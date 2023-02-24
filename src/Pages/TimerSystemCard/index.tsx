import AsideBar from '../../components/AsideBar';
import Header from '../../components/Header';
import TimerSystemCard from '../../components/TimerSystemCard';

import * as Styled from './style';


const TimeCardPage = () => {

  return (
    <Styled.TimeCardContainer>
      <Header setSearch={""}/>
      <section className="mainSection">
        <div className="mainDiv">
          <div className="AsideBar">
            <AsideBar />
          </div>
          <div className="HomeCard">
            <TimerSystemCard/>
          </div>
        </div>
      </section>
    </Styled.TimeCardContainer>
  );
};

export default TimeCardPage;
