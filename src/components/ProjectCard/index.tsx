import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { ErrorIcon, toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Api from "../../services/api"
import * as Style from "./style"
import userDefault from "../../assets/images/userDefault.png";
import { useUsers } from "../../contexts/userContext"
import logo from "../../assets/images/default.png"
import NewUserSettings from "../ModalAddUserProject"



const ProjectCard = () =>{

    const [ allClients, setAllClients ] = useState<any>([])
    const [ clientId, setClientId ] = useState<string>()
    const [ newUserId, setNewUserId ] = useState<string>()
    const [ project, setProject ] = useState<any>()
    const [ client, setClient ] = useState<any>(undefined)
    const [ isManager, setIsManager ] = useState<any>(undefined)
    const [ isModalOpen, setIsModalOpen] = useState<boolean>(false)
  
    
    const hegisterNewClient = () =>{
        Api.post("/project/add-client",
        {
            clientId: clientId,
            projectId: project.id
        }
        )
        .then(()=>{
            handleGetProject()
            toast.success("Cliente adicionado")
        })
        .catch(()=>toast.error("Falha ao adicionar cliente"))
    }
    
    const handleGetProject = ()=>{
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

    const handleGetAllClients = () =>{
        Api.get(`/client`)
        .then((res)=>{
            setAllClients(res.data)
            setClientId(res.data[0].id)
        })
        .catch((err)=>{})
    }

    useEffect(()=>{
        handleGetAllClients();
        handleGetProject();
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
                        variant="contained"
                        className="buttonSave"
                        onClick={()=> {hegisterNewClient()}}
                        >
                        Cadastrar
                    </Button>
                </div>:
                <div className="bottom">
                        <div className="card newUser" onClick={()=>setIsModalOpen(true)}>
                            <img src={userDefault}></img>
                            <p>{isManager? "Adicionar colaborador +":'Adicionar Manager +'}</p>
                        </div>
                        {  project.users.map((element: any, index:number)=>{
                            return(
                                <div className="card oldUser"key={index}>
                                   <div>
                                        <p className={element.user.roleName === "manager"? "manager": ""}>{element.user.roleName.toUpperCase()}</p>
                                        <Style.trash/>{" "}
                                   </div>
                                   <img src={
                                        element.user.imageUrl === null? logo :
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
            <NewUserSettings
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    project={project}
                    isManager={isManager}
                    handleGetProject={handleGetProject}
                  /> 
        </Style.ProjectContainer>
    )
}

export default ProjectCard