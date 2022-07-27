import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const transactions = state.transactions

    const addTransaction = (transaction) => dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction
    })

    const removeTransaction = id => dispatch({
        type: "REMOVE_TRANSACTION",
        payload: id
    })


    return (
        <GlobalContext.Provider value={{
            transactions,
            addTransaction,
            removeTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}