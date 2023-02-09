import Header from "../../components/Header"
import BudgetCard from "../../components/BudgetCard"
import * as Style from "./style"
import TopBar from "../../components/TopBar"


const BudGet = () =>{
    return(
        <Style.PreSaleBudgetContainer>
            <TopBar />
            <BudgetCard/>
        </Style.PreSaleBudgetContainer>
    )
}

export default BudGet