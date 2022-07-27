import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

import { HistoryItem } from "./HistoryItem";

export const History = () => {
  const {transactions} = useContext(GlobalContext)
  
  return (
    <>
        <h3>History</h3>
        <ul id="list" className="list">
            {transactions.map(transaction => <HistoryItem key={transaction.id} transaction={transaction} /> )}
        </ul>
    </>
  )
};
