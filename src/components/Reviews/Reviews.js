import './Reviews.css';
import React, { useState , Component } from 'react';
import axios from 'axios';
import {ReviewsForm} from './src/ReviewsForm/ReviewsForm';
import {Review} from './src/Review/Review'

export class Reviews extends Component {
  state = {
      scrollOn: true,
      showReviewsForm: false,
      reviewsArr: JSON.parse(localStorage.getItem('reviewsArr')), 
       
  }; 
  addNewReview = (treview) =>{
    axios.post('https://63708fe208218c267e017d80.mockapi.io/ArrDima', treview)
     
    .catch((err)=>{
      console.log(err)
    })

    const temp = [...this.state.reviewsArr]
    temp.push(treview)
    this.setState({
      reviewsArr: temp
    })
     
    localStorage.setItem('reviewsArr', JSON.stringify(temp))
  }
  hideShowReviewsForm = () =>{
      this.setState(({  scrollOn, showReviewsForm}) =>{
          return{ 
              scrollOn: true, 
              showReviewsForm: false
          }; 
      }) 
      
  }
  showShowReviewsForm = ( ) =>{
      this.setState(({  scrollOn, showReviewsForm}) =>{
          return{ 
              scrollOn: false,
              showReviewsForm: true

          }; 
      }) 
      
  }
   
  componentDidMount(){
     
      window.addEventListener('keyup', (e) => {
          if (e.key === 'Escape' && this.state.showReviewsForm){
             this.hideShowReviewsForm()
          }
      })
     
      fetch(`https://63708fe208218c267e017d80.mockapi.io/ArrDima`) 
    .then((res)=> res.json())
    .then((json) => {
      this.setState({
         reviewsArr: json
         
      })
      
    })
    .catch((err)=>{
        console.warn(err);
    
        alert('ошибка')
    });
   
     
  }
  
render( ){
   
  if (this.state.reviewsArr.length === 0)
    return <h2 className = 'zagruzka'>Загрузка данных...</h2>
  else
  return (
      
      <>  
     <div className='Reviews'> 
      <div className='btnReviewsBlock'>  
      <h2 className='h31'> Оставьте отзыв и мы сделаем вам скидку</h2>  <button className='btn' onClick={ this.showShowReviewsForm }>Оставить отзыв</button>
           </div>
   
          
           {(this.state.reviewsArr.reverse())                                                            
            .map((obj)=>(
              <Review 
              stars ={obj.stars}
              name ={obj.name} 
              text = {obj.text}
              time = {obj.time}
             />
        ))}
    
     { this.state.showReviewsForm ? (<>
      <ReviewsForm  
        hideShowReviewsForm = {this.hideShowReviewsForm}
        reviewsArr={this.state.reviewsArr}
        addNewReview = {this.addNewReview}
        userName = {this.props.userName}
        />
     </> ) :null
    } 
    </div>
     </>
  )

 
}
}
