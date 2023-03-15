import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAsyncValue, useNavigate } from "react-router-dom";
import * as yup from "yup";
import defaultImage from "../../assets/images/userDefault.png";
import Api from "../../services/api";
import * as Style from "../../components/CreateAccountCard/style";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useActive } from "../../contexts/activePage";
import { usePositionAndFunction } from "../../contexts/positionAndFunction";

interface ChangeProp {
  change: boolean
  setChange: Dispatch<SetStateAction<boolean>>
}

const CreateAccountCard = ({change, setChange}:ChangeProp) => {
  const navigate = useNavigate();
  const { setActive } = useActive()
  const [ billable, setBillable] = useState<boolean>(true)
  const { role, position } = usePositionAndFunction()
  const [ selectedRole, setSelectedRole  ] = useState<string>()
  const [ selectedPosition, setSelectedPosition ] = useState<string>()

  useEffect(()=>{
    setSelectedRole(role[0].id);
    setSelectedPosition(position[0].id)
  }, [])

  console.log({selectedRole, selectedPosition});
  

  interface CreateAccountData {
    name: string;
    email: string;
    position: string;
  }

  const registerSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
  });

  const handleErrorMessage = () => {
    if (errors.name) {
      toast.error(`${errors.name?.message}`);
      clearErrors();
    } else if (errors.email) {
      toast.error(`${errors.email?.message}`);
      clearErrors();
    } else {
      clearErrors;
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<CreateAccountData>({ resolver: yupResolver(registerSchema) });

  const handleRegister = (data: CreateAccountData) => {
    if (data.name !== "" || data.email !== "" || data.position !== "") {
      const dataCreate = {
        name: data.name,
        email: data.email,
        positionId: selectedPosition,
        billable: billable,
        roleId: selectedRole,
      };
      Api.post("/user", dataCreate)
        .then((res) => {
          toast.success("Conferir email");
        })
        .catch((error) => {
          toast.error("Erro ao realizar cadastro");
        });
    } else {
      toast.error("Preencha todos os campos");
    }
  };

  const handleBillable = (prop:string) => {
    if(prop === "sim"){
      setBillable(true)
    }else{
      setBillable(false)
    }
  }

  const firstUp = (prop: string) =>{
    return(prop.charAt(0).toUpperCase() + prop.slice(1))
}

  return (
    <Style.CreateAccountContainer>
      <Style.CreateAccountCard onSubmit={handleSubmit(handleRegister)}>
        <Style.CreateUserTitleContainer >
          <div className="active">
            <h1 className="h1title" >Usuário</h1>
          </div>
          <div onClick={()=>setChange(false)}>
            <h1 className="h1title">Cliente</h1>
          </div>
        </Style.CreateUserTitleContainer>
        <Style.TopContainer>
          <h2>- Dados do novo usuário -</h2>
        </Style.TopContainer>
        <Style.InputsContainer>
          <Style.InputLabel>Nome completo</Style.InputLabel>
          <Style.Inputs type="text" {...register("name")} />
          <Style.InputLabel>Email</Style.InputLabel>
          <Style.Inputs type="text" {...register("email")} />
          {/* <Style.InputLabel>Função</Style.InputLabel> */}
          {/* <Style.Inputs {...register("position")} /> */}
          <section>
          <Style.InputLabel>Função</Style.InputLabel>
            <select onChange={(e) => setSelectedPosition(e.target.value)}>
              {position && position.map((element:any, index:number)=>{
                return(
                  <option key={index} value={element.id}>{firstUp(element.name)}</option>
                )
              })}
            </select>
          <Style.InputLabel>Cargo</Style.InputLabel>
            <select onChange={(e) => setSelectedRole(e.target.value)}>
              {role && role.map((element:any, index:number)=>{
                return(
                  <option key={index} value={element.id}>{firstUp(element.name)}</option>
                )
              })}
            </select>
            <Style.InputLabel>Billable</Style.InputLabel>
            {/* onChange={(e)=>setValue(e.target.value) */}
            <select onChange={(e)=> handleBillable(e.target.value)}>
              <option value={"Sim"} >Sim</option>
              <option value={"Nao"}>Não</option>
            </select>
          </section>
        </Style.InputsContainer>
        <Style.ButtonsContainer>
          {/* <Button
            variant="contained"
            className="buttonCancel"
            onClick={() => {navigate("/home"); setActive("home")}}
          >
            Cancelar
          </Button> */}
          <Button
            type="submit"
            variant="contained"
            className="buttonRegister"
            onClick={() => handleErrorMessage()}
          >
            Cadastrar
          </Button>
        </Style.ButtonsContainer>
      </Style.CreateAccountCard>
    </Style.CreateAccountContainer>
  );
};

export default CreateAccountCard;
