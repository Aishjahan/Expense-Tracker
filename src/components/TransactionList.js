import React,{useContext} from 'react'
import { Globalcontext } from '../context/GlobalState'
import Transaction from './Transaction'
export const TransactionList = () => {
  const {transactions} = useContext(Globalcontext)
  return (
    <>
       <h3>History</h3>
       <ul className='list'>
        {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}></Transaction>))
           }            
        </ul> 
    </>
  )
}
