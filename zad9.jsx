

import React, { useState } from "react";

import "./App.css";

function App() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="App">
            <h1 className="geeks">Podaj haslo</h1>
            
            <div>
                <label for="pass">Podaj haslo: </label>
                <input
                    id="pass"
                    type={
                        showPassword ? "text" : "password"
                    }
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />
                <br />
              
            </div>
            <br />
        </div>
    );
}

export default App;