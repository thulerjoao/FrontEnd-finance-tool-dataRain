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
  
  
  //newQuestion states and functions:
  const [ newQuestion, setNewQuestion ] = useState<Boolean>(false)
  const [ newTitle, setNewTitle ] = useState<string>("")
  const [ reRender, setReREnder] = useState<boolean>(true)
  
  // useEffect(()=>{
  //   setReREnder(false);
  //   setTimeout(()=> {
  //     setReREnder(true);
  //     stop
  //   }, 50);
  // },[questions])

  const handleNewQuestion = () =>{
      if(newTitle !== ""){
        Api.post("/question", 
          {
            description: newTitle
          }
        )
          .then((res) => {
            updateQuestion()
            setNewTitle("")
            setNewQuestion(false)
            toast.success("Pergunta cadastrada")
          })
          .catch((err)=> {
            toast.error("Erro ao cadastrar")
          })
      }else{
        toast.error("A questão deve conter um título")
      }
  }

  
  const [ ordernedList, setOrdernedList ] = useState<any>([])
  const lastIndex = ordernedList.length - 1;

  // const ordernedList = questions && questions.sort(function(a:any,b:any){
  //   return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
  // })

  // const handleOrder = () =>{
  //   questions && setOrdernedList(questions.sort(function(a:any,b:any){
  //     return a.position < b.position ? -1 : a.position > b.position ? 1 : 0
  //   }))
  // }
  
  // console.log(ordernedList);
  

  // useEffect(()=>handleOrder(),[questions])
  // useEffect(()=>handleOrder(),[])
       
        
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
              <p className="newAlternative" onClick={()=> handleNewQuestion()}>Cadastrar questão</p>
              </section>
            </section>}
          {reRender && questions.map((element:any, index:number)=>{
            return(
              <QuestionCard 
                element={element} 
                count={index} key={index} 
                lastIndex={lastIndex} 
                setReREnder={setReREnder}
              />                     
            )
            })}
        </section>
  </Style.QuestionsContainer>  
  );
};

export default QuestionsCard;