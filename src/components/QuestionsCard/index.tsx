import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useQuestions } from "../../contexts/questions";

import * as Style from "./style"
import { useTeam } from "../../contexts/teamContext";
import toast from "react-hot-toast";
import Api from "../../services/api";
import DeleteQuestion from "../ModalDelete";
import QuestionCard from "../QuestionCard";

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

  // const UpdateTitle = (index:number, newTitle:string) =>{
  //     let newValues = editQuestions
  //   newValues[index].description = newTitle
  //   setEditQuestions(newValues)
  //   setFillValue(false)
  // }

  // const UpdateAnswer = (newAnswer:string) =>{
  //   let newValues = editQuestions
  //   newValues[questionIndex].alternatives[alternativeIndex].description = newAnswer
  //   setEditQuestions(newValues)
  //   setFillValue(false)
  // }

  // const updateTeam = (newTeamId:string) => {
  //   let newValues = editQuestions
  //   newValues[questionIndex].alternatives[alternativeIndex].teams[0].id = newTeamId
  //   setEditQuestions(newValues)
  // }

  // const updateHours = (newHour:number) =>{
  //   let newValues = editQuestions
  //   newValues[questionIndex].alternatives[alternativeIndex].teams[0].workHours = newHour
  //   setEditQuestions(newValues)
  //   setFillValue(false)

  // }
  
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
              <p className="newAlternative" onClick={()=> handleNewQuestion()}>{newAnswer? "Cadastrar resposta":"Cadastrar questão"}</p>
              </section>
            </section>}
          {editQuestions && editQuestions.map((element:any, index:any)=>{
            return(
              <QuestionCard element={element} count={index} key={index}/>                     
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