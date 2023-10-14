import React, { useState } from 'react'
import './LoginSignUp.css'


import user_icon from '../Assets/person.jpeg'
import email_icon from '../Assets/email.jpeg'
import password_icon from '../Assets/password.jpeg'


 export const LoginSignUp = () => {

    const [action,setAction] = useState('Sign Up');

  return (
   
   <div>

      {/* <head>
         <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
      </head> */}
      
      <nav>
   
      <input type='checkbox' id='check'/>
      <label for='check' class='checkbtn'>
         <i class='fas fa-bars'></i>
      </label>
        <label class="logo">SIGN UP PAGE</label>
        <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">contact</a></li>
            <li><a href="#">Feedback</a></li>
        </ul>

    </nav>
      

    <div className="container" >




       <div className='header'>
        <div className='text'>{action}</div>     
        <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action==='Login'?<div></div>:<div className='input'>
              <img   src={user_icon}  alt='' />
              <input type='text' placeholder='Name'/>
           </div>}
           
           <div className='input'>
              <img src={email_icon} alt='' />
              <input type='email' placeholder='Email Id'/>
           </div>
           <div className='input'>
              <img src={password_icon} alt='' />
              <input type='password' placeholder='Password'/>
           </div>
        </div>
        {action==='Sign Up'?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here!</span></div> }
          
        <div className="submit-container">
        <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>     
        <div className={action==='Sign Up'?'submit gray':'submit'} onClick={()=>{setAction('Login')}}>Login</div>
        </div>
    </div>
    </div>
  )
}
