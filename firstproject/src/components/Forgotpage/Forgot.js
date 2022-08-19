import React from "react";
import './forgot.css';
import Background from '../images/forgot_pass.jpg';
import {Link} from "react-router-dom" 

function Forgot(){
    return(
      <>
      <main>
        <div className="full">
          <img src={Background} alt="log"/>
          <div className="Form-container"> 
            <h1>Forgot password</h1>
            <p className="msg">Enter your email and we'll sent you a link to reset your password via email</p>
            <input type="text" placeholder="Enter your Email address"/>
            <Link to="/login"><p className="Logbutton">Submit</p></Link>
          </div>
        </div>
      </main>
      </>
    );
  }
  export default Forgot; 