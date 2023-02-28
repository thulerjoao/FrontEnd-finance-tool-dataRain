import { Dispatch, SetStateAction, useState } from 'react';
import AsideBar from '../../components/AsideBar';
import Header from '../../components/Header';
import TimerSystemCard from '../../components/TimerSystemCard';
import TimerSystemExtraHour from '../../components/TimerSystemExtraHour';
import * as Styled from './style';


const TimeCardPage = () => {

  const [ isTimerSystem, setIsTimerSystem ] = useState<boolean>(true)

  return (
    <Styled.TimeCardContainer>
      <Header setSearch={""}/>
      <section className="mainSection">
        <div className="mainDiv">
          <div className="AsideBar">
            <AsideBar />
          </div>
          <div className="HomeCard">
            { isTimerSystem?
            <TimerSystemCard setIsTimerSystem={setIsTimerSystem}/>
            :
            <TimerSystemExtraHour setIsTimerSystem={setIsTimerSystem}/>}
          </div>
        </div>
      </section>
    </Styled.TimeCardContainer>
  );
};

export default TimeCardPage;
