import './App.css';
import { GlobalProvider } from './context/GlobalContext';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { History } from './components/History';
import { AddTransaction } from './components/AddTransaction';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance /> 
        <IncomeExpense />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
