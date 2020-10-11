import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpanses } from './components/IncomeExpanses'
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
        <div className="container">
          <IncomeExpanses/>
        </div>
        <TransactionList/>
        <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
