import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useQuestions } from "../../contexts/questions";

import * as Style from "./style"
import { useTeam } from "../../contexts/teamContext";
import toast from "react-hot-toast";
import Api from "../../services/api";
import DeleteQuestion from "../ModalDelete";

const QuestionCard = (param:{element:any, count:number}) => {

  const element = param.element
  const index = param.count
  
  
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

  //updateOldQuestion states and functions:

  const ordernedList = questions && questions.sort(function(a:any,b:any){
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
  })

  const [ editQuestion, setEditQuestion] = useState<any>(ordernedList)
  const [ fillValue, setFillValue ] = useState<boolean>(true)
  const [ questionIndex, setQuestionIndex ] = useState<number>(0)
  const [ questionId, setQuestionId] = useState<string>("")
  const [ alternativeIndex, setAlternativeIndex ] = useState<number>(0)

  useEffect(()=>{
    setEditQuestion(ordernedList);
  }
    ,[questions])
  useEffect(()=>updateQuestion(),[])

  useEffect(()=>updateQuestion() ,[test])

  const UpdateTitle = (index:number, newTitle:string) =>{
      let newValues = editQuestion
    newValues[index].description = newTitle
    setEditQuestion(newValues)
    setFillValue(false)
  }

  const UpdateAnswer = (newAnswer:string) =>{
    let newValues = editQuestion
    newValues[questionIndex].alternatives[alternativeIndex].description = newAnswer
    setEditQuestion(newValues)
    setFillValue(false)
  }

  const updateTeam = (newTeamId:string) => {
    let newValues = editQuestion
    newValues[questionIndex].alternatives[alternativeIndex].teams[0].id = newTeamId
    setEditQuestion(newValues)
  }

  const updateHours = (newHour:number) =>{
    let newValues = editQuestion
    newValues[questionIndex].alternatives[alternativeIndex].teams[0].workHours = newHour
    setEditQuestion(newValues)
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
    
    const newQuestion:string = editQuestion[index].description;
    Api.patch(`/question/${questionId}`,
    {
      description: newQuestion
    })
      .then(()=>{
        updateQuestion();
        toast.success("Valores atualizados")
      })
      .catch(()=> toast.error("Erro ao atualizar questão"));
    
      // editQuestion[index].alternatives && editQuestion[index].alternatives.map((element:any) => {
      // const answearId:string = element.id
      // const newAnswer:string = element.description
      // const newTeamId:string = element.teams[0].id
      // const newHours:number = element.teams[0].workHours

      //   if(newAnswer !== "" && newHours > 0){
      //     Api.patch(`/alternative/${answearId}`,{
      //       description: newAnswer,
      //       teams: [
      //         {
      //           teamId: newTeamId,
      //           workHours: newHours
      //         }
      //       ]
      //     })
      //     .then(()=>{
      //       updateQuestion();
      //     })
      //     .catch(()=> toast.error("Erro ao atualizar respostas"))
      //   }else{
      //     toast.error("Valores inválidos")
      //   }
      //   })
        }



        const [ catchNewTitle, setCatchNewTitle ] = useState<string>("")
        const [ catchNewTeamId, setCatchNewTeamId ] = useState<string>(firstTeamId)
        const [ catchNewHour, setCatchNewHour ] = useState<number>(0)

       console.log(index);
       
        
  return (
      <Style.QuestionContainer>                  
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
                <input
                onClick={()=>setFillValue(true)}
                onChange={(e)=>{UpdateTitle(index, e.target.value)}}
                className="firstInput"
                placeholder={element.description}
                defaultValue={fillValue? element.description:undefined}
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
                            setFillValue(true)
                          }}
                          onChange={(e)=>{UpdateAnswer(e.target.value)}}
                          key={element1.id} 
                          defaultValue={fillValue?element1.description:undefined}></input>
                        )
                      })}
                      <input placeholder="Nova resposta objetiva" defaultValue={catchNewTitle} className="newAnswer" onChange={(e)=>setCatchNewTitle(e.target.value)}></input>
                    </div>
                    <div className="second">
                      <p>Equipes</p>
                      {element && element.alternatives.map((element2:any, index:number)=>{
                        return(              
                          <select
                          placeholder={element2.teams[0].id}
                          defaultValue={fillValue?element2.teams[0].id:undefined}
                          onChange={(e)=>{updateTeam(e.target.value)}}
                          onClick={()=>{ 
                            setAlternativeIndex(index);
                            setFillValue(false)
                            }
                          }
                          >
                            {team && team.map((element3:any)=>{                       
                              return(
                                <option defaultValue={element3.id} >{element3.name}</option>
                              )
                            })}
                          </select>                         
                        )
                      })}
                          <select className="newTeam" value={catchNewTeamId} onChange={(e)=>setCatchNewTeamId(e.target.value)}>
                            {team && team.map((element3:any)=>{                       
                              return(
                                <option defaultValue={element3.id}>{element3.name}</option>
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
                            onClick={()=>{
                              setAlternativeIndex(index);
                              setFillValue(true)
                            }}
                            onChange={(e)=>{updateHours(e.target.valueAsNumber)}}
                            key={element2.id}
                            placeholder={element2.teams[0].workHours}
                            defaultValue={fillValue? element2.teams[0].workHours: undefined}
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
                        <div onClick={()=> registeAnswer(element.id)}>
                          <Style.plus/>{" "}
                        </div>
                      </section>
                    </div>
                  </div>
              </section>
            </form>
        <DeleteQuestion 
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          questionIndex={questionIndex}
          questionId={questionId}
        />
  </Style.QuestionContainer>  
  );
};

export default QuestionCard;