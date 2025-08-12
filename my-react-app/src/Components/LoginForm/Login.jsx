import React from "react";  
import './Login.css'; 
import { FaRegUserCircle } from "react-icons/fa";
import { FaLock } from "react-icons/fa";import { TiLockClosedOutline } from "react-icons/ti";

const Login = () => {
  return (
    <div className="wrapper"> 
    <form action="">
        <h1>Login</h1>
        <div className="role" placeholder="Role">
            <select required>
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="receptionist">Receptionist</option>
                <option value="nurse">Nurse</option>
            </select>
        </div>
        <div className="input-box">
            <input type="emial" placeholder="Email" required />
            <FaRegUserCircle className="icon"/>
        </div>
        <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon"/>
        </div>
        <div className="remember">
            <label>
                <input type="checkbox" />
                Remember me
            </label>
            <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;