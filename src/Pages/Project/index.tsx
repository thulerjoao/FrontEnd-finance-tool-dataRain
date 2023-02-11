import Header from "../../components/Header"
import * as Style from "./style"
import TopBar from "../../components/TopBar"
import ProjectCard from "../../components/ProjectCard"


const Project = () =>{
    return(
        <Style.ProjectContainer>
            <TopBar />
            <ProjectCard/>
        </Style.ProjectContainer>
    )
}

export default Project