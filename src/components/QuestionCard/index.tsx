import { useEffect, useState } from "react";
import { useQuestions } from "../../contexts/questions";
import * as Style from "./style"
import { useTeam } from "../../contexts/teamContext";
import toast from "react-hot-toast";
import Api from "../../services/api";
import DeleteQuestion from "../ModalDelete";


const QuestionCard = (param:{element:any, count:number, lastIndex:number}) => {

  const lastIndex = param.lastIndex
  const element = param.element
  const index = param.count
  const { updateQuestion } = useQuestions();
  const { team , firstTeamId } = useTeam()

  const [ isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [ data, setData] = useState<any>(element)
  const [ questionIndex, setQuestionIndex ] = useState<number>(0)
  const [ alternativeIndex, setAlternativeIndex ] = useState<number>(0)


  useEffect(()=>updateQuestion(),[])

  const UpdateTitle = (newTitle:string) =>{
    let newValues = data
    newValues.description = newTitle
    setData(newValues)
  }

  const UpdateAnswer = (newAnswer:string) =>{
    let newValues = data
    newValues.alternatives[alternativeIndex].description = newAnswer
    setData(newValues)
  }

  const updateTeam = (newTeamId:string) => {
    let newValues = data
    newValues.alternatives[alternativeIndex].teams[0].id = newTeamId
    setData(newValues)
  }

  const updateHours = (newHour:number) =>{
    let newValues = data
    newValues.alternatives[alternativeIndex].teams[0].workHours = newHour
    setData(newValues)
  }
  

  const deleteAnswear = (answearId:string) =>{
      Api.delete(`/alternative/${answearId}`)
            .then(()=>{
                updateQuestion();
            })
            .catch(()=>toast.error("Erro ao excluir resposta"))
  }

  const updateAlternatives = () => {
    
    const newQuestion:string = data.description;
    Api.patch(`/question/${element.id}`,
    {
      description: newQuestion
    })
      .then(()=>{
        toast.success("Valores atualizados")
      })
      .catch(()=> toast.error("Erro ao atualizar quest??o"));
    
      data.alternatives && data.alternatives.map((element:any) => {

      const answearId:string = element.id
      const newAnswer:string = element.description
      const newTeamId:string = element.teams[0].id
      const newHours:number = element.teams[0].workHours

        if(newAnswer !== "" && newHours > 0){
          Api.patch(`/alternative/${answearId}`,{
            description: newAnswer,
            teams: [
              {
                teamId: newTeamId,
                workHours: newHours
              }
            ]
          })
          .then(()=>{
          })
          .catch(()=> toast.error("Erro ao atualizar respostas"))
        }else{
          toast.error("Valores inv??lidos")
        }
        })
        }

        const [ catchNewTitle, setCatchNewTitle ] = useState<string>("")
        const [ catchNewTeamId, setCatchNewTeamId ] = useState<string>(firstTeamId)
        const [ catchNewHour, setCatchNewHour ] = useState<number>(0)

        const registeAnswer = () => {
          if(catchNewTeamId !== "" && catchNewHour > 0){
            Api.post(`/alternative`,
            {
              description: catchNewTitle,
              questionId: element.id,
              teams: [
                {
                  teamId: catchNewTeamId,
                  workHours: catchNewHour
                }
              ]
            }
            )
              .then(()=>{
                  updateQuestion();
              })
              .catch(()=>toast.error("Erro ao cadastrar nova resposta"))
          }else{
            toast.error("Valores inv??lidos")
          } 
        }
        
  return (
      <Style.QuestionContainer>                  
              <form onSubmit={(e)=>e.preventDefault()} key={index} className="section02">
              {index!== 0 && <Style.arrowUp/>}
              <div className="title">
                <p>{`Quest??o ${index+1}`}</p>
                <div>
                  <p className="updateButton" onClick={()=>{
                    updateAlternatives()
                  }}>Salvar</p>
                  <p className="updateButton delete" onClick={()=>{
                    setIsModalOpen(true);
                    }}>Excluir</p>
                </div>
              </div>
                <input
                onChange={(e)=>{UpdateTitle(e.target.value)}}
                className="firstInput"
                defaultValue={element.description}
                ></input>
              <section onClick={()=>setQuestionIndex(index)}>
                  <div className="cards">
                    <div className="first">
                      <p>Respostas</p>
                      {element && element.alternatives.map((element1:any, index:number)=>{
                        return(
                          <input
                          onClick={()=>{
                            setAlternativeIndex(index);
                          }}
                          onChange={(e)=>{UpdateAnswer(e.target.value)}}
                          key={element1.id} 
                          defaultValue={element1.description}></input>
                        )
                      })}
                      <input placeholder="Nova resposta objetiva" defaultValue={catchNewTitle} className="newAnswer" onChange={(e)=>setCatchNewTitle(e.target.value)}></input>
                    </div>
                    <div className="second">
                      <p>Equipes</p>
                      {element && element.alternatives.map((element2:any, index:number)=>{
                        return(              
                          <select
                          key={index}
                          defaultValue={element2.teams[0].id}
                          onChange={(e)=>{updateTeam(e.target.value)}}
                          onClick={()=>{ 
                            setAlternativeIndex(index);
                            }
                          }
                          >
                            {team && team.map((element3:any, index:number)=>{                       
                              return(
                                <option key={index} value={element3.id} >{element3.name}</option>
                              )
                            })}
                          </select>                         
                        )
                      })}
                          <select className="newTeam" value={catchNewTeamId} onChange={(e)=>setCatchNewTeamId(e.target.value)}>
                            {team && team.map((element3:any, index:number)=>{                       
                              return(
                                <option key={index} value={element3.id}>{element3.name}</option>
                              )
                            })}
                          </select>
                    </div>
                    <div className="third">
                      <p>Horas Totais</p>
                      {element && element.alternatives.map((element2:any, index:number)=>{
                        return(
                          <section>
                            <input 
                            onClick={()=>setAlternativeIndex(index)}
                            onChange={(e)=>{updateHours(e.target.valueAsNumber)}}
                            key={element2.id}
                            placeholder={element2.teams[0].workHours}
                            defaultValue={element2.teams[0].workHours}
                            type="number" 
                            ></input>
                            <div onClick={()=> deleteAnswear(element2.id)}>
                              <Style.trash/>{" "}
                            </div>
                          </section>
                        )
                        
                      })}
                      <section>
                        <input type="number" placeholder="Horas" defaultValue={catchNewHour}className="newHour" onChange={(e)=>setCatchNewHour(e.target.valueAsNumber)}></input>
                        <div onClick={()=> registeAnswer()}>
                          <Style.plus/>{" "}
                        </div>
                      </section>
                    </div>
                  </div>
              </section>
            {lastIndex !== index && <Style.arrowDown/>}
            </form>
        <DeleteQuestion 
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          
          questionId={element.id}
        />
  </Style.QuestionContainer>  
  );
};

export default QuestionCard;