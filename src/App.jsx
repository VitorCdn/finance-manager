import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { TransactionModal } from './Components/Transactions-Modal'

export function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <TransactionModal />
        </div> 
    )
}