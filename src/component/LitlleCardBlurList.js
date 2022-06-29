import { useState } from "react";

import LittleCard from "./../models/little-card-blur";
import LittleCardBlur from "./LittleCardBlur";

const LittleCardBlurList= ({})=>{
    const[cardBlur,setCardBlur]=useState(LittleCard)

return (
<div className="relative">
   <div className="flex  blur-bg">
   
    {/* { nft.map(nft=>(
 

        <NftCard nft={nft}/>
       
        ))} */
        
    
        cardBlur.map(cardBlur=><LittleCardBlur cardBlur={cardBlur} /> )}
   </div>
  

</div>

)

}
export default LittleCardBlurList