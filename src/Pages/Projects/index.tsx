import AsideBar from '../../components/AsideBar';
import Header from '../../components/Header';
import ProjectsCard from '../../components/ProjectsCard';
import * as Styled from './style';


const ProjectsPage = () => {

  return (
    <Styled.ProjectsContainer>
      <Header setSearch={""}/>
      <section className="mainSection">
        <div className="mainDiv">
          <div className="AsideBar">
            <AsideBar />
          </div>
          <div className="HomeCard">
            <ProjectsCard/>
          </div>
        </div>
      </section>
    </Styled.ProjectsContainer>
  );
};

export default ProjectsPage;
