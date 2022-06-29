import FirstCard from "../component/FirstCard"
import LittleCardBlurList from "../component/LitlleCardBlurList"
import NftCardList from "../component/nftList"
import arrow from '../ressources/arrow-right-24.png'
import ascending from '../ressources/Icon/Outline/sort-ascending.png'
import chevonDown from '../ressources/cheveron-down.png'
import filter from '../ressources/Icon/Outline/filter.png'
import NftCardList2 from './../component/NftCardList2';



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
        <section className='m-t-160 m-b-160'>
            <div className=' m-b-80 flex align-center flex-direction-c'>
                <h2 className="poppins medium fs-48 m-b-24 white">Getting started</h2>
                <p className="gray-1 regular fs-24">Eu, molestie commodo, enim pellentesque turpis integer sagittis</p>
            </div>
            
            <div className="flex space-evenly ">
                {<LittleCardBlurList />}

            </div>
        </section>
        <section className="flex poppins white space-between m-b-90">
            <h2 className="fs-48 medieum">Discover</h2>
            <nav className="flex relative  justify-content-center gap-c-12">
                <div className="flex justify-content-center align-center">
                    <img src={ascending}/>
                    <span className="m-l-8" >Category</span>
                    
                    
                </div>
                <div className="flex justify-content-center align-center">
                    <span>Cheapest</span>
                    <img className="m-l-8" src={chevonDown}/>
                    
                </div>
                <div className="flex justify-content-center align-center">
                    <span>Newest</span>
                    <img className="m-l-8" src={chevonDown}/>
                  
                </div>
                <div className="flex justify-content-center  align-center btn-primaire-2">
                    <img src={filter}/>
                    <span className="m-l-8">Filter</span>
                </div>
            </nav>
           
        </section>
        <NftCardList2/>
        <div className="poppins flex gray medium justify-content-center fs-12 m-b-160 ">
            <a className="btn-secondaire2 gray" href="">
                LOAD MORE
            </a>
        </div>
        <footer className=" white poppins m-b-100">
            <div className="tableau2 m-b-40">
                  <div className="fs-40 medium">Etiam et id tincidunt faucibus mollis a sociis pretium fermentum quis magna faucibus lacus.</div>
            <div className="flex space-between">
               
                    <ul className=" flex flex-direction-c">
                         <li className="fs-40 medium">Marketplace</li>
                        <li><a className="white-1 fs-20 regular" href="">Home</a></li>
                        <li><a className="white-1 fs-20 regular" href="">Activity</a></li>
                        <li><a className="white-1 fs-20 regular" href="">Discover</a></li>
                        <li><a className="white-1 fs-20 regular" href="">Learn more</a></li>

                    </ul>
                    <ul className=" flex flex-direction-c ">
                         <li className="fs-40 medium">Company</li>
                         <li><a className="white-1 fs-20 regular" href="">About Us</a></li>
                         <li><a className="white-1 fs-20 regular" href="">Services</a></li>
                         <li><a className="white-1 fs-20 regular" href="">Portfolio</a></li>
                       
                    </ul>
                    <ul className=" flex flex-direction-c flex-direction-s">
                         <li className="fs-40 medium">Contact</li>
                         <li><a className="white-1 fs-20 regular" href="">Facebook</a></li>
                         <li><a className="white-1 fs-20 regular" href="">Instagram</a></li>
                         <li><a className="white-1 fs-20 regular" href="">Twitter</a></li>
                         <li><a className="white-1 fs-20 regular" href="">Email</a></li>
                    </ul>
                </div>
            </div>
            <hr className="w100"/>
            <div className="flex space-between">
                <div>
                <img src="./ressources/icon-facebook.png" alt="icon-facebook" />
                <img src="./ressources/icon-instagram.png" alt="icon-instagram" />
                <img src="./ressources/icon-twitter.png" alt="icon-twitter" />
                </div>
                <div className="gray-3 regular flex align-center ">
                    Copyright 2021 Gaslur
                </div>
            </div>

        </footer>
    </div>


    )
}

export default Homepage