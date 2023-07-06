import { useState } from "react";
import "./expense-form.css";

const ExpenseForm = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [formDate, setFormDate] = useState("");

  //   const [expenseForm, setExpenseForm] = useState({
  //     enteredTitle: "",
  //     amount: "",
  //     enteredDate: "",
  //   });

  const titleChangerHandler = (event) => {
    setEnterTitle(event.target.value);
    // setExpenseForm({ ...expenseForm, enteredTitle: event.target.value });
    // setExpenseForm((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setExpenseForm({ ...expenseForm, amount: event.target.value });
    // setExpenseForm((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setFormDate(event.target.value);
    // setExpenseForm({ ...expenseForm, enteredDate: event.target.value });
    // setExpenseForm((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
    console.log(event.target.value);
  };

  const submitFromHandler = (event) => {
    event.preventDefault();

    const expenseDaata = {
      title: enterTitle,
      amount: enteredAmount,
      date: new Date(formDate),
    };

    console.log(expenseDaata);
    setEnterTitle("");
    setEnteredAmount("");
    setFormDate("");
  };

  //ways to approach change handler for all useState
  //   const inputChangeHandler = (d, value) => {
  //     if (d === "title") {
  //       setEnterTitle(value);
  //       console.log(d, value);
  //     } else if (d === "date") {
  //       setFormDate(value);
  //     } else {
  //       setEnteredAmount(value);
  //     }
  //   };

  return (
    <form onSubmit={submitFromHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterTitle}
            onChange={titleChangerHandler}
            // onChange={(event) =>
            //   inputChangeHandler("title", event.target.value)
            // }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={formDate}
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
