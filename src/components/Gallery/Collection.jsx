import {React, useState} from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {basketjson} from '../../components/json/basket'

export const Collection =({key, num,  name, cost, images, count, basketClickEvent, setInputValueArr, inputValueArr})=> {
    const [plaginVis, setPlaginVis] = useState(false);
    const [inputValue, setInputValue] = useState(0);
     

    
const picClickEvent = (  ) =>{
  
        setPlaginVis(!plaginVis);
}
 
const inputChange =(e)=>{
    setInputValue(e.target.value)

    let copy = Object.assign([], inputValueArr);
     
    
    copy[num] = ( e.target.value); 
    setInputValueArr(copy);

 
}
 
    return (
        
        <>  
        
        { 
        
        !plaginVis?
    <div className="collection"  >
        <img  className="collection__big" src={images[0]} alt="Item" onClick = {picClickEvent}/>
        <div className="collection__bottom">
        <img  className="collection__mini" src={images[1]} alt="Item" />
        <img  className="collection__mini" src={images[2]} alt="Item" />
        <img  className="collection__mini" src={images[3]} alt="Item" />
     
        </div>
        <h4>{name}   &nbsp; &nbsp; &nbsp; &nbsp;  {cost}/р за кг.   </h4>
        <div  ><h5> 
            
         <input className="input"
          type = 'number'
          onChange = {inputChange}
          value = {inputValueArr[key]}
          /> кг за&nbsp;
          {inputValue * cost} рублей &nbsp;
          <h4 className="basket"> 
         <div className="btnWrapper"> 
          
           
           </div> 
          
          <ShoppingBasketIcon className = 'ShoppingBasketIcon' 
          />    </h4></h5></div>
           
        </div>
        :
        
        <Lightbox images={images} alt = "Item" onClose ={picClickEvent}/>
      
}

        </>
    );
}

//<button className = 'btn2' onClick={basketClickEvent(inputValue)}  > 
// Добавить в корзину 
//</button>