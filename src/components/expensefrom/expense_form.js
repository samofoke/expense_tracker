import { useState } from "react";
import "./expense-form.css";

const ExpenseForm = () => {
  //   const [enterTitle, setEnterTitle] = useState("");
  //   const [enteredAmount, setEnteredAmount] = useState("");
  //   const [formDate, setFormDate] = useState("");

  const [expenseForm, setExpenseForm] = useState({
    enteredTitle: "",
    amount: "",
    enteredDate: "",
  });

  const titleChangerHandler = (event) => {
    // setExpenseForm({ ...expenseForm, enteredTitle: event.target.value });
    setExpenseForm((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setExpenseForm({ ...expenseForm, amount: event.target.value });
    setExpenseForm((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setExpenseForm({ ...expenseForm, enteredDate: event.target.value });
    setExpenseForm((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
    console.log(event.target.value);
  };

  //   const submitFrom = () => {};

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // value={expenseForm.title}
            onChange={titleChangerHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            // value={expenseForm.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            // value={expenseForm.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
