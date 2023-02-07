import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Api from "../../services/api";
import { ClientTypes } from "../../types/interface";
import { useAuth } from "../auth";

interface ClientProviderProps {
  children: ReactNode;
}

interface ClientProviderData {
  client: ClientTypes[];
  handleGetClients: () => void;
}

const ClientContext = createContext<ClientProviderData>(
  {} as ClientProviderData
);

export const ClientProvider = ({ children }: ClientProviderProps) => {
  const [client, setClient] = useState<ClientTypes[]>([]);
  const { logged } = useAuth();

  const handleGetClients = () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    Api.get("/client", headers)
      .then((res) => setClient(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (logged) handleGetClients();
  }, [logged]);

  return (
    <ClientContext.Provider value={{ client, handleGetClients}}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => useContext(ClientContext)