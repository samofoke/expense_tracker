import { useState } from "react";
import "./expense-form.css";

const ExpenseForm = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [formDate, setFormDate] = useState("");

  const titleChangerHandler = (event) => {
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
  };

  //   const submitFrom = () => {};

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangerHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
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
