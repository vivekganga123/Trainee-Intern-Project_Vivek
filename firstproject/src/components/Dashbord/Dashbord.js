import React from "react";
import "./dashbord.css";
import {Link} from "react-router-dom";

function Dashbord(){
    return(
        <div className="maincomponent">
            <div className="component1">
            <svg className="listlogo" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
             </div>
            <div className="component2">
            </div>
            <div className="component4">
                <div className="form-pg">  
                <form>
                    <div className="left">
                
                        <div className="inputbx">
                            <label>Firstname:</label>
                            <input type="text" name="" placeholder="Enter your Firstname"/>
                        </div>
                        <br/>
                        <br/>
                          <div className="inputbx">
                             <label>Lastname:</label>
                             <input type="text" name="" placeholder="Enter your Secondname"/>
                        </div>
                        <br/>
                        <br/>
                        <div className="inputbx">
                            <label>Maidname:</label>
                            <input type="text" name="" placeholder="Enter your name"/>
                        </div>
                        <br/>
                        <br/>
                          <div className="inputbx">
                             <label>DOB:</label>
                             <input type="text" name="" placeholder="Enter your DOB"/>
                        </div>
                             <br/>
                             <br/>
                             <div className="inputbx">
                                <label>Gender:</label>
                                <select name="gender" id="gender">
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                            <br/>
                             <br/>
                            </div>
                        <div className="right">
                               <div className="inputbx">
                                <label>Email:</label>
                                <input type="text" name="" placeholder="Enter your email"/>
                                <br/>
                            <div className="inputbx">
                              <label>Address:</label>
                              <input className="addres" type="text" name="" placeholder="Enter your Address"/>
                            </div>
                                <br/>
                                <br/>
                            <div className="inputbx">
                                <label>contact:</label>
                                <input type="text" name="" placeholder="Enter your contact"/>
                            </div>
                            <br/>
                            <br/>
                        <div className="inputbx">
                        <label>Status:</label>
                            <select name="status" id="status">
                                <option value="">Select</option>
                                <option value="Male">Married</option>
                                <option value="Female">Single</option>
                            </select>
                        </div>
                            <br/>
                            <br/>
                        <div className="inputbx">
                            <label>photo:</label>
                            <input type="file" name=""/>
                        </div>                                            
                        </div>
                    </div>
                </form>

                <div className="menu-1">
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

            </div>
            <div className="savebtn">
               <Link to="/landing"><input type="submit" value="save"></input></Link>
            </div>


        </div>
    );
}
export default Dashbord 