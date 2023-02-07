import { useEffect } from "react";
import { useClient } from "../../contexts/clientContext";
import AsideBar from "../AsideBar";
import ClientCard from "../ClientCard";
import Header from "../Header";
import * as S from "./style";

const ClientsPage = () => {
  const{handleGetClients, client} = useClient()

  useEffect(() => {
    handleGetClients()
  },[])

  return (
    <S.MainSection>
      <Header setSearch={""}/>
      <S.ClientsAllContent>
        <S.ClientsAsidebar>
          <AsideBar />
        </S.ClientsAsidebar>
        <S.ClientsPageContainer>
          <S.ClientsPageHeader>
            <S.ClientsPageTitle>
              Central de Controle - Clientes
            </S.ClientsPageTitle>
          </S.ClientsPageHeader>
          <S.ClientsPageContent>
            {
              client.map((element, index) => {
                return <ClientCard client={element} key={index}/>
              })
            }
          </S.ClientsPageContent>
        </S.ClientsPageContainer>
      </S.ClientsAllContent>
    </S.MainSection>
  );
};

export default ClientsPage;
