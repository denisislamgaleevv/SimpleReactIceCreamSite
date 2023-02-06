 

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
            
             <h2>   SweetCold - крупнейший производитель мороженого</h2>
             
            </div>
            <div className='textLearnMoreForm'>
            
            Значимость этих проблем настолько очевидна, что сложившаяся структура организации способствует подготовки и реализации существенных финансовых и административных условий.
           
            </div>
            <div className='textLearnMoreForm'>
            
            Значимость этих проблем настолько очевидна, что сложившаяся структура организации способствует подготовки и реализации существенных финансовых и административных условий.
           
            </div>
            <div className='textLearnMoreForm'>
            
            Значимость этих проблем настолько очевидна, что сложившаяся структура организации способствует подготовки и реализации существенных финансовых и административных условий.
           
            </div>
            <div className='textLearnMoreForm'>
             
            sweet_cold@gmail.com
            
            </div>
            <div className='btnLearnMoreWrapper'>  
            <button className='btn'   onClick={ hideShowLearnMoreForm} >Закрыть</button>
            </div>
          </div>
      </div>
      </div>
  )
}
//onClick={}