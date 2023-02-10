import * as Style from "./style"


const teste = ['','','','','','','','','','','','','']


const ClientsCard = () => {

  return (
          <Style.ClientsContainer>
              <section className="section01">
                <h2>Clientes</h2>        
              </section>
              <section className="section02">
                  {teste && teste.map((element, index)=>{
                  return(
                    <div className="card">
                      <div>
                        <h2>{`Company 0${index + 1}`}</h2>
                        <Style.Settings/>{' '}
                      </div>
                      <section>
                        <p>{`company0${index + 1}@gmail.com`}</p>
                        <p>(21) 98745-6321</p>
                      </section>
                  </div>
                  )})
                  }
              </section>  
          </Style.ClientsContainer>  
  );
};

export default ClientsCard;
