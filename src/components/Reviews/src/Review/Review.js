 
import './Review.css';
import {React, useState, useEffect} from 'react';
import StarIcon from '@mui/icons-material/Star';

 
  const getStars = stars => {
    let allStars = []
     
    for (let i = 0; i < stars; i++) {
       
        allStars.push( <StarIcon className='StarIcon' />)
    }
    for (let i = stars; i < 5; i++) {
      allStars.push( <StarIcon className='StarIconWhite' />)
    }
    return(allStars)
    
  };


export const Review = ({stars,  name, text, time}) => {
   
  return (
    <div className="Review">
          
       <h3 className='h31'>   {name}  &nbsp;&nbsp;&nbsp;  { getStars(stars)} </h3> 
      
         
      
        <h3 className='h3'  сlassName = 'timeDiv'>{time }&nbsp;</h3>
        <div  >  
        {text}
        </div>

        
        <div>
        
        
        </div>
      </div>
  )
}
//onClick={}