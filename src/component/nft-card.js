import '../style/general-style.css'
import '../style/nft-card.css'

const NftCard =( {nft}) =>{

    return(
        <div id="nftCard">
            <div className='white flex flex-direction-c fs-16 poppins'>
                    <img src={nft.picture} alt={nft.name}/>
                    <div className='flex flex-direction-r  space-between'>
                        <span className='semiBold '>{nft.name}</span>
                        <span>{nft.price} Weth</span>
                    </div>
                    <hr className='w100'/>
                    <div className='flex flex-direction-r space-between'>
                        <div>
                             <span className='gray'>Ends in <span className='white'>{nft.timer} </span></span>
                        </div>
                       
                        <div>
                            <a>Buy</a>
                        </div>
                    </div>
                        
                        
                    </div>


        </div>
      
    )
}

export default NftCard