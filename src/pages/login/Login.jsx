import React from "react";
import "../login/login.css";
import { Link } from "react-router-dom";

function Login() {
    return(
        
        <div class="center">
            <h1>E-learniing management system</h1>
            <form method="post">
                <div class="txt_field">
                    <input type="text" required />
                    <span></span>
                    <label>Username</label>
                </div>
                <div class="txt_field">
                    <input type="password" required />
                    <span></span>
                    <label>Password</label>
                </div>
                <div class="pass">Forgot Password?</div>
                <Link to="/card">
                    <input type="submit" value="Login" />
                </Link>
                
                
            </form>
        </div>
        
    )
}

export default Login;