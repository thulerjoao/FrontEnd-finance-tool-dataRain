import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import userDefault from "../../assets/images/default.png";
import Header from "../Header";
import ModalEditUser from "../ModalEditUser";
import Navbar from "../Navbar";
import * as S from "./style";

// enviar imagens dependencias
import ModalUploadImg from "../ModalUploadImg";

const Profile = () => {
  const [openUploadModal, setOpenUploadModal] = useState<boolean>(false);
  const[openModal, setOpenModal] = useState<boolean>(false)
  const { userStorage } = useAuth();

  return (
    <S.MainSection>
      <Header setSearch={""}/>
      <S.ALlProfilePageContainer>
        <S.ProfileNavbar>
          <Navbar />
        </S.ProfileNavbar>
        <S.ProfilePageContainer>
          <S.ProfileHeader>
            <S.ProfileTitle>Perfil do usuário</S.ProfileTitle>
            <S.ProfileSettings onClick={() => setOpenModal(!openModal)} />
            {openModal ? (
              <ModalEditUser
                userStorage={userStorage}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ) : null}
          </S.ProfileHeader>
          <S.ProfileContent>
            <S.ProfileCard>
              {userStorage && (
                <>
                  {userStorage.imageUrl === null ? (
                    <S.ProfileCardImage
                      src={userDefault}
                      alt="Imagem do perfil"
                    />
                  ) : (
                    <S.ProfileCardImage
                      src={`https://back-btc-finance-tool-production-0df0.up.railway.app/${userStorage.imageUrl}`}
                      alt="Imagem do perfil"
                    />
                  )}
                  <S.DivUpload>
                    {" "}
                    <S.UploadImgButton
                      onClick={() => setOpenUploadModal(!openUploadModal)}
                    >
                      Selecionar Imagem
                    </S.UploadImgButton>
                  </S.DivUpload>
                  {openUploadModal ? (
                    <ModalUploadImg
                      openUploadModal={openUploadModal}
                      setOpenUploadModal={setOpenUploadModal}
                    />
                  ) : null}
                  <S.ProfileCardName>{userStorage.name}</S.ProfileCardName>
                  <S.ProfileCardEmail>{userStorage.email}</S.ProfileCardEmail>
                  <S.ProfileCardPosition>
                    {userStorage.position}
                  </S.ProfileCardPosition>
                </>
              )}
            </S.ProfileCard>
          </S.ProfileContent>
        </S.ProfilePageContainer>
      </S.ALlProfilePageContainer>
    </S.MainSection>
  );
};

export default Profile;
