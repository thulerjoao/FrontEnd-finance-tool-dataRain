import { useEffect } from 'react';
import RecoverPassword from '../../components/RecoverPasswordCard';
import TopBar from '../../components/TopBar';
import { useAuth } from '../../contexts/auth';
import * as Styled from './style';

interface modelProp {
  prop: string
}

const RecoverPasswordPage = ({prop}: modelProp) => {

  const{ logoutStay } = useAuth()

  useEffect(()=>logoutStay(),[])

  return (
    <Styled.RecoverContainer>
      <TopBar/>
      <RecoverPassword prop={prop}/>
    </Styled.RecoverContainer>
  )
}

export default RecoverPasswordPage