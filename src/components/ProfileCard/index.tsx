import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import ProfileSettings from "../ModalProfileSettings";
import ModalUploadImg from "../ModalUploadImg";
import * as Style from "./style"
import Logo from "../../assets/images/default.png";

const TeamsCard = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [ openUploadModal, setOpenUploadModal] = useState<boolean>(false);
  const { userStorage } = useAuth()

  const phoneMask = (prop:string) => {
    let value = prop.toString()
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }
  


  return (
          <>
          <Style.ProfileContainer>
              <section className="section01">
                <h2>Perfil de usuário</h2>          
              </section>
              <section className="section02">
                <section>
                  <img src={
                    userStorage.imageUrl === null? Logo :
                    `https://back-btc-finance-tool-production-0df0.up.railway.app${userStorage.imageUrl}`
                    }></img>
                  <div>
                    <div className="top">
                      <h2>{userStorage.name}</h2>
                      <Style.Gear onClick={()=> setIsModalOpen(!isModalOpen)}/>{' '}
                    </div>
                    <p>{userStorage.email}</p>
                    {/* <p>{phoneMask(userStorage)}</p> */}
                    <p className="updateImg" onClick={()=> setOpenUploadModal(!openUploadModal)}>Upload de Imagem</p>
                  </div>
                </section>
              </section>
          </Style.ProfileContainer>
          <ProfileSettings
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
          <ModalUploadImg
            setOpenUploadModal={setOpenUploadModal}
            openUploadModal={openUploadModal}
          />
          
        </>
  );
};

export default TeamsCard;
