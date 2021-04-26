import React from 'react'
import './App.css'

export default function Child() {
    return (
        <div className='containor'>
            <div className='topHead'>
                <h1>Expanse Tracker</h1>
            </div>
            <div>
                <h3> Your Balance <br /> $3999</h3>
            </div>

            <div className='transationAmount'>
                <h3> INCOME <br /> $3999</h3>
                <h3> EXPENSE <br /> $3999</h3>
            </div>

            <h3>History</h3>
            <hr/>

            <ul className='transDetail'>
                <li>
                    <span>Cash</span>
                    <span> 400</span>
                </li>
                <li>
                    <span>Book</span>
                    <span> 100</span>
                </li>
                <li>
                    <span>Camera</span>
                    <span>500</span>
                </li>

            </ul>

            <h3>Add new transaction</h3>

            <form className='transForm'>
                <label >
                    Text <br/>
                    <input type="text" required placeholder='Enter description'/>
                </label>
                <br/>
                <label >
                    Amount <br/>
                    <input type="number" required placeholder='Enter amount'/>
                </label>
                <br/>
                <input type="submit" value='Add transaction' />
                
            </form>
        </div>
    )
}
