import { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

import "./Expense.css";

function Expenses({ expenses }) {
    const [filteredYear, setFilteredYear] = useState("2023");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpense = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onFilterChange={filterChangeHandler}
            />
            <ExpenseChart expenses={filteredExpense} />
            <ExpenseList items={filteredExpense} />
        </Card>
    );
}

export default Expenses;
