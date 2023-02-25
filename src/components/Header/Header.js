import './Header.css';
import logo from  './src/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import {DialogWindowExit} from '../../components/DialogWindowExit/DialogWindowExit';
import { useState} from 'react'
 
export const Header = ({
 
    isLoggedIn,
    setIsLoggedIn,
     registerLinkVisibility,
     welcomeLinkVisibility, 
    userName, 
    points
}) => {
  const [exit, setExit] = useState(false)
  const [dialogFormVisibility, setDialogFormVisibility]= useState(false) 

  const openForm = () =>{
    setDialogFormVisibility(true)
  }
  const hideDialogWindow =()=>{
    setDialogFormVisibility(false)
    
  }
  const hideDialogWindowExit =(e)=>{
    setDialogFormVisibility(false)
    e.preventDefault();
    localStorage.setItem('isLoggedIn', false)
    setIsLoggedIn(false);
    localStorage.setItem('userName', ''); 
     
  }
  
    registerLinkVisibility = !isLoggedIn? 'visible':'hidden';
    welcomeLinkVisibility = isLoggedIn? 'visible':'hidden';

  if (dialogFormVisibility === true){
     
      return ( 


              
          <div className="Header">
            <DialogWindowExit text = {"Вы уверены, что хотите выйти?"} 
      hideDialogWindow = {hideDialogWindow}
      hideDialogWindowExit = {hideDialogWindowExit}
      />
          <header className="App-header">
      <div className='logoWrapper'>  
      <img className='logo' src = {logo}/>
      </div>
      <div className='menuWrapper'>  
       
        <a className = "menu" href = "/">Главная</a>
        <a className = "menu" href = "/gallery">Сделать&nbsp;заказ</a>
        <a className = "menu" href = "/products">Продукты</a>
        <a className = "menu" href = "/reviews">Отзывы</a>
       
      
        </div>
      </header>

      </div>
      )
      
      
       
  }
  return (
     
    <div className="Header">
       
          <header className="App-header">
      <div className='logoWrapper'>  
      <img className='logo' src = {logo}/>
      </div>
      <div className='menuWrapper'>  
          
      <a className = "menu" href = "/">Главная</a>
        <a className = "menu" href = "/gallery">Сделать&nbsp;заказ</a>
        <a className = "menu" href = "/products">Продукты</a>
        <a className = "menu" href = "/reviews">Отзывы</a>
      
        <a className = "menu" href = "/register" style = {{visibility:registerLinkVisibility}}>Вход</a>
        <a className = "welcome" style = {{visibility:welcomeLinkVisibility}} >
          Добро&nbsp;пожаловать,&nbsp;{localStorage.getItem('userName')}!&nbsp;У Вас &nbsp;{localStorage.getItem('points')}&nbsp; баллов&nbsp;
          <LogoutIcon className='logoutIcon' onClick = {openForm } />  
          
          </a>
           
        </div>
      </header>
 
    </div>
  )
}
