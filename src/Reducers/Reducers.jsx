const TransactionReducer = (state = false, action) => {
    switch (action.type) {
        case "SHOW_MODAL":
            return true
        case "HIDDE_MODAL":
            return false
        default:
            return state
    }
}

const TransactionListReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return [...state, action.payload]
        default:
            return state;
    }
}

export {
    TransactionReducer,
    TransactionListReducer
}