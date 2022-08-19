import React ,{useState} from "react";
import './login.css';
import Background from '../images/login_page.jpg';
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"

function Login(){


  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const[password,setPassword]=useState("");

  const handleChange=event => {
    setUsername(event.target.value);

    console.log("value is:",event.target.value);
  };


  const handleChange2=event =>{
    setPassword(event.target.value);

    console.log("value is:",event.target.value);
  };


  function loginClick (){
      if(username=="VIVEK" && password=="12345"){
        navigate("/landing")
      }

  }
  return(
    <>
    <main>
      <div className="full">
        <img src={Background}alt="log"/>
        <div className="Form-container">
          <h1>Login your account !</h1>
          <p className="msg2">Enter your Username and Password to Login!</p>
          <form>
          <input type="text" placeholder="Enter Username" onChange={handleChange}/>
          <input type="text"  placeholder="Enter Password" onChange={handleChange2}/>
          <a onClick = {loginClick} className="Logbutton">login</a>
          </form>
          <Link to = "/forgot"><h3 className="fgt">forgot password</h3></Link>
          <nav>
          </nav>
        </div>
      </div>
    </main>
    </>
  );
}
export default Login;