import * as Style from "./style"

const teste = ['','','','','','','','','','','','','']


const UsersCard = () => {

  return (
          <Style.UsersContainer>
              <section className="section01">
                <h2>Listagem de Usuários</h2>
              </section>
              <section className="section02">
                  {teste && teste.map((element)=>{
                  return(
                    <div className="card">
                      <div>
                      <p>Professional Service</p>
                      <Style.Settings/>{' '}
                    </div>
                    <section>
                      <img src="https://avatars.githubusercontent.com/u/97922574?v=4"></img>
                      <h2>João Pedro</h2>
                      <p>thuler_lima@hotmail.com</p>
                      <p>Billable: Sim</p>
                    </section>
                  </div>
                  )})
                  }
              </section>           
          </Style.UsersContainer>  
  );
};

export default UsersCard;
