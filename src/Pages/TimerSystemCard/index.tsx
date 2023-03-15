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

  const { projects, handleGetHours } = useProject()
  const [ projectId, setProjectId ] = useState<string>(projects[0].id)

  const [ isTimerSystem, setIsTimerSystem ] = useState<boolean>(true)
  
  const comertialDate = (moment(new Date()).format('DD/MM/YYYY'));
  const [ extraHour, setExtraHour ] = useState<ExtraHour[]>([])
  const [ isExtraHour, setIsExtraHour ] = useState<boolean>(false)
  
  
  useEffect(()=>{
    extraHour.map((element)=>{ 
      if(element.dateToSendTime === comertialDate && element.status === "approved") setIsExtraHour(true)
    })
  },[extraHour])

  useEffect(()=>{
    Api.get(`/request-send-overtime/user/status/${projectId}`)
    .then((res)=>{setExtraHour(res.data);
  })
},[])

  const handleProject = (projectId: string) =>{
    setProjectId(projectId);
    Api.get(`/request-send-overtime/user/status/${projectId}`)
    .then((res)=>{setExtraHour(res.data);
      console.log(res.data);
    })
    .catch(()=>setExtraHour([]))
    handleGetHours(projectId)
  }
  

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
              handleProject={handleProject}
              isExtraHour={isExtraHour}
            />
            :
            <TimerSystemExtraHour 
              setIsTimerSystem={setIsTimerSystem} 
              projectId={projectId}
              handleProject={handleProject}
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
