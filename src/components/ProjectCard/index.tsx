import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Api from "../../services/api"
import * as Style from "./style"
import userDefault from "../../assets/images/userDefault.png";
import logo from "../../assets/images/default.png"
import NewUserSettings from "../ModalAddUserProject"
import DeleteUserProject from "../ModalDeleteUserProject"
import LoadingModal from "../LoadingModal"



const ProjectCard = () =>{

    const [ allClients, setAllClients ] = useState<any>([])
    const [ clientId, setClientId ] = useState<string>()
    const [ deleteUserId, setdeleteUserId ] = useState<string>("")
    const [ project, setProject ] = useState<any>()
    const [ client, setClient ] = useState<any>(undefined)
    const [ isManager, setIsManager ] = useState<any>(undefined)
    const [ isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [ isModalDeleteOpen, setIsModalDeleteOpen] = useState<boolean>(false)
    const [ projectUsers, setProjectUsers ] = useState<any>()
    const [ isLoading, setIsLoading ] = useState<boolean>(false) 
    
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
        .catch(()=>{
            toast.error("Falha ao adicionar cliente")
        })
    }
    
    const handleGetProject = ()=>{
        const projectId = sessionStorage.getItem("projectId")
        setIsLoading(true)
        Api.get(`/project/${projectId}`)
            .then((res)=>{
                setProject(res.data)
                setProjectUsers(res.data.users)
                if(res.data.client){
                    setClient(res.data.client)
                    setIsManager(res.data.containsManager)
                }
                setIsLoading(false)
            })
            .catch((err)=>{setIsLoading(false)})
        }

    const handleGetAllClients = () =>{
        Api.get(`/client`)
        .then((res)=>{
            setAllClients(res.data)
            setClientId(res.data[0].id)
        })
        .catch((err)=>{setAllClients(undefined)})
    }

    useEffect(()=>{
        handleGetAllClients();
        handleGetProject();
    },[])

    const navigate = useNavigate()
    
    const ordernedProjecUsers = projectUsers && projectUsers.sort(function(a:any,b:any){
        return a.user.role.name === "manager" ? -1 : b.user.role.name !== "manager" ? 1 : 0
    })

    console.log(ordernedProjecUsers);
    
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
                        {ordernedProjecUsers &&  ordernedProjecUsers.map((element: any, index:number)=>{
                            return(
                                <div className="card oldUser" key={index}>
                                   <div>
                                        <p className={element.user.role.name === "manager"? "manager": ""}>{element.user.role.name === "manager"? "MANAGER": "P. SERVICES"}</p>
                                        <span onClick={()=>{
                                            setdeleteUserId(element.user.id)
                                            setIsModalDeleteOpen(true)
                                        }}>
                                            <Style.trash/>{" "}
                                        </span>
                                   </div>
                                   <img src={
                                        element.user.imageUrl === null? logo :
                                        `https://back-btc-finance-tool-production.up.railway.app${element.user.imageUrl}`
                                        }>
                                    </img>
                                   <h3>{element.user.name}</h3>
                                   <p className="bottomInfo">{element.user.position.name}</p>
                                   <p className="bottomInfo">{`Valor/hr - R$: ${element.valuePerUserHour.toFixed(2)}`}</p>
                                </div>
                            )
                        })
                        }
                </div>
                }
            </section>
            {isLoading && <LoadingModal/>}
            <DeleteUserProject
                    isModalOpen={isModalDeleteOpen}
                    setIsModalOpen={setIsModalDeleteOpen}
                    project={project}
                    userId={deleteUserId}
                    handleGetProject={handleGetProject}
                  /> 
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