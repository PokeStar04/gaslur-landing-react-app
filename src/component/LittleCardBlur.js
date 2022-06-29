
import { LittleCard } from './../models/little-card-blur';


const LittleCardBlur=({cardBlur})=>{

    return(
        <div className='white poppins flex flex-direction-c align-center relative'>
            <div id='test' className='flex align-center justify-content-center' >
                <img src={cardBlur.picture}  alt={cardBlur.name}/>
          </div>
          <div>
            <p className=''>{cardBlur.text}
          </p>
          </div>
          
        </div>
        
          
    )
}

export default LittleCardBlur