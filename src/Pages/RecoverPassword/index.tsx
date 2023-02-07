import RecoverPassword from '../../components/RecoverPasswordCard';
import TopBar from '../../components/TopBar';
import * as Styled from './style';

const RecoverPasswordPage = () => {
  return (
    <Styled.RecoverContainer>
      <TopBar/>
      <RecoverPassword/>
    </Styled.RecoverContainer>
  )
}

export default RecoverPasswordPage