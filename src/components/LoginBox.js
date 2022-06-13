import React, { useState, useEffect } from 'react'
import './LoginBox.css'

function LoginBox({ incorrectText, onClick }) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        document.getElementById("login-incorrect").className = incorrectText ? "login-incorrect-visible" : "login-incorrect-invisible";
    }, [incorrectText]);

  return (
    <div id="login-box">
        <h2>Log in</h2>
        <div id="login-credentials">
            <label htmlFor="uname">User:</label>
            <input type="text" id="uname" name="uname" onChange={(e) => setUserName(e.target.value)}/>
            <label htmlFor="pword">Password:</label>
            <input type="password" id="pword" name="pword" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div id="login-buttons">
            <h4 id="login-incorrect" className="login-incorrect-invisible"><i>Incorrect Credentials. Try Again.</i></h4>
            <button type="button" className="btn btn-success" onClick={(() => onClick(username, password))}>Log In</button>
        </div>
    </div>
  )
}

export default LoginBox