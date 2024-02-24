import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../assets/username.png'
import email_icon from '../assets/emailicon.png'
import password_icon from '../assets/password.png'
import phn_icon from '../assets/phn.png'
import plate_icon from '../assets/plateicon.png'

const LoginSignup = () => {

const [action,setAction] = useState("User Login");

  return (
    <div className='container'>
        <div className='header'>
        <div className='submit-container'>
            <div className={action==="User Login" ? "submit gray" : "submit"} onClick={()=>{setAction("User SignUp")}}>User SignUp</div>
            <div className={action==="User SignUp" ? "submit gray" : "submit"} onClick={()=>{setAction("User Login")}}>User Login</div>
        </div>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            { action==="User Login" ? <div></div> :  <div className='input'>
              <img src={user_icon} alt=''/>
              <input type='text' placeholder='Name'/>  
              </div> 
            }
           
            <div className='input'>
              <img src={email_icon} alt=''/>
              <input type='email' placeholder='Email id'/>  
            </div>
           
            <div className='input'>
              <img src={password_icon} alt=''/>
              <input type='password' placeholder='Password'/>  
            </div>
            
            { action==="User Login" ? <div></div> :  <div className='input'>
           
              <img src={plate_icon} alt=''/>
              <input type='text' placeholder='Vehicle Number'/>  
              </div> 
            }

            { action==="User Login" ? <div></div> :  <div className='input'>
           
             <img src={phn_icon} alt=''/>
              <input type='number' placeholder='Mobile Number'/>  
              </div> 
            }
                    
        </div>

        {action==="User SignUp" ? <div></div> :  <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
       
     </div>
  );
};

export default LoginSignup