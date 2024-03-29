import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AsideBar from "../../components/AsideBar";
import Header from "../../components/Header";
import TimerSystemCard from "../../components/TimerSystemCard";
import TimerSystemExtraHour from "../../components/TimerSystemExtraHour";
import { useProject } from "../../contexts/projectContext";
import Api from "../../services/api";
import { ExtraHour } from "../../types/interface";
import * as Styled from "./style";

const TimeCardPage = () => {
  const { param } = useParams();
  const initial: boolean = param === "extra" ? false : true;
  const { projects, handleGetHours } = useProject();
  const [projectId, setProjectId] = useState<string>("");

  const [isTimerSystem, setIsTimerSystem] = useState<boolean>(initial);

  const comertialDate = moment(new Date()).format("DD/MM/YYYY");
  const [extraHour, setExtraHour] = useState<ExtraHour[]>([]);
  const [isExtraHour, setIsExtraHour] = useState<boolean>(false);

  const setInitalId = () => {
    setProjectId(projects.length > 0 ? projects[0].id : "");
  };

  useEffect(() => {
    setInitalId();
  }, [projects]);

  useEffect(() => {
    extraHour.map((element) => {
      if (
        element.dateToSendTime === comertialDate &&
        element.status === "approved"
      )
        setIsExtraHour(true);
    });
  }, [extraHour]);

  const handleStatus = () => {
    Api.get(`/request-send-overtime/user/status/${projectId}`).then((res) => {
      setExtraHour(res.data);
    });
  }

  useEffect(() => {
    handleStatus()
  }, [projectId]);

  const handleProject = (projectId: string) => {
    setProjectId(projectId);
    Api.get(`/request-send-overtime/user/status/${projectId}`)
      .then((res) => {
        setExtraHour(res.data);
      })
      .catch(() => setExtraHour([]));
    handleGetHours(projectId);
  };

  return (
    <Styled.TimeCardContainer>
      <Header setSearch={""} />
      <section className="mainSection">
        <div className="mainDiv">
          <div className="AsideBar">
            <AsideBar />
          </div>
          <div className="HomeCard">
            {isTimerSystem ? (
              <TimerSystemCard
                setIsTimerSystem={setIsTimerSystem}
                projectId={projectId}
                handleProject={handleProject}
                extraHour={extraHour}
                isExtraHour={isExtraHour}
              />
            ) : (
              <TimerSystemExtraHour
                setIsTimerSystem={setIsTimerSystem}
                projectId={projectId}
                handleProject={handleProject}
                handleStatus={handleStatus}
                isExtraHour={isExtraHour}
                extraHour={extraHour}
              />
            )}
          </div>
        </div>
      </section>
    </Styled.TimeCardContainer>
  );
};

export default TimeCardPage;
