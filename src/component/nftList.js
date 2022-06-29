import NftList from "../models/nft-list";
import { useState } from "react";
import NftCard from "./nft-card";
import "../style/nft-list.css"

const NftCardList= ({})=>{
    const[nft,setNft]=useState(NftList)

return (
<div>
   <div className="tableau">
   
    {/* { nft.map(nft=>(
 

        <NftCard nft={nft}/>
       
        ))} */
        
    
        nft.filter(nft=> nft.id < 5).map(nft=><NftCard nft={nft} /> )}
   </div>
  

</div>

)

}

export default NftCardList