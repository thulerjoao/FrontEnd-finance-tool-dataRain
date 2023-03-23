import * as Style from "./style";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Api from "../../../services/api";
import { toast } from "react-hot-toast";
import React from "react";
import { CreateClientData } from "../../../types/interface";
import { validateValuesClient } from "../../../utils/validateClientsValue";

interface FirstPageProp {
  setStepNumber: Dispatch<SetStateAction<number>>;
}

const FirstPageCard = ({ setStepNumber }: FirstPageProp) => {
  const [companyName, setCompanyName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [primaryContactName, setPrimaryContactName] = useState<string>("");
  const [technicalPhone, setTechnicalPhone] = useState<string>("");
  const [technicalEmail, setTechnicalEmail] = useState<string>("");
  const [technicalName, setTechnicalName] = useState<string>("");

  const localClient = JSON.parse(sessionStorage.getItem("client") || "[]");
  const clientId = sessionStorage.getItem("clientId");

  const handleInicialize = () => {
    setCompanyName(localClient.companyName);
    setPrimaryContactName(localClient.mainContact);
    setEmail(localClient.email);
    setPhone(localClient.phone);
    setTechnicalName(localClient.technicalContact);
    setTechnicalEmail(localClient.technicalContactEmail);
    setTechnicalPhone(localClient.technicalContactPhone);
  };

  useEffect(() => {
    handleInicialize();
  }, []);

  const handleCreateClient = () => {
    const data: CreateClientData = {
      companyName: companyName,
      email: email,
      phone: phone,
      primaryContactName: primaryContactName,
      technicalContact: {
        phone: technicalPhone,
        email: technicalEmail,
        name: technicalName,
      },
    };

    const newData = validateValuesClient(data);
    if (typeof newData !== "string") {
      Api.post("/client/register", data)
        .then((res) => {
          setStepNumber(1);
          sessionStorage.setItem("client", JSON.stringify(data));
          sessionStorage.setItem("clientId", res.data.id);
        })
        .catch(() => toast.error("Dados de usuário inválido"));
    }
  };

  return (
    <Style.FirstPageCard>
      <section>
        <label>Empresa *</label>
        <input
          type="text"
          defaultValue={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        ></input>
        <label>Contato Principal *</label>
        <input
          type="text"
          defaultValue={primaryContactName}
          onChange={(e) => setPrimaryContactName(e.target.value)}
        ></input>
        <label>Email *</label>
        <input
          type="text"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Telefone *</label>
        <input
          type="number"
          defaultValue={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <label>Contato Técnico</label>
        <input
          type="text"
          defaultValue={technicalName}
          onChange={(e) => setTechnicalName(e.target.value)}
        ></input>
        <label>Email do Contato Técnico</label>
        <input
          type="text"
          defaultValue={technicalEmail}
          onChange={(e) => setTechnicalEmail(e.target.value)}
        ></input>
        <label>Telefone do Contato Técnico</label>
        <input
          type="number"
          defaultValue={technicalPhone}
          onChange={(e) => setTechnicalPhone(e.target.value)}
        ></input>
      </section>
      <div>
        <FormControl>
          <p>Utilizar calculadora personalizada?</p>
          <RadioGroup row className="RadioGroup" defaultValue={false}>
            <FormControlLabel value="true" control={<Radio />} label="Sim" />
            <FormControlLabel value="false" control={<Radio />} label="Nâo" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="buttonDiv">
        <Button
          variant="contained"
          className="buttonEnter"
          onClick={() => handleCreateClient()}
        >
          Iniciar
        </Button>
      </div>
    </Style.FirstPageCard>
  );
};

export default FirstPageCard;
