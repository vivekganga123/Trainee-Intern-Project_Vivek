import React from "react";
import "./Home.css"
import image from "../images/walllpaper.jpg" 
import {Link} from "react-router-dom"

function Home (){
    return(
        <div className="main-page">
            <div className="homepage">
                <h1>
                    WELCOME HOME  <Link to ="/login"><button>move</button></Link>
                </h1>
                <div className="bckgrd">
                    <img className="fbg" src={image} alt="homepic"/>
                   
                </div>
            </div>

            
            {/* <div className="nav-bar">
            <nav className="nav">
           <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
             <Link to="/account">Account</Link>
           </li>
           
           </ul>
           </nav>           
            </div> */}



        </div>

    )

}
export default Home;