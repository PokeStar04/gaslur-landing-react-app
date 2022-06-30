import FirstCard from "../component/FirstCard";
import LittleCardBlurList from "../component/LitlleCardBlurList";
import NftCardList from "../component/nftList";
import arrow from "../ressources/arrow-right-24.png";
import ascending from "../ressources/Icon/Outline/sort-ascending.png";
import chevonDown from "../ressources/cheveron-down.png";
import filter from "../ressources/Icon/Outline/filter.png";
import NftCardList2 from "./../component/NftCardList2";
import Footer from "../component/Footer";

const Homepage = () => {
    return (
        <div>
            <FirstCard  className=''/>
            <div className="flex space-between align-item-center anim">
                <h2 className="poppins medium fs-48 m-b-40 white">
                    Hot auctions
                </h2>
                <div className="white flex align-center gap-c-12 ">
                    <a className="semiBold white fs-24" href="">
                        View all
                    </a>
                    <img className="" src={arrow} />
                </div>
            </div>
            <NftCardList2 offset={0} nbCard={4} />
            <section className="m-t-160 m-b-160 anim3">
                <div className=" m-b-80 flex align-center flex-direction-c ">
                    <h2 className="poppins medium fs-48 m-b-24 white">
                        Getting started
                    </h2>
                    <p className="gray-1 regular fs-24">
                        Eu, molestie commodo, enim pellentesque turpis integer
                        sagittis
                    </p>
                </div>

                <div>
                    {<LittleCardBlurList />}
                </div>
            </section>
            <section className="flex poppins white space-between m-b-90 anim3" >
                <h2 className="fs-48 medieum">Discover</h2>
                <nav className="flex relative  justify-content-center gap-c-12">
                    <div className="flex justify-content-center align-center">
                        <img src={ascending} />
                        <span className="m-l-8">Category</span>
                    </div>
                    <div className="flex justify-content-center align-center">
                        <span>Cheapest</span>
                        <img className="m-l-8" src={chevonDown} />
                    </div>

                    <div className="flex relative justify-content-center align-center">
                        <span>Newest</span>
                        <img className="m-l-8" src={chevonDown} />
                    </div>
                    <div className="flex justify-content-center  align-center btn-primaire-2">
                        <img src={filter} />
                        <span className="m-l-8">Filter</span>
                    </div>
                </nav>
            </section>
            <NftCardList2 offset={4} nbCard={8} />
            <div className="poppins flex gray medium justify-content-center fs-12 m-b-160 ">
                <a className="btn-secondaire2 gray anim3" href="">
                    LOAD MORE
                </a>
            </div>
            {<Footer/>}
        </div>
    );
};

export default Homepage;
