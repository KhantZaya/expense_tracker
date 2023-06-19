import NewExpense from "./components/NewExpense/NewExpense";
// import Card from "./components/UI/Card";
import Expense from "./components/Expenses/Expense";
import { useState } from "react";

// const DUMMY_EXPENSES = [
//     {
//         id: "e1",
//         title: "Chocalate Milk",
//         date: new Date(2022, 6, 12),
//         amount: 12,
//     },
//     {
//         id: "e2",
//         title: "Wired Mouse",
//         date: new Date(2022, 6, 13),
//         amount: 25,
//     },
//     {
//         id: "e3",
//         title: "Tissue Paper",
//         date: new Date(2023, 6, 13),
//         amount: 8,
//     },
//     {
//         id: "e4",
//         title: "Air Cooler",
//         date: new Date(2021, 6, 15),
//         amount: 150,
//     },
//     {
//         id: "e5",
//         title: "Power Bank",
//         date: new Date(2020, 6, 16),
//         amount: 110,
//     },
//     {
//         id: "e6",
//         title: "Power Bank",
//         date: new Date(2023, 8, 16),
//         amount: 110,
//     },
//     {
//         id: "e7",
//         title: "Power Bank",
//         date: new Date(2023, 6, 16),
//         amount: 110,
//     },
//     {
//         id: "e8",
//         title: "Chocalate Milk",
//         date: new Date(2022, 4, 12),
//         amount: 12,
//     },
//     {
//         id: "e9",
//         title: "Wired Mouse",
//         date: new Date(2022, 4, 13),
//         amount: 25,
//     },
//     {
//         id: "e10",
//         title: "Tissue Paper",
//         date: new Date(2023, 3, 13),
//         amount: 8,
//     },
//     {
//         id: "e11",
//         title: "Air Cooler",
//         date: new Date(2021, 6, 15),
//         amount: 150,
//     },
//     {
//         id: "e12",
//         title: "Power Bank",
//         date: new Date(2020, 3, 16),
//         amount: 110,
//     },
//     {
//         id: "e13",
//         title: "Power Bank",
//         date: new Date(2023, 3, 16),
//         amount: 110,
//     },
//     {
//         id: "e14",
//         title: "Power Bank",
//         date: new Date(2023, 2, 16),
//         amount: 110,
//     },
// ];
let DUMMY_EXPENSES = [];

for (let i = 2; i <= 60; i++) {
    const id = `e${i}`;
    const title = "Expense Title"; // Replace with your desired title
    const year = getRandomNumberBetween(2019, 2023);
    const month = getRandomNumberBetween(0, 11);
    const day = getRandomNumberBetween(1, 28);
    const date = new Date(year, month, day);
    const amount = getRandomNumberBetween(1, 200); // Replace with your desired range for amount

    DUMMY_EXPENSES.push({
        id,
        title,
        date,
        amount,
    });
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    function AddExpenseHandler(expenseData) {
        setExpenses((prevExpenses) => {
            return [expenseData, ...prevExpenses];
        });
    }
    return (
        <div>
            <NewExpense onAddExpense={AddExpenseHandler}></NewExpense>
            <Expense expenses={expenses}></Expense>
        </div>
    );
}

export default App;
