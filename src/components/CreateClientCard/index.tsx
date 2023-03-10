import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Api from "../../services/api";
import * as Style from "./style";
import TopBar from "../TopBar";
import { Dispatch, SetStateAction } from "react";

interface ChangeProp {
  change: boolean,
  setChange: Dispatch<SetStateAction<boolean>>
}

const CreateClientCard = ({change, setChange}:ChangeProp) => {
  const navigate = useNavigate();

  interface CreateClientData {
    companyName: string;
    email: string;
    phone: string;
    mainContact: string;
    technicalContact?: string;
    technicalContactPhone?: string;
    technicalContactEmail?: string;
  }

  const registerSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    phone: yup
      .string()
      .max(11, "Campo telefone pode conter apenas 11 dígitos")
      .required("Telefone obrigatório"),
    companyName: yup.string().required("Nome obrigatório"),
    mainContact: yup.string().required("Preencha o campo contato principal"),
    technicalContact: yup.string(),
    technicalContactPhone: yup.string().max(11, "Máximo 11 dígitos"),
    technicalContactEmail: yup.string().email("Email inválido"),
  });

  const handleErrorMessage = () => {
    if (errors.companyName) {
      toast.error(`${errors.companyName?.message}`);
      clearErrors();
    } else if (errors.email) {
      toast.error(`${errors.email?.message}`);
      clearErrors();
    } else if (errors.phone) {
      toast.error(`${errors.phone?.message}`);
      clearErrors();
    } else if (errors.mainContact) {
      toast.error(`${errors.mainContact?.message}`);
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
  } = useForm<CreateClientData>({ resolver: yupResolver(registerSchema) });

  const handleRegister = (data: CreateClientData) => {
    if (
      data.companyName !== "" ||
      data.email !== "" ||
      data.phone !== "" ||
      data.mainContact !== ""
    ) {
      Api.post("/client", data)
        .then((res) => {
          toast.success("Cliente criado com sucesso");
        })
        .catch((error) => {
          toast.error("Erro ao realizar cadastro");
        });
    }
  };

  return (
    <Style.CreateClientContainer>
        <Style.CreateClientCard onSubmit={handleSubmit(handleRegister)}>
          <Style.CreateUserTitleContainer>
          <div onClick={()=>setChange(true)}>
            <h1 className="h1title" >Usuário</h1>
          </div>
          <div className="active" >
            <h1 className="h1title">Cliente</h1>
          </div>
          </Style.CreateUserTitleContainer>
          <Style.TopContainer>
            <h2>- Dados do novo cliente -</h2>
          </Style.TopContainer>
          <Style.InputsContainer>
            <Style.InputLabel>Email</Style.InputLabel>
            <Style.Inputs type="email" {...register("email")} />
            <Style.InputLabel>Telefone</Style.InputLabel>
            <Style.Inputs type="tel" {...register("phone")} />
            <Style.InputLabel>Nome do cliente</Style.InputLabel>
            <Style.Inputs type="text" {...register("companyName")} />
            <Style.InputLabel>Nome do contato principal</Style.InputLabel>
            <Style.Inputs type="text" {...register("mainContact")} />
            <Style.InputLabel>Nome do contato técnico</Style.InputLabel>
            <Style.Inputs type="text" {...register("technicalContact")} />
            <Style.InputLabel>Telefone do contato técnico</Style.InputLabel>
            <Style.Inputs type="tel" {...register("technicalContactPhone")} />
            <Style.InputLabel>E-mail do contato técnico</Style.InputLabel>
            <Style.Inputs type="email" {...register("technicalContactEmail")} />
          </Style.InputsContainer>
          <Style.ButtonsContainer>
            {/* <Button
              variant="contained"
              className="buttonCancel"
              onClick={() => navigate("/home")}
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
        </Style.CreateClientCard>
      </Style.CreateClientContainer>
  );
};

export default CreateClientCard;
