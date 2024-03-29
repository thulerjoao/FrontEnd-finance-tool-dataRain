import * as Style from "./style";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useState } from "react";
import moment from "moment";
import { Button } from "@mui/material";
import AskForHour from "../ModalAskForHour";
import ConfirmTime from "../ModalConfirmTime";
import { useProject } from "../../contexts/projectContext";
import Api from "../../services/api";
import { ExtraHour, ExtraHourStatus } from "../../types/interface";
import { toast } from "react-hot-toast";

interface TimerSystemProps {
  setIsTimerSystem: Dispatch<SetStateAction<boolean>>;
  projectId: string;
  handleProject: (prop: string) => void;
  isExtraHour: boolean;
  extraHour: ExtraHour[];
}

const TimerSystemCard = ({
  setIsTimerSystem,
  projectId,
  handleProject,
  isExtraHour,
  extraHour,
}: TimerSystemProps) => {
  const {
    projects,
    projectHours,
    handleGetHours,
    projectExtraHours,
    handleGetExtraHours,
  } = useProject();
  // const [ projectId, setProjectId ] = useState<string>(projects[0].id)

  const [time, setTime] = useState(moment().format("HH:mm:ss"));
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [extraHourId, setExtraHourId] = useState<string>("");

  const handleExtraHourId = () => {
    const today = moment(new Date()).format("DD/MM/YYYY");
    const object =
      extraHour.length > 0
        ? extraHour.filter((element) => element.dateToSendTime === today)
        : [{ id: "" }];
    setExtraHourId(object[0].id);
  };

  useEffect(() => {
    handleExtraHourId();
  }, [extraHour]);

  const handleInterval = () => {
    const intervalId = setInterval(() => {
      setTime(moment().format("HH:mm:ss"));
    }, 1000);
    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    handleInterval();
  }, []);

  const handleRegisteOvertime = () => {
    Api.post(`/overtime/user`, {
      requestSendOvertimeId: extraHourId,
    }).then(() => {
      handleGetExtraHours(projectId);
    });
  };

  const getCurrentDate = (): string => {
    const date = new Date();
    const options: any = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("pt-BR", options);
  };

  const firstUp = (prop: string) => {
    return prop.charAt(0).toUpperCase() + prop.slice(1);
  };

  const handleChangeProject = (projectId: string) => {
    handleProject(projectId);
    handleGetHours(projectId);
    handleGetExtraHours(projectId)
  };

  const handleExtraHourOn = () => {
    setActive(!active);
  };
 
  

  return (
    <Style.TimeCardContainer>
      <section className="section01">
        <h2>Sistema de ponto</h2>
      </section>
      <section className="section02">
        <div className="mainCard">
          <div className="topPart">
            <select
              value={projectId}
              onChange={(e) => {
                handleChangeProject(e.target.value);
              }}
            >
              {projects &&
                projects.map((element) => {
                  return <option key={element.id} value={element.id}>{element.name}</option>;
                })}
            </select>
            {isExtraHour && (
              <p className="extraAlert">
                ATENÇÃO: Lançamento de hora extra liberado para o dia de hoje
              </p>
            )}
          </div>
          <span className="machine">
            <div className="screen">
              <h2>{time}</h2>
              <h3>{firstUp(getCurrentDate())}</h3>
            </div>
            <p className="topTitle">{!active ?"Hora ordinária": "Hora extra"}</p>
            {active ? 
            projectExtraHours && (
              <div className="cardSpace">
                {projectExtraHours.date && (
                  <div className="card title">
                    <p>{projectHours.date}</p>
                  </div>
                )}
                {projectExtraHours.exit && (
                  <div className="card">
                    <p>{`Fim hora extra - ${projectExtraHours.exit.slice(0,5)}`}</p>
                  </div>
                )}
                {projectExtraHours.entry && (
                  <div className="card lastOne">
                    <p>{`Início hora extra - ${projectExtraHours.entry.slice(0,5)}`}</p>
                  </div>
                )}
              </div>
            ) : 
            (
              projectHours && (
                <div className="cardSpace">
                  {projectHours.date && (
                    <div className="card title">
                      <p>{projectHours.date}</p>
                    </div>
                  )}
                  {projectHours.exit && (
                    <div className="card">
                      <p>{`Fim expediente - ${projectHours.exit.slice(0, 5)}`}</p>
                    </div>
                  )}
                  {projectHours.backFromTheBreak && (
                    <div className="card">
                      <p>{`Volta do almoço - ${projectHours.backFromTheBreak.slice(0,5)}`}</p>
                    </div>
                  )}
                  {projectHours.exitToBreak && (
                    <div className="card">
                      <p>{`Saida para alomoço - ${projectHours.exitToBreak.slice(0,5)}`}</p>
                    </div>
                  )}
                  {projectHours.entry && (
                    <div className="card lastOne">
                      <p>{`Início expediente - ${projectHours.entry.slice(0,5)}`}</p>
                    </div>
                  )}
                </div>
              )
            )}
            {isExtraHour && (
              <div
                className={`selectHourType animate__animated animate__animated animate__pulse animate__delay-0.5s animate__delay-0.5s ${
                  active && "on"
                }`}
                onClick={() => handleExtraHourOn()}
              >
                <p className={`${active && "on"}`}>HORA EXTRA</p>
              </div>
            )}
          </span>
          <span className="buttons">
            <Button
              variant="contained"
              className="buttonEnter "
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Marcar Ponto
            </Button>
            <Button
              variant="contained"
              className="buttonEnter extra"
              onClick={() => {
                setIsTimerSystem(false);
              }}
            >
              Hora extra
            </Button>
          </span>
        </div>
      </section>
      <ConfirmTime
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        projectId={projectId}
        extraHourId={extraHourId}
        active={active}
      />
    </Style.TimeCardContainer>
  );
};

export default TimerSystemCard;
