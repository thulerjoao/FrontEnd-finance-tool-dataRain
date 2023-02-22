import * as Style from "./style"
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Api from "../../services/api";
import { toast } from "react-hot-toast";

const ExtraHourCard = () => {

  const [ requests, setRequests ] = useState<any>(undefined)
  const [ test, setTest ] = useState <boolean>(true)

    useEffect(()=> handleGetRequest(),[])
    useEffect(()=> {
      setTimeout(() => {
        handleGetRequest()
      }, 2000);
    },[test])

    const handleGetRequest = () => {
      Api.get(`/request-send-overtime`)
        .then((res)=>{
          setRequests(res.data);
          setTest(!test)
        })
        .catch(()=>{setRequests(undefined)})
    }

    const handleAprove = (id: string) =>{
      Api.post(`/request-send-overtime/approve`,
      {
        requestSendOvertimeId: id
      }
      )
      .then(()=>{
        handleGetRequest();
        setTest(!test);
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
        setTest(!test);
        toast.success("Feito")
      })
      .catch(()=>toast.error("Não foi possível concluir"))
    }

    const firstUp = (prop: string) =>{
      return(prop.charAt(0).toUpperCase() + prop.slice(1))
  }
  
  return (
          <Style.ExtraHourContainer>
              <section className="section01">
                <h2>Pedidos de hora extra</h2>            
              </section>
              {requests !== undefined && requests !== 0? <section className="section02">
                {requests && requests.map((element:any, index:number)=>{
                return( 
                <section key={index}>
                  <div>
                    <h2>Colaborador</h2>
                    <h2>Projeto</h2>
                    <h2>Cliente</h2>
                  </div>
                  <div>
                    <p>{firstUp(element.user.name)}</p>
                    <p>{firstUp(element.project.name)}</p>
                    <p>{firstUp(element.client.companyName)}</p>
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
              :
                  <section className="section03">
                    <p>Não há pedidos de hora extra</p>
                  </section>
              }
          </Style.ExtraHourContainer>  
  );
};

export default ExtraHourCard;
