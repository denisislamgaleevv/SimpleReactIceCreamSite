 

import './LearnMoreForm.css';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close'; 

export const LearnMoreForm = ({ hideShowLearnMoreForm} ) => {
  return (
    <div className="LearnMoreForm">
       <div className = 'mainLearnMoreForm'>
       <div className='allTextLearnMoreForm'>
       <div className='textLearnMoreForm'>
           <span className='closeIcon'  onClick={ hideShowLearnMoreForm} >   <CloseIcon/>  </span>
           
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
          <div className='textLearnMoreFormHeader'>
            
             <h2>Ваша заявка:</h2>
             
            </div>
            <div className='textLearnMoreForm'>
            <div className='Reg' >
              <div> 
            <input type = "text" 
     
         placeholder='Фамилия'
           
           className='inputReg'
           required
           /> 
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
            <div>
            <input type = "text" 
       
         placeholder='Имя'
         
           className='inputReg'
           required
           /> 
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
            <div>
            <input type = "text" 
        
           placeholder='Контактный номер'
         
           className='inputReg'
           required
           /> 
            </div>
                
            </div>
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
            <div className='btnLearnMoreWrapper'>  
            <button className='btn'   onClick={ hideShowLearnMoreForm} >Отправить</button>
            </div>
          </div>
      </div>
      </div>
  )
}
//onClick={}