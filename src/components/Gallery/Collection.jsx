import {React, useState} from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
 
export const Collection =({name, cost, images, basketClicked,  setBasketClicked})=> {
    const [plaginVis, setPlaginVis] = useState(false);
    const [inputValue, setInputValue] = useState(0)
const picClickEvent = (  ) =>{
  
        setPlaginVis(!plaginVis);
}
const basketClickEvent = ()=>{
    setBasketClicked(true)
    
}
const inputChange =(e)=>{
    setInputValue(e.target.value)
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
          
          /> кг за&nbsp;
          {inputValue * cost} рублей &nbsp;
          <h4 className="basket"> 
          Добавить в корзину <ShoppingBasketIcon className = 'ShoppingBasketIcon' 
          onClick = { basketClickEvent} />    </h4></h5></div>
           
        </div>
        :
        
        <Lightbox images={images} alt = "Item" onClose ={picClickEvent}/>
      
}

        </>
    );
}