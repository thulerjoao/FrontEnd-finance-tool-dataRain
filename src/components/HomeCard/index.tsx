import { useNavigate } from "react-router-dom";
import * as Style from "./style"
import { useUsers } from "../../contexts/userContext";
import { useAuth } from "../../contexts/auth";
import { useEffect } from "react";

interface SearchProp {
  search: string
}

const HomeCard = ({search}: SearchProp) => {

  const { budgets, handleGetBudgets } = useUsers()
  const { userStorage } = useAuth()
  
  const getByCompany = budgets? budgets.filter((element: any)=>element.client.companyName.toUpperCase().includes(search.toLocaleUpperCase())) : []
  const getByName = budgets? budgets.filter((element: any)=>element.client.primaryContactName.toUpperCase().includes(search.toLocaleUpperCase())) : []

  const list = search.length > 0 ? getByCompany[0] ? getByCompany : getByName[0] ? getByName : [] : budgets

  const forms = list && list.slice(0).reverse();

  useEffect(()=> handleGetBudgets() ,[])

  const navigate = useNavigate()

  const handleStatus = (prop:string) =>{
    if(prop === "request"){
      return "Aguardando revisão"
    }else if(prop === "review"){
      return "Esperando aprovação"
    }else if( prop === "approved"){
      return "Orçamento concluído" 
    }else{
      return "erro"
    }
  }

  const firstUp = (prop: string) =>{
    return(prop.charAt(0).toUpperCase() + prop.slice(1))
  }
  
  
  return (
          <Style.HomeContainer>
              <section className="section01">
                <h2>Formulários e Orçamentos</h2>
                <section>
                  <div>
                    <p>Contato</p>
                  </div>
                  <div>
                    <p className="company">Empresa</p>
                  </div>
                  <div>
                    <p className="date">Data de criação</p>
                  </div>
                  <div>
                    <p className="last">Última Edição</p>
                  </div>
                  {userStorage.role.name.toUpperCase() =="ADMIN" && <div>
                    <p>Status</p>
                  </div>}
                </section>           
              </section>
              <section className="section02">
                {forms && forms.map((element: any) => {
                  return(
                    <section key={element.id} onClick={()=> {
                      sessionStorage.setItem("clientId", element.id)
                      navigate("/budget")
                    }}>
                      <div>
                        <p>{firstUp(element.client.primaryContactName)}</p>
                      </div>
                      <div>
                        <p>{firstUp(element.client.companyName)}</p>
                      </div>
                      <div>
                        <p>{element.createdAt}</p>
                      </div>
                      <div>
                        <p>{element.updatedAt}</p>
                      </div>
                      {userStorage.role.name.toUpperCase() =="ADMIN" && <div> 
                        <p className={element.status}>{handleStatus(element.status)}</p>
                      </div>}
                    </section>
                  )
                })}
              </section>
          </Style.HomeContainer>  
  );
};

export default HomeCard;
