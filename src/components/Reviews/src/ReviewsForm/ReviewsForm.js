 
import './ReviewsForm.css';
import {React, Component} from 'react';
import CloseIcon from '@mui/icons-material/Close'; 
import StarIcon from '@mui/icons-material/Star';

export class ReviewsForm extends Component  {
  
  state = {
    
    review: '',
    stars: 0,
    //добавить имя 
    showReviewsForm: false,
   
    grade: 0, 
    isColoredStar: false, 
    
  }
  
  handleReviewChange = (e) =>{
    this.setState({
      review: (e.target.value )
    })
  }
  createReview = () =>{
    const tname = localStorage.getItem('userName')
    
    const treview = {
      name: tname === '' ? "Anon" : tname,  
      text: this.state.review, 
      stars: 1, 
      id: this.props.reviewsArr.length +1
    }   
    this.props.addNewReview(treview)
     
    this.props.hideShowReviewsForm()
  }


  handleStarClick =()=>{
    this.setState({
      isColoredStar:true
    })
  }
  getStars = stars => {
    
    let allStars = []
    for (let i = 0; i < stars; i++) {
        
        allStars.push( <StarIcon onClick ={this.props.handleStarClick} 
          className= {this.state.isColoredStar? 'StarIconWhite' : 'StarIcon'}
         
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
           <span className='closeIcon'  onClick={ this.hideShowReviewsForm} >   <CloseIcon/>  </span>
           
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