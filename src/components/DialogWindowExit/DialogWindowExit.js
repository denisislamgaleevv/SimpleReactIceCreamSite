 

import './DialogWindowExit.css';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close'; 
import {useEffect} from 'react'

export const DialogWindowExit = ({ hideDialogWindow, hideDialogWindowExit,  text} ) => {
 
  useEffect(() => {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape'  ){
        hideDialogWindow(); 
      }
  })
});
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
            
             <h2>{text} </h2>
             
            </div>
             
            <div className='btnLearnMoreWrapper'>  
            <button className='btn1'   onClick={ hideDialogWindowExit}>Да</button>
            <button className='btn1'   onClick={ hideDialogWindow}>Нет</button>
            </div>
          </div>
      </div>
      </div>
  )
}
//onClick={}