 

 
import React from 'react';
import CloseIcon from '@mui/icons-material/Close'; 
import IcecreamIcon from '@mui/icons-material/Icecream';
export const BasketForm = ({ hideBasketForm, arr, collections } ) => {
  return (
    <div className="BasketForm">
       <div className = 'mainBasketForm'>
       <div className='allTextLearnMoreForm'>
       <div className='textLearnMoreForm'>
           <span className='closeIcon'  onClick={hideBasketForm} >   <CloseIcon/>  </span>
           
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
             
          <div className='textLearnMoreFormHeader'>
            
          <h2> Корзина </h2>
         
         {
           collections                                                                 
           
           .map((obj, index)=>(
               
            arr[index] != undefined ?
               <h3> <IcecreamIcon/>  {arr[index] * obj.cost  } {obj.name} </h3>
              : <></>
           )) 
         }
            </div>
             
            <div className='btnLearnMoreWrapper'>  
            <button className='btn'   onClick={  hideBasketForm } >Закрыть</button>
            </div>
          </div>
      </div>
      </div>
  )
}
//onClick={}