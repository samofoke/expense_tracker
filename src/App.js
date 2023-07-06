import Expenses from "./components/expenses/expenses";
import NewExpense from "./components/newexpense/new_expense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in App.js");
    console.log("added expense: ", expense);
  };

  return (
    <div className="App">
      <NewExpense addedExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
