import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const incomeAmounts = amounts.filter(amount => amount > 0) 
  const expenseAmounts = amounts.filter(amount => amount < 0) 
  const income = incomeAmounts.reduce((acc, amount) => acc += amount, 0)
  const expense = expenseAmounts.reduce((acc, amount) => acc += amount, 0)
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${(income).toFixed(2)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${Math.abs(expense).toFixed(2)}</p>
        </div>
    </div>
  )
};
