import * as Style from "./style"




const TeamsCard = () => {

  return (
          <Style.ProfileContainer>
              <section className="section01">
                <h2>Perfil de usuário</h2>          
              </section>
              <section className="section02">
                <section>
                  <img src="https://avatars.githubusercontent.com/u/97922574?v=4"></img>
                  <div>
                    <div className="top">
                      <h2>João Pedro Thuler Lima</h2>
                      <Style.Gear/>{' '}
                    </div>
                    <p>thuler_lima@hotmail.com</p>
                    <p>22 9990-9574</p>
                    <p className="updateImg" onClick={()=>{}}>Upload de Imagem</p>
                  </div>
                </section>
              </section>
          </Style.ProfileContainer>
  );
};

export default TeamsCard;
