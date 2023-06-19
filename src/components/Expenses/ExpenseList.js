import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

const expenseList = ({ items }) => {
    if (items.length === 0) {
        return <h2 className="expense-list__fallback">No Expense Found</h2>;
    }

    return (
        <ul className="expense-list">
            {items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default expenseList;
