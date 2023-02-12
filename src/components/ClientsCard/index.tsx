import { useEffect, useState } from "react";
import Api from "../../services/api";
import ClientCard from "../ClientCard";
import * as Style from "./style"


const teste = ['','','','','','','','','','','','','']


const ClientsCard = () => {

  const [ clients, setClients ] = useState<any>()

  useEffect(()=>{getAllClients()},[])

  const getAllClients = () =>{
    Api.get("/client")
    .then((res)=>{
      setClients(res.data)
    })
    .catch((err)=>{})
  }

  const phoneMask = (prop:string) => {
    let value = prop.toString()
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }


  return (
          <Style.ClientsContainer>
              <section className="section01">
                <h2>Clientes</h2>        
              </section>
              <section className="section02">
                  {clients && clients.map((element:any, index:number)=>{
                  return(
                    <ClientCard element={element}/> 
                  )})
                  }
              </section>  
          </Style.ClientsContainer>  
  );
};

export default ClientsCard;
