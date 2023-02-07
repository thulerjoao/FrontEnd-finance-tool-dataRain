import * as Style from "./style"
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";


const ThirdPageCard = () =>{

    return(
        <Style.ThirdPageCard>
            <div>               
                <p>
                Formulário enviado com sucesso. Em breve entraremos em contato com mais detalhes do orçamento. 
                </p>
                <br/>
                <p>Obrigado!</p>  
            </div>
        </Style.ThirdPageCard>
    )
}

export default ThirdPageCard
                