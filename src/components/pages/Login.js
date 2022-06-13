import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import LoginBox from '../LoginBox'

function Login() {
  const [incorrect, setIncorrect] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  let attemptSignIn = ((username, password) => {
    signInWithEmailAndPassword(auth, username, password)
      .then(() => {
        setIncorrect(false);
        navigate("/admin");
      })
      .catch((error) => {
        setIncorrect(true);
      });
  });

  return (
    <div className='clear-container'>
        <LoginBox incorrectText={incorrect} onClick={(u, p) => attemptSignIn(u, p)}/>
    </div>
  )
}

export default Login;