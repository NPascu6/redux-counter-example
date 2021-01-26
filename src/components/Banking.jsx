import { useState } from 'react'
import { deposit, withdraw, addInterest, deleteAccount, changeAccount } from '../actions/bankingActions'
import { useDispatch } from 'react-redux'

const Banking = () => {
    const [amount, setAmount] = useState("")
    const dispatch = useDispatch()

    const handleDeposit = () => {
        dispatch(deposit(amount))
    }

    const handleWithdraw = () => {
        dispatch(withdraw(amount))
    }

    const handleAddInterest = () => {
        dispatch(addInterest())
    }

    const handleDeleteAccount = () => {
        dispatch(deleteAccount())
    }

    const handleChangeAccount = () => {
        dispatch(changeAccount())
    }

    return (
        <div className="form-group">
            <input
                value={amount}
                type="text"
                onChange={(e) => setAmount(e.target.value)}
                className="form-control" />
            <button
                onClick={handleDeposit}
                className="btn btn-success">Deposit</button>
            <button
                onClick={handleWithdraw}
                className="btn btn-primary">Withdraw</button>
            <button
                onClick={handleAddInterest}
                className="btn btn-warning">Add interest</button>
            <button
                onClick={handleDeleteAccount}
                className="btn btn-danger">Delete Account</button>
            <button
                onClick={handleChangeAccount}
                className="btn btn-secondary">Change Account</button>
        </div>
    )
}

export default Banking
