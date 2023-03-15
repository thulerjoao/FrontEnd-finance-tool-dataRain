import { useEffect, useState } from "react";
import { useClient } from "../../contexts/clientContext";
import Api from "../../services/api";
import ClientCard from "../ClientCard";
import * as Style from "./style"



const ClientsCard = () => {

  const { clients } = useClient()

  return (
          <Style.ClientsContainer>
              <section className="section01">
                <h2>Clientes</h2>        
              </section>
              <section className="section02">
                <span>
                  {clients && clients.map((element:any, index:number)=>{
                  return(
                    <ClientCard element={element} key={index}/> 
                  )})
                  }
                </span>
              </section>  
          </Style.ClientsContainer>  
  );
};

export default ClientsCard;
