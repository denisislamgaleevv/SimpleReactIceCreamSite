 

import './DialogWindow.css';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close'; 

export const DialogWindow = ({ hideDialogWindow, text} ) => {
  return (
    <div className="LearnMoreForm">
       <div className = 'mainDialogWindow'>
       <div className='allTextLearnMoreForm'>
       <div className='textLearnMoreForm'>
           <span className='closeIcon'  onClick={hideDialogWindow} >   <CloseIcon/>  </span>
           
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
          <div className='textLearnMoreFormHeader'>
            
             <h2>  {text} </h2>
             
            </div>
             
            <div className='btnLearnMoreWrapper'>  
            <button className='btn'   onClick={ hideDialogWindow} >Закрыть</button>
            </div>
          </div>
      </div>
      </div>
  )
}
//onClick={}