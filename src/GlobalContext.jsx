import React, { createContext, useReducer } from "react"
import TransactionReducer from './GlobalReducer'

const initialTransactions = [
    { desc: 'Cash', ammount: 600 },
    { desc: 'Book', ammount: -50 },
    { desc: 'Deposit', ammount: 100 },
    { desc: 'Camera', ammount: -400 }
]
 
export const TransactionsContext = createContext(initialTransactions)


export const TransactionProvider = ({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:{
                ammount: transObj.ammount,
                desc: transObj.desc
            }
        })

    }

    return(
        <TransactionsContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )

}