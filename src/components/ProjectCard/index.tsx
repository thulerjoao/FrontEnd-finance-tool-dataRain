import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { ErrorIcon } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Api from "../../services/api"
import * as Style from "./style"
import userDefault from "../../assets/images/userDefault.png";
import { useUsers } from "../../contexts/userContext"
import logo from "../../assets/images/default.png"


const ProjectCard = () =>{

    const [ allClients, setAllClients ] = useState<any>([])
    const [ clientId, setClientId ] = useState<string>()
    const [ project, setProject ] = useState<any>()
    const [ client, setClient ] = useState<any>(undefined)
    const [ isManager, setIsManager ] = useState<any>(undefined)
    const { allUsers, budgets, handleGetUsers, handleGetBudgets } = useUsers()

    const teste = ['','','','','','','','','','','','','']

    // filtro para buscar o manager
  const avaliableMannager = allUsers.filter(
    (element) => element.roleName === "manager"
  );

  //filtro para buscar os usuários
  const avaliableUsers = allUsers.filter(
    (element) => element.roleName === "professional services"
  );

  console.log(avaliableUsers);
  
    
    const handleProject = ()=>{
        const projectId = sessionStorage.getItem("projectId")
        Api.get(`/project/${projectId}`)
            .then((res)=>{
                setProject(res.data)
                if(res.data.client){
                    setClient(res.data.client)
                    setIsManager(res.data.containsManager)
                }
            })
            .catch((err)=>{()=>{}})
        }

    const handleAllClients = () =>{
        Api.get(`/client`)
        .then((res)=>{
            setAllClients(res.data)
            setClientId(res.data[0].id)
        })
        .catch((err)=>{})
    }

    useEffect(()=>{
        handleAllClients();
        handleProject();
    },[])

    const navigate = useNavigate()

    return(
        <Style.ProjectContainer>
            <section>
            <Style.ProjectPageReturn>
                    {" "}
                    <Style.BackIcon onClick={() => navigate("/projetos")} />{" "}
                </Style.ProjectPageReturn>
                {project &&
                <div className="header">
                    <div className="top">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <p>{`Valor total por hora - R$: ${project.summedTimeValueOfAllUsers.toFixed(2)}`}</p>
                    </div>
                    {client !== undefined &&
                    <div className="top">
                        <h2>{project.client.companyName}</h2>
                        <p>{project.client.email}</p>
                    </div>}
                </div>
                }
                {client === undefined ? 
                <div className="newClient">
                    <h2>Para gerenciar a equipe, adicione um cliente ao projeto</h2>
                    <select onChange={(e)=>setClientId(e.target.value)}>
                        {
                            allClients && allClients.map((element: any, index:number)=>{
                                return(
                                    <option key={index} value={element.id}>{element.companyName}</option>
                                )
                            })
                        }
                        
                    </select>
                    <Button
                        type="submit"
                        variant="contained"
                        className="buttonSave"
                        onClick={()=> {}}
                        >
                        Salvar
                    </Button>
                </div>:
                <div className="bottom">
                        <div className="card newUser">
                            <img src={userDefault}></img>
                            <p>{isManager? "Adicionar colaborador +":'Adicionar Manager +'}</p>
                            <select>
                                {
                                    avaliableMannager.map((element)=>{
                                        return(
                                            <option>{element.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <Button  variant="contained" className="registe">
                                Cadastrar
                            </Button>
                        </div>
                        {  project.users.map((element: any, index:number)=>{
                            return(
                                <div className="card oldUser"key={index}>
                                   <div>
                                        <p className={element.user.roleName === "manager"? "manager": ""}>{element.user.roleName.toUpperCase()}</p>
                                        <Style.trash/>{" "}
                                   </div>
                                   <img src={
                                        true === null? logo :
                                        `https://back-btc-finance-tool-production-0df0.up.railway.app${element.user.imageUrl}`
                                        }>
                                    </img>
                                   <h3>{element.user.name}</h3>
                                   <p className="bottomInfo">{element.user.position}</p>
                                   <p className="bottomInfo">{`Valor/hr - R$: ${element.valuePerUserHour.toFixed(2)}`}</p>
                                </div>
                            )
                        })

                        }
                </div>
                }
            </section>
        </Style.ProjectContainer>
    )
}

export default ProjectCard