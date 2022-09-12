import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function subtract() {
        setCount((preCount) => preCount - 1);
    }

    function plus() {
        setCount((preCount) => preCount + 1);
    }

    return (
        <div className="counter">
            <button className="counter-subtract" onClick={subtract}>
                -
            </button>
            <div className="counter-number">
                <h1>{count}</h1>
            </div>
            <button className="counter-plus" onClick={plus}>
                +
            </button>
        </div>
    );
}
