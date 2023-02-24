import './Main.css';
import React, { useState , Component } from 'react';
 
 
import brown from  './src/brown.jpg'; 
import assorti from  './src/assorti.jpg'; 
 
import pic1 from './src/1.png'
 
 


import pic3 from './src/3.png'

 
 
import beaut from './src/beaut.jpg'

import team1 from './src/team1.jpg'
import team2 from './src/team2.jpg'
import team3 from './src/team3.jpg'
import team4 from './src/team4.jpg'
import icon1 from './src/icon1.png'
import icon2 from './src/icon2.png'
import icon3 from './src/icon3.png'
import icon4 from './src/icon4.png'
import icon5 from './src/icon5.png'
import icon6 from './src/icon6.png'

import inst from './src/inst.png'
import vk from './src/vk.png'
import facebook from './src/facebook.png'

import {LearnMoreForm} from './src/LearnMoreForm/LearnMoreForm';
import {DialogWindow} from '../../components/DialogWindow/DialogWindow';

import reviews1 from './src/reviews1.jpg'


export class Main extends Component {
    state = {
        scrollOn: true,
        showLearnMoreForm: false,
        
    }; 
    
    hideShowLearnMoreForm = () =>{
        this.setState(({  scrollOn, showLearnMoreForm}) =>{
            return{ 
                scrollOn: true, 
                showLearnMoreForm: false
            }; 
        }) 
        
    }
    showShowLearnMoreForm = ( ) =>{
        this.setState(({  scrollOn, showLearnMoreForm}) =>{
            return{ 
                scrollOn: false,
                showLearnMoreForm: true
            }; 
        }) 
        
    }
    componentDidMount(){
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Escape' && this.state.showLearnMoreForm){
               this.hideShowLearnMoreForm()
            }
        })
    }
    
render(scrollOn){
     const isScrollOn = scrollOn ? 'visible':'hidden';
     
    return (
        
        <>  
       
         <div className="Main"  >
         <header className="Main-header">
          
            
           <table border="0" className='table'> 
           
           <tr>
           <td className='probel'> 
               <div>  
                 <img src = {pic1} className='moroz'/> 
               </div>
             </td>
             <td className = 'mainTable'> 
             Самые свежие натуральные ингредиенты при производстве мороженого
             <div className='pontDesc'>
             Значимость этих проблем настолько очевидна, что сложившаяся структура организации способствует подготовки и реализации существенных финансовых и административных условий.
             </div>
             </td>
             
             <td className='probel'> 
             <div>  
             <img src = {pic3} className='cacao'/> 
             </div>
             </td>
           </tr>
            
           <td className='probel'> </td>
           <td>  <button className='btn' onClick={ this.showShowLearnMoreForm }>Оставить заявку</button></td>
          
           
    </table>
         </header>
         <body style={{overflow:isScrollOn}} >
         <div className="products">
       <div className="pictures">
          
           <div className="productItem">
           <img className="productPhoto" src={assorti} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Название продукта</div>
                   <div className="productText">описание продукта</div>
               </div>
           </div>
           <div className="productItem">
           <img className="productPhoto" src={brown} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Название продукта</div>
                   <div className="productText">описание продукта</div>
               </div>
           </div>
           <div className="productItem">
           <img className="productPhoto" src={beaut} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Название продукта</div>
                   <div className="productText">описание продукта</div>
               </div>
           </div>
           <div className="productItem">
           <img className="productPhoto" src={brown} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Название продукта</div>
                   <div className="productText">описание продукта</div>
               </div>
           </div>
           </div>
           <div className="pictures">
           <div className="productItem">
           <img className="productPhoto" src={brown} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Название продукта</div>
                   <div className="productText">описание продукта</div>
               </div>
           </div>
           <div className="productItem">
           <img className="productPhoto" src={assorti} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Название продукта</div>
                   <div className="productText">описание продукта</div>
               </div>
           </div>
           <div className="productItem">
           <img className="productPhoto" src={beaut} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Название продукта</div>
                   <div className="productText">описание продукта</div>
               </div>
           </div>
           <div className="productItem">
           <img className="productPhoto" src={brown} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Название продукта</div>
                   <div className="productText">описание продукта</div>
               </div>
           </div>
           </div>
       </div>
           
            
           
            
    
   
            
               <div className="features">
               <div className="features1">
                   <div className="featuresItem">
                       <img className="featuresIcon" src={icon1} alt=""/>
                       <h4 className="featuresTitle">Бесплатная доставка</h4>
                       <div className="featuresText">По городу Уфа доставка Бесплатная. До 10км от города 2000, дальше - цена договорная</div>
                   </div>
                   <div className="featuresItem">
                   <img className="featuresIcon" src={icon2} alt=""/>
                   <h4 className="featuresTitle">Лучшие цены</h4>
                   <div className="featuresText">Мы постоянно пытаемся оптимизировать пути доставки и производства для лучшего предложения для вас </div>
                   </div>
                   <div className="featuresItem">
                   <img className="featuresIcon" src={icon3} alt=""/>
                   <h4 className="featuresTitle">У нас все законно</h4>
                   <div className="featuresText">Мы работаем согласно законодательству РФ и всегда предоставляем все отчеты</div>
                   </div>
                   </div>
                   <div className="features1">
                   <div className="featuresItem">
                   <img className="featuresIcon" src={icon4} alt=""/>
                   <h4 className="featuresTitle">Качественная упаковка</h4>
                   <div className="featuresText">Мы закупаем качественные материалы для упаковки чтобы мороженое попало вам в руки без проблем и в наилучшем состоянии</div>
                   </div>
                   <div className="featuresItem">
                   <img className="featuresIcon" src={icon5} alt=""/>
                   <h4 className="featuresTitle">Отличное качество</h4>
                   <div className="featuresText">Мы регулярно проверяем наших поставщиков и тчательно следим за качеством товара</div>
                   </div>
                   <div className="featuresItem">
                   <img className="featuresIcon" src={icon6} alt=""/>
                       <h4 className="featuresTitle">Растущая популярность</h4>
                       <div className="featuresText">Мы всегда рады новым покупателям и делаем все возможное чтобы продолжать сотрудничество</div>
                   </div>
                   </div>
               </div> 
            
    
   
       <div className="team">
           
               <div className="teamInner">
                   <div className="teamItem">
                   <img className="teamPhoto" src={team1} alt=""/>
                       <div className="teamName">Исламгалеев Денис</div>
                       <div className="teamProf">Генеральный директор</div>
                       <div className="teamText">
                           <p>
                               Разнообразный и богатый опыт начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.
                           </p>
                       </div>
                       <div className="social">
                       <a className="socialItem" href="https://vk.com/denislamgaleev" target="_blank">
                                
                                <img className='socialIcon' src = {vk}/> 
                             
                        </a>
                        <a className="socialItem" href="https://cdnn21.img.ria.ru/images/sharing/article/1779307263.jpg?17793139991647899276" target="_blank">
                             
                            <img className='socialIcon' src = {inst}/> 
                            
                        </a>
                        <a className="socialItem" href="https://www.facebook.com/" target="_blank">
                             
                            <img className='socialIcon' src = {facebook}/> 
                           
                        </a>
                       </div>
                   </div>
                    
                   <div className="teamItem">
                   <img className="teamPhoto" src={team3} alt=""/>
                       <div className="teamName">Кильмухаметова Гузель</div>
                       <div className="teamProf">Финансовый директор</div>
                       <div className="teamText">
                           <p>
                               Разнообразный и богатый опыт начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.
                           </p>
                       </div>
                       <div className="social">
                           <a className="socialItem" href="https://vk.com/denislamgaleev" target="_blank">
                                
                                   <img className='socialIcon' src = {vk}/> 
                                
                           </a>
                           <a className="socialItem" href="https://cdnn21.img.ria.ru/images/sharing/article/1779307263.jpg?17793139991647899276" target="_blank">
                                
                               <img className='socialIcon' src = {inst}/> 
                               
                           </a>
                           <a className="socialItem" href="https://www.facebook.com/" target="_blank">
                                
                               <img className='socialIcon' src = {facebook}/> 
                              
                           </a>
                       </div>
                   </div>
                   <div className="teamItem">
                   <img className="teamPhoto" src={team4} alt=""/>
                       <div className="teamName">Хамидуллина Гульнара</div>
                       <div className="teamProf">Начальник отдела сбыта</div>
                       <div className="teamText">
                           <p>
                               Разнообразный и богатый опыт начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.
                           </p>
                       </div>
                       <div className="social">
                       <a className="socialItem" href="https://vk.com/denislamgaleev" target="_blank">
                                
                                <img className='socialIcon' src = {vk}/> 
                             
                        </a>
                        <a className="socialItem" href="https://cdnn21.img.ria.ru/images/sharing/article/1779307263.jpg?17793139991647899276" target="_blank">
                             
                            <img className='socialIcon' src = {inst}/> 
                            
                        </a>
                        <a className="socialItem" href="https://www.facebook.com/" target="_blank">
                             
                            <img className='socialIcon' src = {facebook}/> 
                           
                        </a>
                       </div>
                   </div>
                   <div className="teamItem">
                   <img className="teamPhoto" src={team2} alt=""/>
                       <div className="teamName">Железнов Тимофей</div>
                       <div className="teamProf">Креативный директор</div>
                       <div className="teamText">
                           <p>
                               Разнообразный и богатый опыт начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.
                           </p>
                       </div>
                       <div className="social">
                       <a className="socialItem" href="https://vk.com/denislamgaleev" target="_blank">
                                
                                <img className='socialIcon' src = {vk}/> 
                             
                        </a>
                        <a className="socialItem" href="https://cdnn21.img.ria.ru/images/sharing/article/1779307263.jpg?17793139991647899276" target="_blank">
                             
                            <img className='socialIcon' src = {inst}/> 
                            
                        </a>
                        <a className="socialItem" href="https://www.facebook.com/" target="_blank">
                             
                            <img className='socialIcon' src = {facebook}/> 
                           
                        </a>
                       </div>
                   </div>
                   
                   
                
           </div> 
       </div>
   
   
   
      
       <div className="reviews">
            
               <div className="reviewsItem">
                   <div className="reviewsPhoto">
                       <img className="reviewsImg" src={reviews1} height ="550" alt=""/>
                   </div>
                   <div className="reviewsContent">
                       <div className="reviewsText">
                           "Значимость этих проблем настолько очевидна, что консультация с широким активом способствует подготовки и реализации обучения кадров."
                       </div>
                       <div className="reviewsAuthor">
                           Мария Вольвина - владелец торговой сети TiTotum
                       </div>
                   </div>
               </div>
           
       </div>
   
   
            
         </body>
         <div className="line"></div> 
   
   
   
         <footer className='footerMain'>
         SweetCold Inc. - 2022
         </footer>
       </div>
       
       { this.state.showLearnMoreForm ? (<>
        <LearnMoreForm  hideShowLearnMoreForm = {this.hideShowLearnMoreForm}/>
       </> ) :null
      } 
       </>
    )
  
   
  }
}
