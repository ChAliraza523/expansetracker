import { TransactionContext } from "./transContext";
import { useContext, useState } from "react";

function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState(0);
    const handleAddition = (event) => {
        event.preventDefault();
        addTransaction({ amount: Number(newAmount), desc: newDesc })


        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })
    }
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }


    return (
        <div className='container' >
            <h1 className='text-center'>Expanse Tracker BY Ali Raza</h1>
            <h3>Your Balance <br /> {getIncome() + getExpense()}</h3>

            <div className='expanse-container'>
                <h3>INCOME <br /> {getIncome()}</h3>
                <h3>EXPANCE <br /> {getExpense()}</h3>
            </div>

            <h3>History</h3>
            <hr />
            <ul className='transaction-list'>
                {transactions.map((transObj, ind) => {
                    return (<li key={ind} >
                        <span>{transObj.desc}</span>
                        <span>{transObj.amount}</span>
                    </li>)
                })}


            </ul>

            <h3>Add new transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <lable>
                    Enter Description <br />
                    <input type="text" onChange={(ev) => setDesc(ev.target.value)} required />
                </lable>

                <br />
                <lable>
                    Enter Amount <br />
                    <input type="number" onChange={(ev) => setAmount(ev.target.value)} required />
                </lable>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>

        </div>


    )
}

export default Child;