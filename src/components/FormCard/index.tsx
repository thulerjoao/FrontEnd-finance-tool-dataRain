import * as Style from "./style"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from "react";
import FirstPageCard from "./FirstPage";
import SecondPageCard from "./SecondPage";
import ThirdPageCard from "./ThirdPage";
import React from "react";


const steps = [ 
    "Contato", "Formulário", "Detalhes"
]

const handleTitle = (prop:number) =>{

        if(prop===0){
            return "Contato"
        }else if(prop===1){
            return "Formulário"
        }else if(prop > 1){
            return "Detalhes"
        }
    }

const FormCard = () =>{
    const [stepNumber, setStepNumber] = useState<number>(0)

    

    return(
        <Style.FormCardContainer>
            <Style.FormCard>
                <h3>{handleTitle(stepNumber)}</h3>
                <Stepper activeStep={stepNumber} alternativeLabel className="Stepper">
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {(stepNumber === 0) && <FirstPageCard setStepNumber={setStepNumber}/>}
                {(stepNumber === 1) && <SecondPageCard setStepNumber={setStepNumber}/>}
                {(stepNumber > 1) && <ThirdPageCard/>}


            </Style.FormCard>
        </Style.FormCardContainer>
    )
}

export default FormCard;