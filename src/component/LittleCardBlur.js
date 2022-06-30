
import { LittleCard } from './../models/little-card-blur';


const LittleCardBlur=({cardBlur})=>{

    return(
        <div  >
           <div className='white poppins flex  relative flex-direction-c align-center  ttt'>
             <div  id="card-blur" className='flex align-center justify-content-center m-b-24' >
                <img src={cardBlur.picture}  alt={cardBlur.name}/>
          </div>
          <div className='w10 txt-center'>
            <p >{cardBlur.text}
          </p>
          </div>
           </div>
           
          
        </div>
        
          
    )
}

export default LittleCardBlur