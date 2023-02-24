 
import './ReviewsForm.css';
import {React, Component} from 'react';
import CloseIcon from '@mui/icons-material/Close'; 
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios'
import moment from 'moment';

export class ReviewsForm extends Component  {
  
  state = {
    
    review: '',
    stars: 0,
    //добавить имя 
    showReviewsForm: false,
   
    grade: 0, 
    coloredStarCount: 1, 
    
  }
  
  handleReviewChange = (e) =>{
    this.setState({
      review: (e.target.value )
    })
  }
  createReview = (e) =>{
    var tname = (localStorage.getItem('userName'))
    if (tname != ''){
      var tpoints =  Number(localStorage.getItem('points')) + Number(10)
      localStorage.setItem('points', tpoints )
       
    }
     
    
    const treview = {
      name: tname === '' ? "Anon" : tname,  
      text: this.state.review, 
      stars:  this.state.coloredStarCount, 
      id: this.props.reviewsArr.length +1, 
      time:      String(moment().format('MMMM Do YYYY'))         //задание времени отзыва
    }   


    
    

    this.props.addNewReview(treview)
     
    this.props.hideShowReviewsForm()
  }


  handleStarClick =()=>{
    if (this.state.coloredStarCount<5){
    this.setState({
      coloredStarCount: this.state.coloredStarCount+1
    
    })
    console.log( this.state.coloredStarCount ) ///////// 
  }
  else{
    this.setState({
      coloredStarCount: 1
    
    })
  }
  }
  getStars = stars => {
    
    let allStars = []
    for (let i = 0; i < this.state.coloredStarCount; i++) {
        allStars.push( <StarIcon onClick ={this.handleStarClick} 
          className= {'StarIcon1'}
           />)
    }
    for (let i = 0; i < Number(stars) -  Number( this.state.coloredStarCount); i++) {
        
      allStars.push( <StarIcon onClick ={this.handleStarClick} 
        className= { 'StarIconWhite1'}
       
         />)
       
    }
    return(allStars)
    
  };

render(){
  return (
    <div className="ReviewsForm">
       <div className = 'mainReviewsForm'>
       <div className='allTextReviewsForm'>
       <div className='textReviewsForm'>
           <span className='closeIcon'  onClick={ this.props.hideShowReviewsForm} >   <CloseIcon/>  </span>
           
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
         
             {this.getStars(5)}
            <textarea type = "text" 
              placeholder='Отзыв'
              name = "login"
              className='inputReviews'
              value = {this.state.review}
              onChange = { this.handleReviewChange}
              required
           /> 
             
             
            <div className='btnLearnMoreWrapper'>  
            <button className='btn'   onClick={ this.createReview} >Оставить отзыв</button>
            </div>
          </div>
      </div>
    </div>
  )
  
}
}
//onClick={}