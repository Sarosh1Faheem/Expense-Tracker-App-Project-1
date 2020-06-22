import React from 'react';

import { Header } from './components/header.js';
import { Balance } from './components/balance.js';
import { IncomeExpense } from './components/incomeexpense.js';
import { TransList } from './components/translist.js';
import {AddTransaction} from './components/addtransaction.js';
import { GlobalProvider } from './context/gstate.js';

import './App.css';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
          <div className='container'>
            <Balance />
            <IncomeExpense />
            <TransList />
            <AddTransaction />
          </div>
      </GlobalProvider>
      <footer> 
          <div className="copyright">Copyright &copy; <a href="mailto:saroshfaheem.sf@gmail.com">Muhammad Sarosh Faheem</a></div>
        </footer>
    </div>
  );
}

export default App;