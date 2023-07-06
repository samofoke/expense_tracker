import ExpenseItem from "../expense-item/Expense_item";
import Card from "../card/card";
import "./expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
    </Card>
  );
};

export default Expenses;
