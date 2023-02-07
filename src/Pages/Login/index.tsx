import * as Styled from './style'
import LoginCard from '../../components/LoginCard'
import TopBar from '../../components/TopBar'
import React from "react";

const LoginPage = () => {
  return (
    <Styled.LoginContainer>
      <TopBar/>
      <LoginCard />
      </Styled.LoginContainer>
  )

}

export default LoginPage