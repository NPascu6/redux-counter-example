const initialState = {
    balance: 0,
    currentAccountType: 'Savings Account',
    accountTypes: [
        'Savings Account',
        'Debit Account',
        'Credit Account']
}

export const bankingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DEPOSIT": {
            return { ...state, balance: state.balance + action.payload }
        }
        case "WITHDRAW": {
            return { ...state, balance: state.balance - action.payload }
        }
        case "ADD_INTEREST": {
            return { ...state, balance: state.balance * 1.03 }
        }
        case "DELETE_ACCOUNT": {
            return { ...state, balance: 0 }
        }
        case "CHANGE_ACCOUNT": {
            return { ...state, currentAccountType: state.accountTypes.filter(at => at !== state.currentAccountType)[0] }
        }
        case "GET_ACCOUNT_BALANCE": {
            return state.balance
        }
        default: {
            return state
        }
    }
}
