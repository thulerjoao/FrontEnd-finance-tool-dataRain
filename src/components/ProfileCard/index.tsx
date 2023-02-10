import { useState } from "react";
import ProfileSettings from "../ModalProfileSettings";
import ModalUploadImg from "../ModalUploadImg";
import * as Style from "./style"

const TeamsCard = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [ openUploadModal, setOpenUploadModal] = useState<boolean>(false);
  
  console.log(isModalOpen)


  return (
          <>
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
                      <Style.Gear onClick={()=> setIsModalOpen(!isModalOpen)}/>{' '}
                    </div>
                    <p>thuler_lima@hotmail.com</p>
                    <p>22 9990-9574</p>
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
