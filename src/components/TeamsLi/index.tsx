import * as S from "./style";

import { TeamsTypes } from "../../types/interface";
import MenuDropdown from "../MenuDropdownTeams";
import { useAuth } from "../../contexts/auth";
import React from "react";

interface MocksInterface {
  team: TeamsTypes;
}

const TeamsLi = ({ team }: MocksInterface) => {
  const { userStorage } = useAuth()


   

  return (
    <S.TeamsLi>
      <S.LiContent>
        <S.DivContent>
          <span>{team.name}</span>
          <span>R$: {`${(+team.valuePerHour).toFixed(2)}`}</span>
        </S.DivContent>
        {
          userStorage.roleName === "admin" ? <MenuDropdown team={team}/> : null
        }
      </S.LiContent>
    </S.TeamsLi>
  );
};

export default TeamsLi;
