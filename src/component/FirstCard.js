import './FirstCard.css'
import landing from '../ressources/landing.png'
import laura from '../ressources/img-laura.png'
import lauraBlur from '../ressources/img-lauraBlur.png'
import coeur from '../ressources/heart-24.png'
import '../style/general-style.css'
import React from "react";

const FirstCard =()=>{

return(
    <section className='hero poppins'>
        <div className='hero-text'>

        <h1 className='semiBold white'>Discover, collect,  and charity in extraordinary NFT marketplace</h1>
        
        <p className='fs-24 regular m-b-40 gray'>In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis</p>
        <div className='flex gap-40'>
            <div>
                  <a href='google.com' className='white btn-primaire semiBold'>Explore</a>
            </div>
          
            <div>
                <a href='' className='white btn-secondaire'>Create </a> 
            </div>
        </div>


        </div>

        <div className=' relative first-card'>
            <div  className=' relative p-b-32 imgFirstCard'>
                <img   src={landing}/>
            </div>    
            <div className='flex space-between'>
                <div className='flex gap-12 '>
                    
                    <img src={laura}/>
                    <div className='flex flex-direction-c justify-content-left ' >
                        <div>
                            <span className='semiBold fs-16 white'>   Laura</span>
                        </div>
                        <div>
                                    < span className='gray fs-16 medieum'>0.21 Wetch</span>
                        </div>                       

                    </div>  
                </div >
                <div className='space-between flex flex-direction-c'>
                    <span className='white'>WE ARE HERE</span>
                    <div className='flex justify-content-right align-center' >
                       
                        <img   src={coeur}/>
                         <span className='gray m-l-8'>25</span>
                    </div>
                </div>
                       
                    </div>
                
                <div>
                   
               
                <div>

                </div>
            </div>
        
    </div>
</section>

)
}

export default FirstCard