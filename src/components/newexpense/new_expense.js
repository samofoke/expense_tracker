import ExpenseForm from "../expensefrom/expense_form";
import "./new-expense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (capturedExpnseData) => {
    const expenseDataCaptured = {
      ...capturedExpnseData,
      id: Math.random().toString(),
    };
    //console.log("captured data: ", expenseDataCaptured);
    props.addedExpense(expenseDataCaptured);
  };

  return (
    <div className="new-expense">
      <ExpenseForm saveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
