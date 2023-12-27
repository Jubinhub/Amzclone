import React, { useState } from "react";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";
const Email = "admin@admin.com"
const Password = "admin"
function Login() {  
  
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const[flag, setFlag] = useState(false);
  function checkMatch(e){
    e.preventDefault();
    if(email === Email && password === Password){
      setEmail("");
      setPassword("");
      setFlag(true);
    }
    else{
      setFlag(false);
      setEmail("");
      setPassword("");
    }
  }

  return (
    <>
      {flag === true && email === "" && password === "" && <Navigate to= '/homePage'/>}
      <div className="login_logo">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="login">
        <div className="login__container">
          <form className="login__from" onSubmit={(e)=>checkMatch(e)}>
            <h2>Sign in</h2>
            <br />
            <h5>Email or mobile phone number</h5>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br />
            <h5>Password</h5>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <button>Sign in</button>
            <br />
            <small>
              By continuing, you agree to Amazon's{" "}
              <span className="highlight">Conditions of Use </span>
              and <span className="highlight"> Privacy Notice.</span>
            </small>
          </form>
        </div>
        <div className="below__form">
          <br />
          <small style={{ color: "#808080" }}>New to Amazon?</small>
          <hr />
          <button>Create your Amazon account</button>
        </div>
      </div>
      <div className="loginfooter">
        <small>Conditions of Use </small>
        <br />
        <small> Privacy Notice </small>
        <br />
        <small> Help </small>
        <br />
        <br />
      </div>

      <small className="extremFoort">
        © 1996-2022, Amazon.com, Inc. or its affiliates
      </small>
    </>
  );
}

export default Login;
