import { Input } from '@material-ui/core';
import React, { useState } from 'react';
import './Login.css';


export default function Login() {
    const[action, setAction] = useState('Login') 
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
            </div>
            <div className='inputs'>
            {action==="Login" ?<div></div>:  <div className='input'> 
                 <img src="" alt="" />
               < input type='name' placeholder='name'/>  
               </div>||<div className='input'>
                    <img src="" alt="" />
                  < input type='mobail nummber'placeholder='mobail number'/>  
                  </div> }
              {/* apan jevva ation sobat he  geto hai tevva login sobat nai rahat */}
                  <div className='input'>
                    <img src="" alt="" />
                  < input type='email'placeholder='email'/>  
                  </div> 
                  
                  <div className='input'>
                    <img src="" alt="" />
                  < input type='password'placeholder='password'/>  
                  </div> 
        </div>
        {action === "signUp" ? <div></div>:
          <div className='forget'>Lost password ? <span>click hare</span></div>}
      
        <div className='submit-container'>
            <div className={action==="Login" ? "submit gray":"submit"}
             onClick={()=>{setAction("signUp")}}>signUp</div>
            <div className={action==="signUp" ? "submit gray":"submit"} 
            onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    
    </div>
  );
}
