import {Link} from "react-router-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";



import '../src/components/Loginpage/login.css';
import "../src/components/Forgotpage/forgot.css"
import"../src/components/Home/Home.css";
import"../src/components/Dashbord/dashbord.css";
import Home from "../src/components/Home/Home"
import Login from '../src/components/Loginpage/Login';
import Forgot from './components/Forgotpage/Forgot';
import Dashbord  from "./components/Dashbord/Dashbord";
import Landing from "./components/Landing/Landing";
// import UserLogin from "../src/components/UsersLogin/UserLogin";



import React from 'react';
import ReactDOM from 'react-dom';
  






function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
    <Route path="home" element={<Home />}/>
    <Route path="login" element={<Login/>}/>
    <Route path="forgot" element={<Forgot />}/>
     <Route path ="dashboard" element={<Dashbord />}/>  
     <Route path="landing" element={<Landing />}/>   
        </Routes>
      </BrowserRouter>

  
{/* ReactDOM.render(
  <React.StrictMode>
    <div className="container">
       <UserLogin/>
    </div>
  </React.StrictMode>,
         document.getElementById('root')
);
  
serviceWorker.unregister(); */}
      
     
    </div>
  );
}

export default App;
