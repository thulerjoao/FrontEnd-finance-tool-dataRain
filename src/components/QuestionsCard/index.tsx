import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useQuestions } from "../../contexts/questions";

import * as Style from "./style"
import { useTeam } from "../../contexts/teamContext";
import toast from "react-hot-toast";
import Api from "../../services/api";
import DeleteQuestion from "../ModalDelete";

const QuestionsCard = () => {
  
  const { questions, updateQuestion } = useQuestions();
  const { team , firstTeamId } = useTeam()
  const [ isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [ test , setTest ] = useState<boolean>(true)

  //newQuestion states and functions:
  const [ newQuestion, setNewQuestion ] = useState<Boolean>(false)
  const [ newAnswer, setNewAnswer ] = useState<Boolean>(false)

  const [ newTitle, setNewTitle ] = useState<string>("") //pergunta em si
  const [ titleId, setTitleId ] = useState<string>("") //id da pergunta depois do post
  // const [ currentAnswer, setCurrentAnswer] = useState<string>("") //resposta em si
  // const [ teamId, setTeamId ] = useState<string>(firstTeamId) // id do time selecionado
  const [ hours, setHours ] = useState<number>(0) //numero de horas necessárias

  if(isNaN(hours)){
    setHours(0)
  }

  const handleNewQuestion = () =>{
      if(newTitle !== ""){
        Api.post("/question", 
          {
            description: newTitle
          }
        )
          .then((res) => {
            setTitleId(res.data.id)
            setNewAnswer(true)
            setNewTitle("")
            setTest(!test);
            toast.success("Pergunta cadastrada")
          })
          .catch((err)=> {
            toast.error("Erro ao cadastrar")
          })
      }else{
        toast.error("A questão deve conter um título")
      }
  }

  // const handleAddAnswear = () =>{
  //   if(titleId !== "" || newTitle !==""){
  //     if(currentAnswer !=="" && teamId !==""){
  //       if(hours > 0){
  //         Api.post("/alternative", 
  //         {
  //           description: currentAnswer,
  //           questionId: titleId,
  //           teams: [
  //             {
  //               teamId: teamId,
  //               workHours: hours
  //             }
  //           ]
  //         }
  //         )
  //           .then(()=>{
  //             setCurrentAnswer("");
  //             toast.success("Resposta cadastrada")
  //           })
  //           .catch((err)=>{toast.error("Erro ao cadastrar resposta")})
  //       }else{
  //         toast.error("Quantidade de horas inválida")
  //       }
  //     }else{
  //       toast.error("Preencha todos os campos")
  //     }
  //   }else{
  //     toast.error("A questão deve conter um título")
  //   }
  // }

  // const handleCancel = () =>{
  //   Api.delete(`/question/${titleId}`)
  //     .then(()=>{
  //         setTest(!test);
  //         setNewTitle("");
  //         setTitleId("")
  //         setNewAnswer(false)
  //         setCurrentAnswer("")
  //         setHours(0)
  //         setTeamId(firstTeamId)
  //         setTest(!test);
  //     })
  //     .catch(()=> toast.error("Erro ao cancelar"))
  // }

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

  //updateOldQuestions states and functions:

  const ordernedList = questions && questions.sort(function(a:any,b:any){
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
  })

  const [ editQuestions, setEditQuestions] = useState<any>(ordernedList)
  const [ fillValue, setFillValue ] = useState<boolean>(true)
  const [ questionIndex, setQuestionIndex ] = useState<number>(0)
  const [ questionId, setQuestionId] = useState<string>("")
  const [ alternativeIndex, setAlternativeIndex ] = useState<number>(0)

  useEffect(()=>{
    setEditQuestions(ordernedList);
  }
    ,[questions])
  useEffect(()=>updateQuestion(),[])

  useEffect(()=>updateQuestion() ,[test])

  const UpdateTitle = (index:number, newTitle:string) =>{
      let newValues = editQuestions
    newValues[index].description = newTitle
    setEditQuestions(newValues)
    setFillValue(false)
  }

  const UpdateAnswer = (newAnswer:string) =>{
    let newValues = editQuestions
    newValues[questionIndex].alternatives[alternativeIndex].description = newAnswer
    setEditQuestions(newValues)
    setFillValue(false)
  }

  const updateTeam = (newTeamId:string) => {
    let newValues = editQuestions
    newValues[questionIndex].alternatives[alternativeIndex].teams[0].id = newTeamId
    setEditQuestions(newValues)
  }

  const updateHours = (newHour:number) =>{
    let newValues = editQuestions
    newValues[questionIndex].alternatives[alternativeIndex].teams[0].workHours = newHour
    setEditQuestions(newValues)
    setFillValue(false)

  }
  
  //////////////////////////

  const deleteAnswear = (answearId:string) =>{
      Api.delete(`/alternative/${answearId}`)
            .then(()=>{
              setTest(!test);
              updateQuestion();
            })
            .catch(()=>toast.error("Erro ao excluir resposta"))
  }

  //////////////////////////

  const registeAnswer = (elementId: string) => {
    if(catchNewTeamId !== "" && catchNewHour > 0){
      Api.post(`/alternative`,
      {
        description: catchNewTitle,
        questionId: elementId,
        teams: [
          {
            teamId: catchNewTeamId,
            workHours: catchNewHour
          }
        ]
      }
      )
        .then(()=>{
          setCatchNewTitle("");
          setCatchNewTeamId(firstTeamId);
          setCatchNewHour(0);
          setTest(!test)
        })
        .catch(()=>toast.error("Erro ao cadastrar nova resposta"))
    }else{
      toast.error("Valores inválidos")
    }
    updateQuestion();
  }

  //////////////////////////////////////////

  const updateAlternatives = (index:number, questionId: string) => {
    
    const newQuestion:string = editQuestions[index].description;
    Api.patch(`/question/${questionId}`,
    {
      description: newQuestion
    })
      .then(()=>{
        updateQuestion();
        toast.success("Valores atualizados")
      })
      .catch(()=> toast.error("Erro ao atualizar questão"));
    
      editQuestions[index].alternatives.map((element:any) => {
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
            updateQuestion();
          })
          .catch(()=> toast.error("Erro ao atualizar respostas"))
        }else{
          toast.error("Valores inválidos")
        }
        })
        }

        const [ catchNewTitle, setCatchNewTitle ] = useState<string>("")
        const [ catchNewTeamId, setCatchNewTeamId ] = useState<string>(firstTeamId)
        const [ catchNewHour, setCatchNewHour ] = useState<number>(0)

       
        
  return (
      <Style.QuestionsContainer>
            <section className="section01">
              <h2>Gerenciamento de questões</h2>
              <p onClick={() => setNewQuestion(!newQuestion)}>{`Adicionar nova questão ${newQuestion? "-" : "+"}`}</p> 
            </section>
          <section className="allQuestions">
          {newQuestion && <section className="section02 newQuestion animate__animated animate__fadeInDownBig animate__delay-0.5s">
              <div className="title">
                <p>{`Título da Questão`}</p>
              </div>
              <section>
                <input value={newTitle} className="firstInput" onChange={(e) => setNewTitle(e.target.value)}></input>
                  {/* {newAnswer && <div className="cards">
                    <div className="first">
                      <p>Adicionar alternativa (Opcional)</p>
                      <input placeholder="Nova resposta objetiva" className="newAnswer" onChange={(e)=> setCurrentAnswer(e.target.value)}></input>
                    </div>
                    <div className="second">
                      <p>Equipes</p>         
                          <select className="newTeam" onChange={(e)=> setTeamId(e.target.value)}>
                            {team && team.map((element3:any)=>{                       
                              return(
                                <option value={element3.id}>{element3.name}</option>
                              )
                            })}
                          </select>
                    </div>
                    <div className="third">
                      <p>Horas Totais</p>  
                      <input type="number" value={hours} placeholder="Horas" className="newHour" onChange={(e)=> setHours(e.target.valueAsNumber)}></input>
                    </div>
                  </div>}
                <p className="newAlternative" onClick={()=> handleNewQuestion()}>{newAnswer? "Cadastrar resposta":"Cadastrar questão"}</p>
              {newAnswer && <div className="finish">
                <p className="newAlternative" onClick={()=> handleFinish()}>Finalizar</p>
                <p className="newAlternative cancel" onClick={()=> handleCancel()}>Cancelar</p>
              </div>} */}
              <p className="newAlternative" onClick={()=> handleNewQuestion()}>{newAnswer? "Cadastrar resposta":"Cadastrar questão"}</p>
              </section>
            </section>}
          {editQuestions && editQuestions.map((element:any, index:any)=>{
            return(                     
              <form onSubmit={(e)=>e.preventDefault()} key={index} className="section02">
              <div className="title">
                <p>{`Questão ${index+1}`}</p>
                <div>
                  <p className="updateButton" onClick={()=>{
                    updateAlternatives(index, element.id)
                  }}>Atualizar</p>
                  <p className="updateButton delete" onClick={()=>{
                    setQuestionId(element.id)
                    setIsModalOpen(true);
                    }}>Excluir</p>
                </div>
              </div>
              <section onClick={()=>setQuestionIndex(index)}>
                <input
                onClick={()=>setFillValue(true)}
                onChange={(e)=>{UpdateTitle(index, e.target.value)}}
                className="firstInput"
                placeholder={element.description}
                value={fillValue? element.description:undefined}
                ></input>
                  <div className="cards">
                    <div className="first">
                      <p>Respostas</p>
                      {element.alternatives.map((element1:any, index:number)=>{
                        return(
                          <input
                          onClick={()=>{
                            setAlternativeIndex(index);
                            setFillValue(true)
                          }}
                          onChange={(e)=>{UpdateAnswer(e.target.value)}}
                          key={element1.id} 
                          defaultValue={fillValue?element1.description:undefined}></input>
                        )
                      })}
                      <input placeholder="Nova resposta objetiva" value={catchNewTitle} className="newAnswer" onChange={(e)=>setCatchNewTitle(e.target.value)}></input>
                    </div>
                    <div className="second">
                      <p>Equipes</p>
                      {element.alternatives.map((element2:any, index:number)=>{
                        return(              
                          <select
                          placeholder={element2.teams[0].id}
                          value={fillValue?element2.teams[0].id:undefined}
                          onChange={(e)=>{updateTeam(e.target.value)}}
                          onClick={()=>{ 
                            setAlternativeIndex(index);
                            setFillValue(false)
                            }
                          }
                          >
                            {team && team.map((element3:any)=>{                       
                              return(
                                <option value={element3.id} >{element3.name}</option>
                              )
                            })}
                          </select>                         
                        )
                      })}
                          <select className="newTeam" value={catchNewTeamId} onChange={(e)=>setCatchNewTeamId(e.target.value)}>
                            {team && team.map((element3:any)=>{                       
                              return(
                                <option value={element3.id}>{element3.name}</option>
                              )
                            })}
                          </select>
                    </div>
                    <div className="third">
                      <p>Horas Totais</p>
                      {element.alternatives.map((element2:any, index:number)=>{
                        return(
                          <section>
                            <input 
                            onClick={()=>{
                              setAlternativeIndex(index);
                              setFillValue(true)
                            }}
                            onChange={(e)=>{updateHours(e.target.valueAsNumber)}}
                            key={element2.id}
                            placeholder={element2.teams[0].workHours}
                            value={fillValue? element2.teams[0].workHours: undefined}
                            type="number" 
                            ></input>
                            <div onClick={()=> deleteAnswear(element2.id)}>
                              <Style.trash/>{" "}
                            </div>
                          </section>
                        )
                        
                      })}
                      <section>
                        <input type="number" placeholder="Horas" value={catchNewHour}className="newHour" onChange={(e)=>setCatchNewHour(e.target.valueAsNumber)}></input>
                        <div onClick={()=> registeAnswer(element.id)}>
                          <Style.plus/>{" "}
                        </div>
                      </section>
                    </div>
                  </div>
              </section>
            </form>
            )
            })}
        </section>
        <DeleteQuestion 
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          questionIndex={questionIndex}
          questionId={questionId}
        />
  </Style.QuestionsContainer>  
  );
};

export default QuestionsCard;