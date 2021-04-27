import React,{useContext, useState} from 'react'
import './App.css'
import {TransactionsContext} from './GlobalContext'

export default function Child() {

    let {transactions, addTransaction} = useContext(TransactionsContext)

    let [newDesc, setDesc] = useState('')
    let [newAmmount, setAmmount] = useState(0)

    // var transactions = [
    //     { desc: 'Cash', ammount: '500' },
    //     { desc: 'Book', ammount: '300' },
    //     { desc: 'Camera', ammount: '100' }
    // ]
    // console.log(initialTransactions);

    const handleAddition = (e) =>{
        e.preventDefault()

        // console.log(newAmmount);
        // console.log(newDesc);

        if(Number(newAmmount) === 0){
            alert("Please Enter correct value")
            return false;
        }

        addTransaction({
            ammount: Number(newAmmount),
            desc: newDesc
        })
    }

    const getIncome = ()=>{
        let income = 0;
        for(var i = 0; i < transactions.length; i++){
            if(transactions[i].ammount > 0)
            income += transactions[i].ammount
        }
        return income;
    }

    const getExpense = ()=>{
        let expense = 0;
        for(var i = 0; i < transactions.length; i++){
            if(transactions[i].ammount < 0)
            expense += transactions[i].ammount
        }
        return expense;
    }


    return (
        <div className='containor'>
            <div className='topHead'>
                <h1>Expanse Tracker</h1>
            </div>
            <div>
                <h3> Your Balance <br /> ${getIncome() + getExpense()}</h3>
            </div>

            <div className='transationAmount'>
                <h3> INCOME <br /> ${getIncome()}</h3>
                <h3> EXPENSE <br /> ${getExpense()}</h3>
            </div>

            <h3>History</h3>
            <hr />

            <ul className='transDetail'>

                {transactions.map((transObj, index) => {
                    // console.log(transObj);
                    return (
                        <li key={index}>
                            <span>{transObj.desc}</span>
                            <span> ${transObj.ammount}</span>
                        </li>
                    )
                })

                }
            </ul>



            <h3>Add new transaction</h3>
            <hr />


            <form className='transForm' onSubmit={handleAddition}>
                <label >
                    Text <br />
                    <input type="text"
                     onChange={(e)=>setDesc(e.target.value)}
                     required placeholder='Enter description' />
                </label>
                <br />
                <label >
                    Amount <br />
                    <input type="number"
                     onChange={(e)=>setAmmount(e.target.value)}
                     required placeholder='Enter amount' />
                </label>
                <br />
                <input type="submit" value='Add transaction' />

            </form>
        </div>
    )
}
