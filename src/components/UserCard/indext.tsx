import * as S from "./style";
import MenuDropdownUser from "../MenuDropdownUser";
import { UserTypes } from "../../types/interface";
import userDefault from "../../assets/images/default.png";
import React from "react";

interface UserProps {
  user: UserTypes;
  className?: string;
}

const UserCard = ({ user, className }: UserProps) => {
  return (
    <S.CardContainer className={className}>
      <S.CardHeader>
        <S.CardFunction>{user.roleName}</S.CardFunction>
        <span>
          <MenuDropdownUser user={user} />
        </span>
      </S.CardHeader>
      {user.imageUrl === null ? (
        <S.CardImage src={userDefault} alt="Imagem perfil" />
      ) : (
        <S.CardImage src={`https://back-btc-finance-tool-production-0df0.up.railway.app/${user.imageUrl}`} alt="Imagem perfil" />
      )}

      <S.CardName>{user.name}</S.CardName>
      <S.CardEmail>{user.email}</S.CardEmail>
      {
        user.billable == true ? (

           <S.CardBillable>Billable: Sim</S.CardBillable>
          ) :
          <S.CardBillable>Billable: Não</S.CardBillable>
      }
    </S.CardContainer>
  );
};

export default UserCard;
