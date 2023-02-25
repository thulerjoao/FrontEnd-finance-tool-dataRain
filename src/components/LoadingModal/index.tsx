
import * as Style from "./style"

const LoadingModal = () => {
  return (
      <Style.LoadingModalContainer>
        <div>
            <span>
                <Style.Spin/>{' '}
            </span>
            <p>Carregando</p>
        </div>
    </Style.LoadingModalContainer>
  )
}

export default LoadingModal