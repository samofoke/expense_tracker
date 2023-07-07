import { useState } from "react";
import ExpenseItem from "../expense-item/Expense_item";
import ExpenseFilter from "../expensefilter/expense_filter";
import Card from "../card/card";
import "./expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        theChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
