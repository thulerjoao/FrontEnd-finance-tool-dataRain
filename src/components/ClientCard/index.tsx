import { useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import Api from "../../services/api";
import { ClientTypes } from "../../types/interface";
import DeleteClient from "../ModalDeleteClient";
import ClientSettings from "../ModalEditClient";
import * as Style from "./style"


const ClientCard = (param:{element:ClientTypes}) => {

  const client:ClientTypes = param.element

  console.log(client);
  

  const [ open, setOpen ] = useState<boolean>(false)
  const [ isDeleteOpen, setIsDeleteOpen ] = useState<boolean>(false)
  const [ isEditeOpen, setIsEditeOpen ] = useState<boolean>(false)


  const phoneMask = (prop:string) => {
    let value = prop.toString()
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

  const firstUp = (prop: string) =>{
    return(prop.charAt(0).toUpperCase() + prop.slice(1))
}

  return (
          <Style.ClientContainer>
                    <div className="card">
                      <div >
                        <h2>{firstUp(client.companyName)}</h2>
                        <Style.Settings onClick={()=>{setOpen(true)}}/>{' '}
                      </div>
                      <section>
                        <p>{client.email}</p>
                        <p>{phoneMask(client.phone)}</p>
                      </section>
                  </div>
                  {
                      open && 
                        <section className="dropMenu" onMouseLeave={()=>setOpen(false)}>
                            <div onClick={()=>setIsDeleteOpen(true)}>Excluir <BsTrash/> </div>
                            <div onClick={()=>setIsEditeOpen(true)}>Editar <BsPencil/> </div>
                        </section>
                    }
                    <DeleteClient 
                    isModalOpen={isDeleteOpen}
                    setIsModalOpen={setIsDeleteOpen}
                    client={client}
                  />
                  <ClientSettings
                    isModalOpen={isEditeOpen}
                    setIsModalOpen={setIsEditeOpen}
                    client={client}
                  />   
          </Style.ClientContainer>  
  );
};

export default ClientCard;
