import { useSelector } from 'react-redux'

const AccountStatus = () => {
    const accountType = useSelector(state => state.banking.currentAccountType)

    return (
        <div>
            <h1>{accountType}</h1>
        </div>
    )
}

export default AccountStatus
