import "./Card.css";
import "../Expenses/ExpenseItem.css";

function Card({ className, children }) {
    return <div className={`card-container ${className}`}>{children}</div>;
}

export default Card;
