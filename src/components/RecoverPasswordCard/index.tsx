import { Button } from "@mui/material";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import Api from "../../services/api";
import * as Style from "./style";

const RecoverPassword = () => {

    const { param } = useParams();
    const [ password, setPassword] = useState<string>("")
    const [ confirmPassword, setConfirmPassword] = useState<string>("")
    const { login } = useAuth()


    const handleConfirm = () => {

        if(password !== "" && confirmPassword !== ""){
            if(password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!:;/\|.()])[0-9a-zA-Z$*&@#!:;/\|.()]{8,}$/)){
                if(password === confirmPassword){
                    toast.success("Nova senha cadastrada");
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
        Api.patch(`/auth/first-access/${param}`, data)
            .then((res)=>{
                toast.success("Conta validada")
                login({token: res.data.token, user: res.data.user, isChecked: true})
                console.log(res)
            })
            .catch((err)=>{
                toast.error("Erro ao validar conta")
                console.log(err)
            })
    }
    
    return (
            <Style.RecoverPasswordContainer>
                <Style.RecoverPasswordCard>
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