import './App.css';
import {Main} from './components/Main/Main';
import {Register} from './components/Register/Register';
import {Products} from './components/Products/Products';
import {Routes, Route, BrowserRouter,  Navigate} from 'react-router-dom';
import {React, useState} from 'react';
import {Gallery } from './components/Gallery/Gallery'

import {Header} from './components/Header/Header'
import {Reviews} from './components/Reviews/Reviews'
 
export function App() {
   
  const [basketArr, setBasketArr] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') return true
    
    return false
   
  })
  const [points, setPoints] = useState((localStorage.getItem('points')  ) )
  const [userName, setUserName] = useState((localStorage.getItem('userName')) )
  
  /* 
  const mysql = require('mysql');  //подключаем mysql
  const conn = mysql.createConnection({
   host: "127.0.0.1:3306",
  user: "root",
  database: "users",
  password: "",
  }); 
  conn.connect(err =>{
    if (err) {
      console.log(err); 
      return(err); 
    }
    else{
      console.log("database_ok"); 
    }
  }
    )
    */
      
  return (
 
    <>  
      
    <div className="App">
  
     <Header  
     props
    userName = {userName}
    setIsLoggedIn= {setIsLoggedIn}
     isLoggedIn ={isLoggedIn}
     points = { points}
     />
      <main>  
      <div className="line"></div> 
     
        <BrowserRouter>  
          <Routes>
            <Route path = "/" element = {<Main/>}/>
            <Route path = "/gallery" element = {<Gallery 
         
            
             />}/>
          
            <Route path = "/register" element = {!isLoggedIn?<Register
             props  
             setUserName = {setUserName} 
             setIsLoggedIn ={setIsLoggedIn}
             isLoggedIn ={isLoggedIn} 
             regArr = {(localStorage.getItem('regArr'))}
             />
             :<Navigate to="/"/>}/>
            <Route path = "/products" element = {<Products/>}/>
            <Route path = "/reviews" element = {
            <Reviews
            props
              points = {points}
              userName = {userName}
              isLoggedIn = {isLoggedIn}
              regArr = {(localStorage.getItem('regArr'))}
            />}/>
            
              
          </Routes>
        </BrowserRouter>
      </main>
    </div>
    
    </>
    
  );
}

export default App;
/*
 <Router>  
        <Routes>
          <Route path = "/" element = {<Main/>}/>
          <Route path = "/register" element = {<Register/>}/>
          <Route path = "/review" element = {<Review/>}/>
        </Routes>
      </Router>  
 */