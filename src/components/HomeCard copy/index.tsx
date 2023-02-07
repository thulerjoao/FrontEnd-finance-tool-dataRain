import { useNavigate } from "react-router-dom";
import * as Style from "./style"
import { useUsers } from "../../contexts/userContext";
import { useAuth } from "../../contexts/auth";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Api from "../../services/api";
import { toast } from "react-hot-toast";

const ExtraHourCard = () => {

    useEffect(()=> handleGetRequest(),[])

    const [ requests, setRequests ] = useState<any>()

    const handleGetRequest = () => {
      Api.get(`/request-send-overtime`)
        .then((res)=>setRequests(res.data))
        .catch(()=>{})
    }

    const handleAprove = (id: string) =>{
      Api.post(`/request-send-overtime/approve`,
      {
        requestSendOvertimeId: id
      }
      )
      .then(()=>{
        handleGetRequest();
        toast.success("Feito")
      })
      .catch(()=>toast.error("Não foi possível concluir"))
    }

    const handleDesaprove = (id: string) =>{
      Api.post(`/request-send-overtime/reprove`,
      {
        requestSendOvertimeId: id
      }
      )
      .then(()=>{
        handleGetRequest();
        toast.success("Feito")
      })
      .catch(()=>toast.error("Não foi possível concluir"))
    }
  
  return (
          <Style.ExtraHourContainer>
              <section className="section01">
                <h2>Pedidos de hora extra</h2>            
              </section>
              <section className="section02">
                {requests && requests.map((element:any)=>{
                return( 
                <section>
                  <div>
                    <h2>Colaborador</h2>
                    <h2>Projeto</h2>
                    <h2>Cliente</h2>
                  </div>
                  <div>
                    <p>{element.user.name}</p>
                    <p>{element.project.name}</p>
                    <p>{element.client.companyName}</p>
                  </div>
                  <div>
                    <p className="explanation">{element.requestDescription}</p>
                  </div>
                  <div className="botton">
                    <Button  variant="contained" className="buttonEnter" onClick={()=>handleAprove(element.requestSendOvertimeId)}>Aprovar pedido</Button>
                    <Button  variant="contained" className="buttonEnter reprove" onClick={()=>handleDesaprove(element.requestSendOvertimeId)}>Negar pedido</Button>
                  </div>
                </section>
                )}
                )}
              </section>
          </Style.ExtraHourContainer>  
  );
};

export default ExtraHourCard;
