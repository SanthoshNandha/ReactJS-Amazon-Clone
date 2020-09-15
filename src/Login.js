import React, { useState} from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase"


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in redirect to homepage
                history.push("/");
            })
            .catch((e) => {
                alert(e.message);
            })

    }

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // created a user so redirect to homepage
                history.push("/");
            })
            .catch((e) => {
                alert(e.message);
            })

    }

    return (
        <div className="login">
            <Link to="/login">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value = {email} onChange = {event => setEmail(event.target.value)} type="text" name="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange = {event =>  setPassword(event.target.value)} type="password" name="password" />
                    <button onClick={login} type="submit">Sign In</button>
                    <button onClick={register}>Create your Amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
