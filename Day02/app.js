import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [numberchange, setNumberchange] = useState(false);
    const [characterchange, setCharacterchange] = useState(false);

    function genpassword() {
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNNOPQRSSTUVWXYZ";
        if (numberchange)
            str += "0123456789";
        if (characterchange)
            str += "!#~$%^&*()-_*/-+@|";

        let pass = "";
        for (let i = 0; i < length; i++) {
            pass += str[Math.floor(Math.random() * str.length)];
        }
        setPassword(pass);
    }
    useEffect(() => {
        genpassword();

    }, [length, numberchange, characterchange]
    )
    return (
        <>
            <h2>PassWord GeneRatoR:</h2>
            <h1>
                {password}
            </h1>
            <div>
                <input type="range" min={5} max={50} value={length} onChange={(e) => setLength(e.target.value)} />
                <label> Length Is : {length}</label>

                <input type="checkbox" defaultChecked={numberchange} onChange={() => setNumberchange(!numberchange)} />
                <label>Number</label>

                <input type="checkbox" defaultChecked={characterchange} onChange={() => setCharacterchange(!characterchange)} />
                <label>CharacteR</label>
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator />);