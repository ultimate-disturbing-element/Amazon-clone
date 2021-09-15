import React,{useState} from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase";

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    const login = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            history.push("/");
        }).catch(e =>console.log(e.message))
    }
    const register = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            history.push("/");
        }).catch( e => console.log(e.message));
    }
  return (
    <div className="login">
      <Link path="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login_container" >
      <h1>Sign in</h1>
      <form type="submit">
        <h5>E-mail</h5>
        <input type="emal" value = {email} onChange={event =>setEmail(event.target.value)}/>
        <h5>Password</h5>
        <input type="password" value={password} onChange={event =>setPassword(event.target.value)}/>
        <button onClick={login} className="login_signInButton">Sign In</button>
      </form>
      <p>
        By Signing-in you agree to Amazon's Conditions of Use & Sale. Please see
        our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
      </p>
      <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
    </div>
    </div>
  );
}

export default Login;
