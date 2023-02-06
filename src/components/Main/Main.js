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
           <td>  <button className='btn' onClick={ this.showShowLearnMoreForm }>Узнать больше</button></td>
          
           
    </table>
         </header>
         <body style={{overflow:isScrollOn}} >
         <div className="products">
       <div className="pictures">
          
           <div class="productItem">
           <img class="productPhoto" src={assorti} alt="" width="650"/>
               <div class="productContent">
                   <div class="productTitle">Название продукта</div>
                   <div class="productText">описание продукта</div>
               </div>
           </div>
           <div class="productItem">
           <img class="productPhoto" src={brown} alt="" width="650"/>
               <div class="productContent">
                   <div class="productTitle">Название продукта</div>
                   <div class="productText">описание продукта</div>
               </div>
           </div>
           <div class="productItem">
           <img class="productPhoto" src={beaut} alt="" width="650"/>
               <div class="productContent">
                   <div class="productTitle">Название продукта</div>
                   <div class="productText">описание продукта</div>
               </div>
           </div>
           <div class="productItem">
           <img class="productPhoto" src={brown} alt="" width="650"/>
               <div class="productContent">
                   <div class="productTitle">Название продукта</div>
                   <div class="productText">описание продукта</div>
               </div>
           </div>
           </div>
           <div className="pictures">
           <div class="productItem">
           <img class="productPhoto" src={brown} alt="" width="650"/>
               <div class="productContent">
                   <div class="productTitle">Название продукта</div>
                   <div class="productText">описание продукта</div>
               </div>
           </div>
           <div class="productItem">
           <img class="productPhoto" src={assorti} alt="" width="650"/>
               <div class="productContent">
                   <div class="productTitle">Название продукта</div>
                   <div class="productText">описание продукта</div>
               </div>
           </div>
           <div class="productItem">
           <img class="productPhoto" src={beaut} alt="" width="650"/>
               <div class="productContent">
                   <div class="productTitle">Название продукта</div>
                   <div class="productText">описание продукта</div>
               </div>
           </div>
           <div class="productItem">
           <img class="productPhoto" src={brown} alt="" width="650"/>
               <div class="productContent">
                   <div class="productTitle">Название продукта</div>
                   <div class="productText">описание продукта</div>
               </div>
           </div>
           </div>
       </div>
           
            
           
            
    
   
            
               <div class="features">
               <div class="features1">
                   <div class="featuresItem">
                       <img class="featuresIcon" src={icon1} alt=""/>
                       <h4 class="featuresTitle">Бесплатная доставка</h4>
                       <div class="featuresText">По городу Уфа доставка Бесплатная. До 10км от города 2000, дальше - цена договорная</div>
                   </div>
                   <div class="featuresItem">
                   <img class="featuresIcon" src={icon2} alt=""/>
                   <h4 class="featuresTitle">Лучшие цены</h4>
                   <div class="featuresText">Мы постоянно пытаемся оптимизировать пути доставки и производства для лучшего предложения для вас </div>
                   </div>
                   <div class="featuresItem">
                   <img class="featuresIcon" src={icon3} alt=""/>
                   <h4 class="featuresTitle">У нас все законно</h4>
                   <div class="featuresText">Мы работаем согласно законодательству РФ и всегда предоставляем все отчеты</div>
                   </div>
                   </div>
                   <div class="features1">
                   <div class="featuresItem">
                   <img class="featuresIcon" src={icon4} alt=""/>
                   <h4 class="featuresTitle">Качественная упаковка</h4>
                   <div class="featuresText">Мы закупаем качественные материалы для упаковки чтобы мороженое попало вам в руки без проблем и в наилучшем состоянии</div>
                   </div>
                   <div class="featuresItem">
                   <img class="featuresIcon" src={icon5} alt=""/>
                   <h4 class="featuresTitle">Отличное качество</h4>
                   <div class="featuresText">Мы регулярно проверяем наших поставщиков и тчательно следим за качеством товара</div>
                   </div>
                   <div class="featuresItem">
                   <img class="featuresIcon" src={icon6} alt=""/>
                       <h4 class="featuresTitle">Растущая популярность</h4>
                       <div class="featuresText">Мы всегда рады новым покупателям и делаем все возможное чтобы продолжать сотрудничество</div>
                   </div>
                   </div>
               </div> 
            
    
   
       <div class="team">
           
               <div class="teamInner">
                   <div class="teamItem">
                   <img class="teamPhoto" src={team1} alt=""/>
                       <div class="teamName">Исламгалеев Денис</div>
                       <div class="teamProf">Генеральный директор</div>
                       <div class="teamText">
                           <p>
                               Разнообразный и богатый опыт начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.
                           </p>
                       </div>
                       <div class="social">
                       <a class="socialItem" href="#" target="_blank">
                                
                                <img className='socialIcon' src = {vk}/> 
                             
                        </a>
                        <a class="socialItem" href="#" target="_blank">
                             
                            <img className='socialIcon' src = {inst}/> 
                            
                        </a>
                        <a class="socialItem" href="#" target="_blank">
                             
                            <img className='socialIcon' src = {facebook}/> 
                           
                        </a>
                       </div>
                   </div>
                    
                   <div class="teamItem">
                   <img class="teamPhoto" src={team3} alt=""/>
                       <div class="teamName">Кильмухаметова Гузель</div>
                       <div class="teamProf">Финансовый директор</div>
                       <div class="teamText">
                           <p>
                               Разнообразный и богатый опыт начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.
                           </p>
                       </div>
                       <div class="social">
                           <a class="socialItem" href="#" target="_blank">
                                
                                   <img className='socialIcon' src = {vk}/> 
                                
                           </a>
                           <a class="socialItem" href="#" target="_blank">
                                
                               <img className='socialIcon' src = {inst}/> 
                               
                           </a>
                           <a class="socialItem" href="#" target="_blank">
                                
                               <img className='socialIcon' src = {facebook}/> 
                              
                           </a>
                       </div>
                   </div>
                   <div class="teamItem">
                   <img class="teamPhoto" src={team4} alt=""/>
                       <div class="teamName">Хамидуллина Гульнара</div>
                       <div class="teamProf">Начальник отдела сбыта</div>
                       <div class="teamText">
                           <p>
                               Разнообразный и богатый опыт начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.
                           </p>
                       </div>
                       <div class="social">
                       <a class="socialItem" href="#" target="_blank">
                                
                                <img className='socialIcon' src = {vk}/> 
                             
                        </a>
                        <a class="socialItem" href="#" target="_blank">
                             
                            <img className='socialIcon' src = {inst}/> 
                            
                        </a>
                        <a class="socialItem" href="#" target="_blank">
                             
                            <img className='socialIcon' src = {facebook}/> 
                           
                        </a>
                       </div>
                   </div>
                   <div class="teamItem">
                   <img class="teamPhoto" src={team2} alt=""/>
                       <div class="teamName">Железнов Тимофей</div>
                       <div class="teamProf">Креативный директор</div>
                       <div class="teamText">
                           <p>
                               Разнообразный и богатый опыт начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.
                           </p>
                       </div>
                       <div class="social">
                       <a class="socialItem" href="#" target="_blank">
                                
                                <img className='socialIcon' src = {vk}/> 
                             
                        </a>
                        <a class="socialItem" href="#" target="_blank">
                             
                            <img className='socialIcon' src = {inst}/> 
                            
                        </a>
                        <a class="socialItem" href="#" target="_blank">
                             
                            <img className='socialIcon' src = {facebook}/> 
                           
                        </a>
                       </div>
                   </div>
                   
                   
                
           </div> 
       </div>
   
   
   
      
       <div class="reviews">
            
               <div class="reviewsItem">
                   <div class="reviewsPhoto">
                       <img class="reviewsImg" src={reviews1} height ="550" alt=""/>
                   </div>
                   <div class="reviewsContent">
                       <div class="reviewsText">
                           "Значимость этих проблем настолько очевидна, что консультация с широким активом способствует подготовки и реализации обучения кадров."
                       </div>
                       <div class="reviewsAuthor">
                           Мария Вольвина - владелец торговой сети TiTotum
                       </div>
                   </div>
               </div>
           
       </div>
   
   
            
         </body>
         <div class="line"></div> 
   
   
   
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
