import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e =>{
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
    }

    return (
        <>
          <h3>Add a new transaction</h3>
          <form onSubmit = { onSubmit }>
            <div className="form-control">
                <label>
                    Text:
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} name="" placeholder="Enter text..."/>
                </label>
            </div>
            <div className="form-control">
                <label>
                    Amount:
                    <p>(negative-expense, positive-income)</p>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} name="" placeholder="Enter Amount..."/>
                </label>
            </div>
            <button className="btn">Add transaction</button>
          </form>  
        </>
    )
}
