import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import Stopwatch from "./stopwatch";

function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    function fibbo(n) {
        if (n < 0) return "Invalid";
        if (n <= 1) return n;
        let a = 0, b = 1;
        for (let i = 2; i <= n; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }

    const result = useMemo(() => fibbo(number), [number]);

    return (
        <>
            <h1 className="head">CounteR: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

            <div>
                <h1>Sum Of Fibonacci No. Is : {result}</h1>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(Number(e.target.value))}
                />
            </div>

            {/* Stopwatch component */}
            <div className="app-container">
                {/* Your existing JSX */}
                <Stopwatch className="stopwatch" />
            </div>

        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
