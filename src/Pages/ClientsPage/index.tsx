import AsideBar from '../../components/AsideBar';
import ClientsCard from '../../components/ClientsCard';
import Header from '../../components/Header';
import TeamsCard from '../../components/TeamsCard';
import * as Styled from './style';


const ClientsPage = () => {

  return (
    <Styled.ClientsContainer>
      <Header setSearch={""}/>
      <section className="mainSection">
        <div className="mainDiv">
          <div className="AsideBar">
            <AsideBar />
          </div>
          <div className="HomeCard">
            <ClientsCard/>
          </div>
        </div>
      </section>
    </Styled.ClientsContainer>
  );
};

export default ClientsPage;
