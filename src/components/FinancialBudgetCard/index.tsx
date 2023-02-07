import { Button } from "@mui/material"
import * as Styled from "./style"
import React from "react";

const FinancialBudgetCard = () =>{

    return(
        <Styled.FinancialBudgetContainer>
            <section className="client">
                <div>
                    <p>Cliente</p>
                    <h3>Jenny Wilson</h3>
                </div>
                <div>
                    <p>Empresa</p>
                    <h3>Jenny Wilson</h3>
                </div>
            </section>
            <div className="title">
                <h2 className="fisrth2">Questões</h2>
                <h2>Horas</h2>
                <h2>Valor/hr</h2>
            </div>
            <section className="summary">
                <div className="questions">
                    <div>
                        <h4>1- Quem veio primeiro, o ovo ou a galinha?</h4>
                        <p>* O ovo veio primeiro</p>
                        <p>* Porém era de codorna</p>
                    </div>
                    <div>
                        <h4>2- Quem veio primeiro, o ovo ou a galinha?</h4>
                        <p>* O ovo veio primeiro</p>
                        <p>* Porém era de codorna</p>
                    </div>
                    <div>
                        <h4>3- Quem veio primeiro, o ovo ou a galinha?</h4>
                        <p>* O ovo veio primeiro</p>
                        <p>* Porém era de codorna</p>
                    </div>
                    <div>
                        <h4>4- Quem veio primeiro, o ovo ou a galinha?</h4>
                        <p>* O ovo veio primeiro</p>
                        <p>* Porém era de codorna</p>
                    </div>
                    <div>
                        <h4>5- Quem veio primeiro, o ovo ou a galinha?</h4>
                        <p>* O ovo veio primeiro</p>
                        <p>* Porém era de codorna</p>
                    </div>    
                </div>
                <div className="hours">
                    <section>
                        <div>
                            <input type="number" placeholder="50"></input>
                            <p>hr</p>
                        </div>
                        <div>
                            <input type="number" placeholder="72"></input>
                            <p>hr</p>
                        </div>
                        <div>
                            <input type="number" placeholder="59"></input>
                            <p>hr</p>
                        </div>
                        <div>
                            <input type="number" placeholder="90"></input>
                            <p>hr</p>
                        </div>
                        <div>
                            <input type="number" placeholder="110"></input>
                            <p>hr</p>
                        </div>
                    </section>
                </div>
                <div className="value">
                    <section>
                        <div>
                            <p>R$: </p>
                            <input type="number" placeholder="159,90"></input>
                        </div>
                        <div>
                            <p>R$: </p>
                            <input type="number" placeholder="140,90"></input>
                        </div>
                        <div>
                            <p>R$: </p>
                            <input type="number" placeholder="199,90"></input>
                        </div>
                        <div>
                            <p>R$: </p>
                            <input type="number" placeholder="159,90"></input>
                        </div>
                        <div>
                            <p>R$: </p>
                            <input type="number" placeholder="179,90"></input>
                        </div>
                    </section>
                </div>
            </section>
            <section className="details">
                <h2>Nota sobre o orçamento</h2>
                <textarea wrap="hard" placeholder="Não foi descrito nenhum comentário sobre o orçamento em questão."></textarea>
                <div className="extract">
                    <p>Horas Totais = 194hr</p>
                    <p>Valor Total = R$ 39.509,50</p>
                </div>
            </section>
            <section className="botton">
                <Button type="submit" variant="contained" className="buttonEnter">Aprovar Orçamento</Button>
            </section>
   
        </Styled.FinancialBudgetContainer>
    )
}

export default FinancialBudgetCard