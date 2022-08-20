import React from "react";
import "./landing.css"
// import data from "../../Assets/Data/Data";
import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
import {images} from "../../Assets/Images2/Index"
// import Pagination from "./pagination";

function Landing(){
  
    const[data,getData]=useState([])
    const URL = 'https://dummyjson.com/users';

    useEffect(()=>{
      fetchData()
    },[])

    const fetchData=() =>{
      fetch(URL)
        .then((res)=>
            res.json())

            .then((response)=>{
              console.log("data-->",response);
              if(response){
                getData(response.users&&response.users);
              }
            })
    }
    return(
        <div className="landing-page">
            <div className="landing-top">
              <div className="menu-Icon">
                


              </div>
            <div className="btn1">
                <Link to ="/dashboard"><button type="button" class="btn btn-primary">ADD USER</button></Link> <Link to ="/login"><button type="button" class="btn btn-primary">LOG OUT</button></Link>
                </div>
             </div>
            <div className="icon">
               <div className="line">
                  <Link to ="/home"></Link><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                   <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                   </svg> 
                   <p>YOUR LOGO</p>
                </div>
            </div>
            <div className="sidemenu">
              <div className="menu-bar">
                <div className="menu-icon1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-heart-fill" viewBox="0 0 16 16">
                    <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z"/>
                    <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z"/>
                  </svg> <p>Dashbord</p>
                   </div>
                   <div className="menu-icon2">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-heart-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555l-4.2 2.568a2.785 2.785 0 0 0-.051-.105c-.666-1.3-2.363-1.917-3.699-1.25-1.336-.667-3.033-.05-3.699 1.25l-.05.105L.05 3.555ZM11.584 8.91a4.694 4.694 0 0 1-.073.139L16 11.8V4.697l-4.003 2.447c.027.562-.107 1.163-.413 1.767Zm-4.135 3.05c-1.048-.693-1.84-1.39-2.398-2.082L.19 12.856A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144L10.95 9.878c-.559.692-1.35 1.389-2.398 2.081L8 12.324l-.551-.365ZM4.416 8.91c-.306-.603-.44-1.204-.413-1.766L0 4.697v7.104l4.49-2.752a4.742 4.742 0 0 1-.074-.138Z"/>
                    <path d="M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                    </svg><p>Messages</p>
                    </div>
                    <div classname="menu-icon3">
                    <Link to="/login" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg><p>Accounts</p></Link>
                </div>
               </div>
            </div>
          <div className="users-background">
            <p className="para1">Welcome Back</p>
          </div>
            <div className="users-page">
                <div className="user-table">
<table>
  <thead>
<tr>
  <th>Photo</th>
<th>FirstName</th>
<th>LastName</th>
<th>Maidname</th>
<th>DOB</th>
<th>Gender</th>
<th>Email</th>
<th>Address</th>
<th>Contact</th>
</tr>
</thead>
<tbody>





{data.map((data,index)=>(
<tr>
<td><img className="Profile-Image" src={data.image} alt="profile"/></td>
<td>{data.firstName}</td>
<td>{data.lastName}</td>
<td>{data.maidenName}</td>
<td>{data.birthDate}</td>
<td>{data.gender}</td>
<td>{data.email}</td>
<td>{data.address.address}</td>
<td>{data.phone}</td>
<td><img className="Form-Image" src={images.edit} alt="edit"/></td>
<td><img className="Form-Image" src={images.delete} alt="delete" /></td>
</tr>                                                                          
 ))}
 </tbody>
</table>
    </div>
      </div>

         </div>

    )
}
export default Landing;