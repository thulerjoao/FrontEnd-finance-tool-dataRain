import AsideBar from '../../components/AsideBar';
import Header from '../../components/Header';
import ProfileCard from '../../components/ProfileCard';
import * as Styled from './style';


const ProfilePage = () => {

  return (
    <Styled.ProfileContainer>
      <Header setSearch={""}/>
      <section className="mainSection">
        <div className="mainDiv">
          <div className="AsideBar">
            <AsideBar />
          </div>
          <div className="HomeCard">
            <ProfileCard/>
          </div>
        </div>
      </section>
    </Styled.ProfileContainer>
  );
};

export default ProfilePage;
