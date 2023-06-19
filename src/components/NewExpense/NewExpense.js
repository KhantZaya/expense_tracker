import "./NewExpense.css";
import ExpenseForm from "../NewExpense/ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
    function saveExpenseData(enteredData) {
        const newData = {
            ...enteredData,
            id: Math.random().toString(),
        };
        props.onAddExpense(newData);
    }
    const [isEditing, setIsEditing] = useState(false);

    const startEditionHandler = () => {
        setIsEditing((preval) => !preval);
    };

    return (
        <div className="new-expense">
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseData}
                    toggleExpenseForm={startEditionHandler}
                />
            )}
            {!isEditing && (
                <button
                    style={{ margin: "auto" }}
                    onClick={startEditionHandler}
                >
                    Add New Expense
                </button>
            )}
        </div>
    );
};

export default NewExpense;
