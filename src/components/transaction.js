import React, {useContext} from 'react';
import { GlobalContext } from '../context/gstate.js';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);


  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span> $ {Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}