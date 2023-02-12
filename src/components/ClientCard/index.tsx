import { useEffect, useState } from "react";
import { BsPencil, BsTrash } from "react-icons/bs";
import Api from "../../services/api";
import * as Style from "./style"


const teste = ['','','','','','','','','','','','','']


const ClientCard = (element:any) => {

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


  return (
          <Style.ClientContainer>
                    <div className="card">
                      <div >
                        <h2>{element.element.companyName}</h2>
                        <Style.Settings onClick={()=>{setOpen(true)}}/>{' '}
                      </div>
                      <section>
                        <p>{element.element.email}</p>
                        <p>{phoneMask(element.element.phone)}</p>
                      </section>
                  </div>
                  {
                      open && 
                        <section className="dropMenu" onMouseLeave={()=>setOpen(false)}>
                            <div onClick={()=>setIsDeleteOpen(true)}>Excluir <BsTrash/> </div>
                            <div onClick={()=>setIsEditeOpen(true)}>Editar <BsPencil/> </div>
                        </section>
                    }   
          </Style.ClientContainer>  
  );
};

export default ClientCard;
