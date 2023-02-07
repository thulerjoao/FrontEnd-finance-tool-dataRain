import toast from "react-hot-toast";
import { TeamsTypes } from "../types/interface";
import Api from "./api";


const TeamService = {
  findAllTeams: async () => {
    return Api.get("/team")
      .then((res) => res)
      .catch((error) => error);
  },
  createTeam: (values: TeamsTypes) => {
    Api.post("team", values)
      .then((res) => {
        res;
        toast.success("Time criado com sucesso");
      })
      .catch((error) => {
        error;
        toast.error("Falha ao criar time");
      });
  },
  deleteTeam: (id: string) => {
    Api.delete(`team/${id}`)
      .then((res) => {
        toast.success("Equipe deletada"), res;
      })
      .catch((error) => {
        toast.error("Falha ao deletar equipe"), error;
      });
  },
  editTeam: (id: string, values: TeamsTypes) => {
    Api.patch(`team/${id}`, values)
      .then((res) => {
        toast.success("Equipe editada com sucesso"), res;
      })
      .catch((error) => {
        toast.error("Falha ao atualizar equipe"), error;
      });
  },
};

export default TeamService;
