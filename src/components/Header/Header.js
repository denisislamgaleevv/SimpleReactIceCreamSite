import './Header.css';
import logo from  './src/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import {DialogWindow} from '../../components/DialogWindow/DialogWindow';

export const Header = ({
   
    isLoggedIn,
    setIsLoggedIn,
     registerLinkVisibility,
     welcomeLinkVisibility, 
    userName, 
    points
}) => {
  const handleExit = (e) =>{
    let isBoss = window.confirm("Выйти?");

    if ((( isBoss ))===true) {

    e.preventDefault();
    localStorage.setItem('isLoggedIn', false)
    setIsLoggedIn(false);
    localStorage.setItem('userName', ''); 
    }
  }
    registerLinkVisibility = !isLoggedIn? 'visible':'hidden';
    welcomeLinkVisibility = isLoggedIn? 'visible':'hidden';
  return (
    <div className="Header">
          <header className="App-header">
      <div className='logoWrapper'>  
      <img className='logo' src = {logo}/>
      </div>
      <div className='menuWrapper'>  
        <a className = "menu" href = "/">Главная</a>
        <a className = "menu" href = "/gallery">Галерея</a>
        <a className = "menu" href = "/products">Продукты</a>
        <a className = "menu" href = "/reviews">Отзывы</a>
        <a className = "menu" href = "/register" style = {{visibility:registerLinkVisibility}}>Вход</a>
        <a className = "welcome" style = {{visibility:welcomeLinkVisibility}} >
          Добро&nbsp;пожаловать,&nbsp;{localStorage.getItem('userName')}!&nbsp;У Вас &nbsp;{localStorage.getItem('points')}&nbsp; баллов&nbsp;
          <LogoutIcon className='logoutIcon' onClick = {handleExit} />  
          
          </a>
       
        </div>
      </header>
 
    </div>
  )
}
