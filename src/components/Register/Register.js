import './Register.css';
import {React,   Component} from 'react';
import pic1 from './src/1.png'
import pic2 from './src/2.png'
import pic3 from './src/3.png'
import pic4 from './src/4.png'
import axios from 'axios';
import pic6 from './src/6.png' 
import ReactDOM from 'react-dom'
import {DialogWindow} from '../../components/DialogWindow/DialogWindow';

export class Register extends Component {
  state = {
    login: '', 
    password: '', 
    points: 0,
    regArr : [], 
     
    dialogFormVisibility1: false, 
    dialogFormVisibility2: false
  }; 
 
  hideDialogWindow = () =>{
    this.setState(({ }) =>{
        return{ 
             
          dialogFormVisibility1: false, 
          dialogFormVisibility2: false
        }; 
    }) 
    
  }
 
    
 
  componentDidMount(){
     
   fetch(`https://63708fe208218c267e017d80.mockapi.io/Arr`) 
  .then((res)=> res.json())
  .then((json) => {
    
    this.setState({
      
   
       regArr: json
    })
    
  })
  .catch((err)=>{
      console.warn(err);
      alert('ошибка')
  });
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' ){
       this.hideDialogWindow()
    }
})
}
  
  
  addNewReg = ( ) =>{    //регистрация нового пользователя
    const treg = {
      login: this.state.login, 
      password: this.state.password, 
      points: this.state.points,  
      id: this.state.regArr.length +1
    }   
   
    
    for (let i = 0; i < this.state.regArr.length; i++) {
       
      if (( this.state.regArr[i].login) === treg.login){
       
        this.setState({
           dialogFormVisibility1:true
         })
          
        
         
         return 0
      }
       
    }
    axios.post('https://63708fe208218c267e017d80.mockapi.io/Arr', treg)
    .catch((err)=>{
      console.log(err)
      alert(err)
    })

    const temp = [...this.state.regArr]
    temp.push(treg)
    
    this.setState({
      regArr: temp, 
      points:  treg.points
    })
   
    localStorage.setItem('points',    treg.points)
   
    localStorage.setItem('isLoggedIn', true);
    this.props.setIsLoggedIn(true); 
    localStorage.setItem('userName', this.state.login); 
    this.props.setUserName(this.state.login);
     
      
      
  }
  handleLogIn = () =>{     //вход уже зареганного пользователя
    const treg = {
      login: this.state.login, 
      password: this.state.password, 
      points: this.state.points,  
      id: this.state.regArr.length +1
    }  
   let forPoint = 0
    for (let i = 0; i < this.state.regArr.length; i++) {
      if ((( this.state.regArr[i].login) === treg.login) ){
        if ((this.state.regArr[i].password != treg.password)){
          this.setState({
            dialogFormVisibility2: true
          })
          return 0
        }
        else {

          forPoint =  this.state.regArr[i].points
          localStorage.setItem('points',  forPoint )
          this.setState({
            points:  forPoint
          })     
          localStorage.setItem('isLoggedIn', true);
          this.props.setIsLoggedIn(true); 
          localStorage.setItem('userName', this.state.login); 
          this.props.setUserName(this.state.login); 
        }
            
      }
       
       
    }
    
    
 
  }

  handleLoginChange = (e) =>{
    this.setState({
      login: e.target.value
    })
    
  }

  handlePasswordChange = (e) =>{
    this.setState({
      password: e.target.value
    })
  }



  
   
  render(){
   
  if (this.state.dialogFormVisibility1 === true){
     
    return (
      <>  
         <DialogWindow text = {"Вы уже зарегистрированы!"} 
    hideDialogWindow = {this.hideDialogWindow}/>
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
       onChange={this.handleLoginChange}
        placeholder='Логин'
         name = "login"
          className='inputReg'
          required
          /> 
      </div>
       <div className='regElem'>
       <input type = "password"
        onChange={this.handlePasswordChange} 
        placeholder='Пароль'
          name = "parol"
          className='inputReg' 
          required/> 
      </div>
      <div className='regElem2'>
      <button className='btnReg' onClick={this.addNewReg}>Регистрация</button>
       <button className='btnReg'   onClick={this.handleLogIn}>Войти</button>
      
       </div>
       <div className='smallFormText'>  
       
       </div>
       </form>
   </div>
  
</>
    )
  }
  else if (this.state.dialogFormVisibility2 === true){
    
    return ( <>  
    
    <DialogWindow text = {"Неверный пароль!"} 
    hideDialogWindow = {this.hideDialogWindow}/>

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
        onChange={this.handleLoginChange}
         placeholder='Логин'
          name = "login"
           className='inputReg'
           required
           /> 
       </div>
        <div className='regElem'>
        <input type = "password"
         onChange={this.handlePasswordChange} 
         placeholder='Пароль'
           name = "parol"
           className='inputReg' 
           required/> 
       </div>
       <div className='regElem2'>
       <button className='btnReg' onClick={this.addNewReg}>Регистрация</button>
        <button className='btnReg'   onClick={this.handleLogIn}>Войти</button>
       
        </div>
        <div className='smallFormText'>  
        
        </div>
        </form>
    </div>

</>
    )
  }
  
  else return (
    
     
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
        onChange={this.handleLoginChange}
         placeholder='Логин'
          name = "login"
           className='inputReg'
           required
           /> 
       </div>
        <div className='regElem'>
        <input type = "password"
         onChange={this.handlePasswordChange} 
         placeholder='Пароль'
           name = "parol"
           className='inputReg' 
           required/> 
       </div>
       <div className='regElem2'>
       <button className='btnReg' onClick={this.addNewReg}>Регистрация</button>
        <button className='btnReg'   onClick={this.handleLogIn}>Войти</button>
       
        </div>
        <div className='smallFormText'>  
        
        </div>
        </form>
    </div>
    )
}

 
}
