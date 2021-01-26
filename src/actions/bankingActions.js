export const deposit = (payload) => {
    return { type: 'DEPOSIT', payload: parseFloat(payload) }
}
export const withdraw = (payload) => {
    return  { type: 'WITHDRAW', payload: parseFloat(payload) }
}
export const addInterest = () => {
    return { type: 'ADD_INTEREST' }
}
export const deleteAccount = () => {
    return { type: 'DELETE_ACCOUNT' }
}
export const changeAccount = () => {
    return { type: 'CHANGE_ACCOUNT' }
}