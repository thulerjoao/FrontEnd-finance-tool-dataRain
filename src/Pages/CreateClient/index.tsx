import * as Styled from "./style";
import TopBar from "../../components/TopBar";
import CreateClientCard from "../../components/CreateClientCard";


const CreateClient = () => {
  return (
    <Styled.CreateClientContainer>
      <TopBar/>
      <CreateClientCard/>
    </Styled.CreateClientContainer>
  );
};

export default CreateClient;
