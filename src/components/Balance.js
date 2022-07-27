import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const Balance = () => {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)

  const balance = amounts.reduce((acc, amount) => acc += amount, 0 )
  
  return (
    <>
        <h4>Your Balance</h4>
        <h1 id="balance">{balance >= 0 ? "" : "-" }${Math.abs(balance).toFixed(2)}</h1>
    </>
  )
};
