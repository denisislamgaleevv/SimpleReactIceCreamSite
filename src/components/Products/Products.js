import './Products.css';
import React from 'react';
import pic4 from './src/4.png'
import pic5 from './src/5.png'
import pic2 from './src/2.png'
import pic6 from './src/6.png'
import s1 from './src/s1.png'
import malina from './src/malina.png'
import limon from  './src/limon.png'; 
export const Products = () => {
  return (
    <div className="Products">
       
       <table border="0" className='table'>
         <tr >
         <td  className='yacheykaText'> 
            
           <div className='malinaPicOneColorWrapper'>  
           <div className='malinaTextWrapper'>  
              Малиновое мороженое
           </div>
           <div className='malinaTextWrapperOp'>  
           Значимость этих проблем настолько очевидна, что сложившаяся структура организации способствует подготовки и реализации существенных финансовых и административных условий.
           </div>
             </div>
           </td>
           <td  className='yacheyka22'> 
           <img className='malinaPic' src = {malina}/> 
           </td>
           <td  className='yacheyka22'> 
           <img className='malinaPicOneColor' src = {pic6}/> 
           </td>
         </tr>
        </table>
       <table border="0" className='table'>
         <tr >
           <td  className='yacheyka'> 
             <div className='limonPicOneColorWrapper'>  
                <img className='limonPicOneColor' src = {pic4}/> 
             </div>
           </td>
           <td  className='yacheyka'> 
           <img className='listPic' src = {pic2}/> 
           <img className='limonPic' src = {limon}/> 
        
           </td>
           <td  className='yacheykaText'> 
           <div className='limonTextWrapper'>  
              Лимонное мороженое  
           </div>
           <div className='limonTextWrapperOp'>  
           Значимость этих проблем настолько очевидна, что сложившаяся структура организации способствует подготовки и реализации существенных финансовых и административных условий.
           </div>
           </td>
         </tr>
        </table> 

       <table border="0" className='table'>
         <tr >
         <td  className='yacheykaText'> 
           <div className='chocoTextWrapper'>  
              Шоколадное мороженое
           </div>
           <div className='chocoTextWrapperOp'>  
           Значимость этих проблем настолько очевидна, что сложившаяся структура организации способствует подготовки и реализации существенных финансовых и административных условий.
           </div>
           </td>
           <td  className='yacheyka2'> 
           <img className='chocoPic' src = {s1}/> 
           </td>
           <td  className='yacheyka2'> 


           <div className='chocoPicOneColorWrapper'>  
                <img className='chocoPicOneColor' src = {pic2}/> 
             </div>

           
           </td>
         </tr>
        </table>

 
 
    </div>
  )
}
