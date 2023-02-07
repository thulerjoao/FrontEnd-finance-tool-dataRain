import * as Styled from './style'
import Header from '../../components/Header'
import AsideBar from '../../components/AsideBar'
import QuestionsCard from '../../components/QuestionsCard'

const QuestionsPage = () => {

  return (
    <Styled.QuestionsContainer>
      <Header setSearch={""}/>
      <section className='mainSection'>
        <div className='mainDiv'>
          <div className="AsideBar">
            <AsideBar />
          </div>
          <div className="HomeCard">
            <QuestionsCard/>
          </div>
        </div>
      </section>
      
      
      </Styled.QuestionsContainer>
  )

}

export default QuestionsPage