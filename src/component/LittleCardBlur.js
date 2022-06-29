
import { LittleCard } from './../models/little-card-blur';


const LittleCardBlur=({cardBlur})=>{

    return(
        <div  >
           <div className='white poppins flex  flex-direction-c align-center relative ttt'>
             <div  id="card-blur" className='flex align-center justify-content-center m-b-24' >
                <img src={cardBlur.picture}  alt={cardBlur.name}/>
          </div>
          <div className='w10'>
            <p >{cardBlur.text}
          </p>
          </div>
           </div>
           
          
        </div>
        
          
    )
}

export default LittleCardBlur