import React, { useContext } from 'react';
import { Transaction } from './transaction.js';

import { GlobalContext } from '../context/gstate.js';

export const TransList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
