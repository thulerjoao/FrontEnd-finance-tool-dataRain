import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { ErrorIcon } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import Api from "../../services/api"
import * as Style from "./style"

const ProjectCard = () =>{

    const [ allClients, setAllClients ] = useState<any>([])
    const [ clientId, setClientId ] = useState<string>()
    const [ project, setProject ] = useState<any>()
    const [ client, setClient ] = useState<any>(undefined)
    
    const handleProject = ()=>{
        const projectId = sessionStorage.getItem("projectId")
        Api.get(`/project/${projectId}`)
            .then((res)=>{
                setProject(res.data)
                if(res.data.client){
                    setClient(res.data.client)
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
                <div className="top">
                     <h2>{project.name}</h2>
                    <p>{project.description}</p>
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
                <div>Deu certo</div>
                }
            </section>
        </Style.ProjectContainer>
    )
}

export default ProjectCard