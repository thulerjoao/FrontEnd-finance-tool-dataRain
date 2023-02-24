import { Button } from "@mui/material";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import Api from "../../services/api";
import * as Style from "./style";

interface modelProp {
    prop: string
  }

const RecoverPassword = ({prop}:modelProp) => {

    const { param } = useParams();
    const [ password, setPassword] = useState<string>("")
    const [ confirmPassword, setConfirmPassword] = useState<string>("")
    const { login } = useAuth()
    const navigate = useNavigate()


    const handleConfirm = () => {

        if(password !== "" && confirmPassword !== ""){
            if(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/\|.()])[0-9a-zA-Z$*&@#!:;/\|.()]{8,}$/)){
                if(password === confirmPassword){
                    handleNewPassword();
                }else{toast.error("As senhas devem coincidir")}
            }else{toast.error("A senha deve conter um caracter especial, um número e ao menos uma letra maiúscula")}
        }else{toast.error("Preencha todos os campos")}
    }

    const handleNewPassword = () =>{
        const data= {
            password: password,
            confirmPassword: confirmPassword
        }
        {prop === "new"?
            Api.patch(`/auth/first-access/${param}`, data)
                .then((res)=>{
                    toast.success("Conta validada")
                    login({token: res.data.token, user: res.data.user, isChecked: true})
                })
                .catch((err)=>{toast.error("Erro ao registrar nova senha")})
        :
            Api.patch(`/auth/password-recovery/${param}`, data)
                .then((res)=>{
                    toast.success("Senha redefinida")
                    login({token: res.data.token, user: res.data.user, isChecked: true})
                })
                .catch(()=>{
                    toast.error("Erro ao atualizar senha")
                })
            }
    }
    
    return (
            <Style.RecoverPasswordContainer>
                <Style.RecoverPasswordCard>
                {prop === "recover" && <Style.BackArrow onClick={()=> navigate("/")} />}
                    <h2>Cadastre uma nova senha</h2>
                    <div>
                        <p>Nova senha</p>
                        <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <p>Confirmar nova senha</p>
                        <input type="password" onChange={(e)=> setConfirmPassword(e.target.value)}/>
                    </div>
                    <section>
                        <Button variant="contained" className="buttonEnter" onClick={()=>handleConfirm()}>Enviar</Button>
                    </section>
                </Style.RecoverPasswordCard>
            </Style.RecoverPasswordContainer>
    )
}

export default RecoverPassword