import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../../contexts/auth";
import { useTeam } from "../../contexts/teamContext";
import Api from "../../services/api";
import TeamCard from "../TeamCard";
import * as Style from "./style";



const TeamsCard = () => {

  const [ openNewTeam, setOpenNewTeam ] = useState<boolean>(false)
  const [ teamName, setTeamName ] = useState<string>()
  const [ teamValue, setTeamValue ] = useState<number>()

  const { team, firstTeamId, handleGetTeam } = useTeam()
  const { userStorage } = useAuth()

  const handleNewTeam = () =>{
    if(teamName !=="" && teamValue !== undefined && teamValue >= 0){
      Api.post("/team",
      {
        name: teamName,
        valuePerHour: teamValue
      })
      .then(()=>{
        toast.success("Equipe cadastrada")
        handleGetTeam()
      })
    }else{
      toast.error("Valores inválidos")
    }
  }

  return (
          <Style.TeamsContainer>
                <section className="section01">
                <h2>Equipes</h2>
                { userStorage.role.name === "admin" &&         
                <div className="newTeam">
                  <p onClick={()=>setOpenNewTeam(!openNewTeam)}>{`Cadastrar nova equipe ${openNewTeam? '-' : '+'}`}</p>
                </div>}
              </section>
              <section className="section02">
                {openNewTeam && <section className="registerTeam newQuestion animate__animated animate__fadeInDownBig animate__delay-0.5s">
                  <div>
                    <p>Nome da equipe</p>
                    <p >Valor por hora</p>
                  </div>
                  <div>
                    <input type="text" defaultValue={teamName} onChange={(e)=> setTeamName(e.target.value)}></input>
                    <input type="number" defaultValue={teamValue} onChange={(e)=> setTeamValue(e.target.valueAsNumber)}></input>
                  </div>
                  <p className="confirmNewTeam" onClick={()=>{handleNewTeam()}}>Cadastrar</p>
                </section>}
                {team && team.map((element:any , index)=>{
                  return(
                    <TeamCard key={index} count={index} team={element}/>
                  )
                  })}

              </section>
          </Style.TeamsContainer>  
  );
};

export default TeamsCard;
