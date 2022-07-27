import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const HistoryItem = ({transaction}) => {
    const { removeTransaction } = useContext(GlobalContext)

    const { amount, text, id } = transaction
  return (
    <div>
        <li className={amount > 0 ? "plus": "minus"}>
            {text} <span>{amount > 0 ? "+": "-"}${Math.abs(amount)}</span><button className="delete-btn" onClick={() => removeTransaction(id)}>x</button>
            </li>
    </div>
  )
};
