import moment from 'moment';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import AsideBar from '../../components/AsideBar';
import Header from '../../components/Header';
import TimerSystemCard from '../../components/TimerSystemCard';
import TimerSystemExtraHour from '../../components/TimerSystemExtraHour';
import { useProject } from '../../contexts/projectContext';
import Api from '../../services/api';
import { ExtraHour } from '../../types/interface';
import * as Styled from './style';


const TimeCardPage = () => {

  const { projects } = useProject()
  const [ projectId, setProjectId ] = useState<string>(projects[0].id)

  const [ isTimerSystem, setIsTimerSystem ] = useState<boolean>(true)
  
  const comertialDate = (moment(new Date()).format('DD/MM/YYYY'));
  const [ extraHour, setExtraHour ] = useState<ExtraHour[]>([])
  const [ isExtraHour, setIsExtraHour ] = useState<boolean>(false)

  console.log(extraHour);
  
  
  useEffect(()=>{
    extraHour.map((element)=> element.dateToSendTime === comertialDate && setIsExtraHour(true))
  },[extraHour])

  useEffect(()=>{
    Api.get(`/request-send-overtime/user/status/${projectId}`)
    .then((res)=>{setExtraHour(res.data);
  })
},[])
  

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
            <TimerSystemCard 
              setIsTimerSystem={setIsTimerSystem}
              projectId={projectId}
              setProjectId={setProjectId}
              isExtraHour={isExtraHour}
            />
            :
            <TimerSystemExtraHour 
              setIsTimerSystem={setIsTimerSystem} 
              projectId={projectId}
              setProjectId={setProjectId}
              isExtraHour={isExtraHour}
              extraHour={extraHour}
            />}
          </div>
        </div>
      </section>
    </Styled.TimeCardContainer>
  );
};

export default TimeCardPage;
