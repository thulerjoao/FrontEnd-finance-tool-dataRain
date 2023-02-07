import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { ProjectTypes } from "../../types/interface";
import MenuDropdownProject from "../MenuDropdownProject";

interface Props {
  project: ProjectTypes;
  userId?: string;
  manager?: any;
}

const ProjectLi = ({ project, manager }: Props) => {
  const navigate = useNavigate();
  const { userStorage } = useAuth();

  return (
    <S.ProjectLi>
      <S.LiContent>
        <S.DivContent>
          <span
            className="span-li"
            onClick={() =>
              userStorage.roleName === "admin"
                ? navigate(`/project-page/${project.id}`)
                : userStorage.roleName === "professional services" ? navigate(`/project-user/${project.id}/${manager.name}`) : null
            }
          >
            {project.name}
          </span>
          {userStorage.roleName === "admin" ? (
            <span className="span-dropdown">
              {" "}
              <MenuDropdownProject project={project} />{" "}
            </span>
          ) : null}
        </S.DivContent>
      </S.LiContent>
    </S.ProjectLi>
  );
};

export default ProjectLi;
