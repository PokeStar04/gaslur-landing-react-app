import FirstCard from "../component/FirstCard"
import LittleCardBlurList from "../component/LitlleCardBlurList"
import NftCardList from "../component/nftList"
import arrow from '../ressources/arrow-right-24.png'


const Homepage = ()=>{


    return(
    <div>
        <FirstCard/>
        <div className="flex space-between align-item-center">
            <h2 className="poppins medium fs-48 m-b-40 white">Hot auctions</h2>
            <div className="white flex align-center gap-c-12 ">
                <a className="semiBold white fs-24" href="">View all</a>
                <img className="" src={arrow}/>
            </div>
        </div>
        <NftCardList/>
        <section>
            <div className='m-t-160 m-b-80 flex align-center flex-direction-c'>
                <h2 className="poppins medium fs-48 m-b-24 white">Getting started</h2>
                <p className="gray-1 regular fs-24">Eu, molestie commodo, enim pellentesque turpis integer sagittis</p>
            </div>
            <div className="flex">
                {<LittleCardBlurList />}

            </div>

        </section>
       
    </div>


    )
}

export default Homepage