import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Api from "../../services/api";
import { ClientTypes } from "../../types/interface";
import { useAuth } from "../auth";

interface ClientProviderProps {
  children: ReactNode;
}

interface ClientProviderData {
  clients: ClientTypes[];
  handleGetClients: () => void;
}

const ClientContext = createContext<ClientProviderData>(
  {} as ClientProviderData
);

export const ClientProvider = ({ children }: ClientProviderProps) => {
  const [clients, setClients] = useState<ClientTypes[]>([]);
  const { logged } = useAuth();

  const handleGetClients = () => {
    const token = localStorage.getItem("token");

    Api.get("/client")
      .then((res) => setClients(res.data))
      .catch((err) =>{});
  };

  useEffect(() => {
    if (logged) handleGetClients();
  }, [logged]);

  return (
    <ClientContext.Provider value={{ clients, handleGetClients}}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => useContext(ClientContext)