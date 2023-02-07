import { toast } from "react-hot-toast";
import { UserTypes } from "../types/interface";
import Api from "./api"

const UserService = {
    findAllUsers: async () =>{
        return Api.get("/user")
        .then((res) => res)
        .catch((error) => (error));
    },
    deleteUser: (id: string) => {
        Api.delete(`user/${id}`).
        then((res) => {toast.success("Usuário deletado"), res}).
        catch((error) => {toast.error("Falha ao deletar usuário"), error})
    },
    editUser:(id: string, values:UserTypes) =>{
        Api.patch(`user/${id}`, values).
        then((res) => {toast.success("Usuário editado com sucesso"), res}).
        catch((error) => {toast.error("Falha ao atualizar usuário"), error})
    }
}

export default UserService;