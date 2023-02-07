import * as Styled from './style'
import React from "react";
import FormCard from '../../components/FormCard'
import TopBar from '../../components/TopBar'

const FormPage = () => {
  return (
    <Styled.FormContainer>
      <TopBar/>
      <FormCard />
      </Styled.FormContainer>
  )

}

export default FormPage