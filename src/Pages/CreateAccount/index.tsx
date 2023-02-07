import * as Styled from "./style";
import TopBar from "../../components/TopBar";
import CreateAccountCard from "../../components/CreateAccountCard";
import React from "react";

const CreateAccount = () => {
  return (
    <Styled.CreateAccountContainer>
      <TopBar/>
      <CreateAccountCard/>
    </Styled.CreateAccountContainer>
  );
};

export default CreateAccount;
