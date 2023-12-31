import { useState } from "react";
// import ExpenseItem from "../expense-item/Expense_item";
import ExpenseFilter from "../expensefilter/expense_filter";
import ExpenseChart from "../expensechart/expense_chart";
import Card from "../card/card";
import "./expenses.css";
import ExpenseList from "../expenselist/expense_list";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectYear) => {
    setFilterYear(selectYear);
  };

  const filterExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  // let expenseContent = <p>No expenses found</p>;

  // if (filterExpense.length > 0) {
  //   expenseContent = filterExpense.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        theChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filterExpense} />
      <ExpenseList items={filterExpense} />
    </Card>
  );
};

export default Expenses;
