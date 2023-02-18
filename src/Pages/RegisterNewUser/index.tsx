import * as Styled from "./style";
import AsideBar from "../../components/AsideBar";
import Header from "../../components/Header";
import CreateAccountCard from "../../components/CreateAccountCard";
import CreateClientCard from "../../components/CreateClientCard";
import { useState } from "react";

const RegisterNewUser = () => {

  const [ change, setChange ] = useState<boolean>(true)


  return (
    <Styled.RegisterNewUserContainer>
      <Header setSearch={""}/>
      <section className="mainSection">
        <div className="mainDiv">
          <div className="AsideBar">
            <AsideBar />
          </div>
          <div className="HomeCard">
            {change? 
            <CreateAccountCard change={change} setChange={setChange}/>:
            <CreateClientCard change={change} setChange={setChange}/>}
          </div>
        </div>
      </section>
    </Styled.RegisterNewUserContainer>
  );
};

export default RegisterNewUser;
