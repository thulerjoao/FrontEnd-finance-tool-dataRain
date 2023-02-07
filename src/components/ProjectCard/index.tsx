import * as S from "./style";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import ModalRemoveUser from "../ModalRemoveUser";
import userDefault from "../../assets/images/default.png";


const ProjectCard = ({ user, idProject }: any) => {
  const [openRemoveModal, setOpenRemoveModal] = useState<boolean>(false);

  return (
    <S.CardContainer>
      <S.CardHeader>
        <S.CardFunction>{user.user.roleName}</S.CardFunction>
        <span
          className="trash-icon"
          onClick={() => setOpenRemoveModal(!openRemoveModal)}
        >
          <BsTrash />
        </span>
      </S.CardHeader>
      {user.imageUrl === null ? (
        <S.CardImage src={userDefault} alt="Imagem perfil" />
      ) : (
        <S.CardImage
          src={`https://back-btc-finance-tool-production-0df0.up.railway.app${user.user.imageUrl}`}
          alt="Imagem perfil"
        />
      )}
      <S.CardName>{user.user.name}</S.CardName>
      <S.CardName>{user.user.position}</S.CardName>
      <S.CardName>Hora: {user.valuePerUserHour.toFixed(2)}</S.CardName>
      {openRemoveModal ? (
        <ModalRemoveUser
          projectId={idProject}
          openRemoveModal={openRemoveModal}
          setOpenRemoveModal={setOpenRemoveModal}
          userId={user.user.id}
          userName={user.user.name}
        />
      ) : null}
    </S.CardContainer>
  );
};

export default ProjectCard;
