import { ClientTypes } from "../../types/interface";
import MenuDropdownClient from "../MenuDropdownClient";
import * as S from "./style";

interface ClientProps{
  client: ClientTypes;
}


const ClientCard = ({client}: ClientProps) => {
  return (
    <S.ClientContainer >
      <S.ClientHeader>
        <span>
          {<MenuDropdownClient client={client}/>}
        </span>
      </S.ClientHeader>
      <S.ClientName>{client.companyName}</S.ClientName>
      <S.ClientEmail>{client.email}</S.ClientEmail>
      <S.ClientPhone>{client.phone}</S.ClientPhone>
      {
        client.technicalContact === "" ? (
          <S.ClientMainContact>{client.technicalContact}</S.ClientMainContact>
        ): null  
      }
    </S.ClientContainer>
  );
};

export default ClientCard;
