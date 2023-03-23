import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Api from "../../services/api";
import * as Style from "./style";
import TopBar from "../TopBar";
import { Dispatch, SetStateAction, useState } from "react";
import { checkIfEmailIsValid } from "../../utils/validateEmail";
import { isEmpty } from "../../utils/validateEmpty";
import { validateValuesClient } from "../../utils/validateClientsValue";
import { CreateClientData } from "../../types/interface";

interface ChangeProp {
  change: boolean;
  setChange: Dispatch<SetStateAction<boolean>>;
}

const CreateClientCard = ({ change, setChange }: ChangeProp) => {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [primaryContactName, setPrimaryContactName] = useState<string>("");
  const [technicalPhone, setTechnicalPhone] = useState<string>("");
  const [technicalEmail, setTechnicalEmail] = useState<string>("");
  const [technicalName, setTechnicalName] = useState<string>("");
  

  const handleCreateClient = () =>{
    const data:CreateClientData = {
      companyName: companyName,
      email: email,
      phone: phone,
      primaryContactName: primaryContactName,
      technicalContact: {
        phone: technicalPhone,
        email: technicalEmail,
        name: technicalName
      }
    }
    
    const newData = validateValuesClient(data)
    if(typeof newData !== "string"){
      Api.post("/client", newData)
      .then(()=>{toast.success("Cliente cadastrado")})  
    }
    
  }

  return (
    <Style.CreateClientContainer>
      <Style.CreateClientCard>
        <Style.CreateUserTitleContainer>
          <div onClick={() => setChange(true)}>
            <h1 className="h1title">Usuário</h1>
          </div>
          <div className="active">
            <h1 className="h1title">Cliente</h1>
          </div>
        </Style.CreateUserTitleContainer>
        <Style.TopContainer>
          <h2>- Dados do novo cliente -</h2>
        </Style.TopContainer>
        <Style.InputsContainer>
          <Style.InputLabel>Email</Style.InputLabel>
          <Style.Inputs
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Style.InputLabel>Telefone</Style.InputLabel>
          <Style.Inputs type="number" onChange={(e) => setPhone(e.target.value)} />
          <Style.InputLabel>Nome do cliente</Style.InputLabel>
          <Style.Inputs
            type="text"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <Style.InputLabel>Nome do contato principal</Style.InputLabel>
          <Style.Inputs
            type="text"
            onChange={(e) => setPrimaryContactName(e.target.value)}
          />
          <Style.InputLabel>Nome do contato técnico</Style.InputLabel>
          <Style.Inputs
            type="text"
            onChange={(e) => setTechnicalName(e.target.value)}
          />
          <Style.InputLabel>Telefone do contato técnico</Style.InputLabel>
          <Style.Inputs
            type="number"
            onChange={(e) => setTechnicalPhone(e.target.value)}
          />
          <Style.InputLabel>E-mail do contato técnico</Style.InputLabel>
          <Style.Inputs
            type="email"
            onChange={(e) => setTechnicalEmail(e.target.value)}
          />
        </Style.InputsContainer>
        <Style.ButtonsContainer>
          {/* <Button
              variant="contained"
              className="buttonCancel"
              onClick={() => navigate("/home")}
            >
              Cancelar
            </Button> */}
          <Button variant="contained" className="buttonRegister" onClick={()=>handleCreateClient()}>
            Cadastrar
          </Button>
        </Style.ButtonsContainer>
      </Style.CreateClientCard>
    </Style.CreateClientContainer>
  );
};

export default CreateClientCard;
