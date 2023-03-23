import toast from "react-hot-toast";
import { CreateClientData } from "../types/interface";
import { checkIfEmailIsValid } from "./validateEmail";
import { isEmpty } from "./validateEmpty";


export const validateValuesClient = (data:CreateClientData) => {
    console.log(data);
    const { companyName, email, phone, primaryContactName, technicalContact } = data
    if (!isEmpty(email)) {
      return toast.error("Email não informado");
    }
    if (!checkIfEmailIsValid(email)) {
      return toast.error("Email inválido");
    }
    if (!isEmpty(phone)) {
      return toast.error("Telefone não informado");
    }
    if (phone.length < 8 || phone.length > 16) {
      return toast.error("Telefone inválido")
    }
    if(!isEmpty(companyName)){
      return toast.error("Nome de cliente obrigatório")
    }
    if(companyName.length < 2 || companyName.length > 25){
      return toast.error("Nome de cliente inválido")
    }
    if(!isEmpty(primaryContactName)){
      return toast.error("Contato principal obrigatório")
    }
    if(primaryContactName.length < 2 || primaryContactName.length > 25){
      return toast.error("Contato principal inválido")
    }
    
    if(!isEmpty(technicalContact?.email) && !isEmpty(technicalContact?.name) && !isEmpty(technicalContact?.phone)){
      return {
        companyName: companyName,
        email: email,
        phone: phone,
        primaryContactName: primaryContactName
      }
    }
    if(technicalContact?.phone && technicalContact?.email && technicalContact?.name){
      if(technicalContact.name.length < 2 || technicalContact.name.length > 40){
        return toast.error("Nome de contato técnico inválido")
      }
      if(technicalContact.phone.length < 8 || technicalContact.phone.length > 16){
        return toast.error("Telefone de contato técnico inválido")
      }
      if(!checkIfEmailIsValid(technicalContact.email)){
        return toast.error("Email de contato técnico inválido")
      }
    }else{
      return toast.error("Informe todos os dados do contato técnico")
    }
    return {
      companyName: companyName,
      email: email,
      phone: phone,
      primaryContactName: primaryContactName,
      technicalContact: {
        phone: technicalContact.phone,
        email: technicalContact.email,
        name: technicalContact.name,
      }
    }
  };