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
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
    </Card>
  );
};

export default Expenses;
