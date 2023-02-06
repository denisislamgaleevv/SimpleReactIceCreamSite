import './Register.css';
import {React, useState} from 'react';
import pic1 from './src/1.png'
import pic2 from './src/2.png'
import pic3 from './src/3.png'
import pic4 from './src/4.png'
 
import pic6 from './src/6.png' 


export const Register = (
  props
   
  ) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('')

  const handleLogIn = (e) =>{
    e.preventDefault(); 
    localStorage.setItem('isLoggedIn', true); 
    localStorage.setItem('userName', login); 
    props.setUserName(login);   
    props.setIsLoggedIn(true);
  }

  const handleLoginChange = (e) =>{
    setLogin(e.target.value ); 
  }

  const handlePasswordChange = (e) =>{
    setPassword(e.target.value ); 
  }

  return (
    <div className="Reg">
       <img src = {pic1} className='morozReg'/> 
      
       <img src = {pic6} className='malinaReg'/> 
     
      <form className='regForm'>  
      <div className='probel1'>
            &nbsp; 
            </div>
        
      
      <h3 className='regElem1'>Вход/Регистрация</h3>
     
       <div className='regElem3' >
        <input type = "text" 
        onChange={handleLoginChange}
         placeholder='Логин'
          name = "login"
           className='inputReg'
           required
           /> 
       </div>
        <div className='regElem'>
        <input type = "password"
         onChange={handlePasswordChange} 
         placeholder='Пароль'
           name = "parol"
           className='inputReg' 
           required/> 
       </div>
       <div className='regElem2'>
       <button className='btnReg' onClick={handleLogIn}>Регистрация</button>
        <button className='btnReg'>Войти</button>
       
        </div>
        <div className='smallFormText'>  
        
        </div>
        </form>
    </div>
  )
}
