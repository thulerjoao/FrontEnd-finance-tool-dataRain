import Header from "../../components/Header"
import BudgetCard from "../../components/BudgetCard"
import * as Style from "./style"


const BudGet = () =>{
    return(
        <Style.PreSaleBudgetContainer>
            <Header setSearch={""} />
            <BudgetCard/>
        </Style.PreSaleBudgetContainer>
    )
}

export default BudGet