const Footer =()=>{

return(
    <footer className=" white poppins m-b-100">
                <div className="tableau2 m-b-40" >
                    <div className="fs-40 medium">
                        Etiam et id tincidunt faucibus mollis a sociis pretium
                        fermentum quis magna faucibus lacus.
                    </div>
                    <div className="flex gap-c-24 space-between">
                        <ul className=" flex flex-direction-c justify-content-fstart">
                            <li className="fs-40 medium m-b-40">Marketplace</li>
                            <li>
                                <a className="white-1 fs-20 regular" href="">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="white-1 fs-20 regular" href="">
                                    Activity
                                </a>
                            </li>
                            <li>
                                <a className="white-1 fs-20 regular" href="">
                                    Discover
                                </a>
                            </li>
                            <li>
                                <a className="white-1 fs-20 regular" href="">
                                    Learn more
                                </a>
                            </li>
                        </ul>
                        <ul className=" flex flex-direction-c justify-content-fstart">
                            <li className="fs-40 medium m-b-40">Company</li>
                            <li>
                                <a className="white-1 fs-20 regular" href="">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="white-1 fs-20 regular" href="">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a className="white-1 fs-20 regular" href="">
                                    Portfolio
                                </a>
                            </li>
                        </ul>
                        <ul className=" flex flex-direction-c flex-direction-s justify-content-fstart">
                            <li className="fs-40 medium m-b-40">Contact</li>
                            <li>
                                <a className="white-1 fs-20 regular" href="">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a className="white-1 fs-20 regular" href="">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a className="white-1 fs-20 regular" href="">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a className="white-1 fs-20 regular" href="">
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="w100" />
                <div className="flex space-between">
                    <div>
                        <img
                            src="./ressources/icon-facebook.png"
                            alt="icon-facebook"
                        />
                        <img
                            src="./ressources/icon-instagram.png"
                            alt="icon-instagram"
                        />
                        <img
                            src="./ressources/icon-twitter.png"
                            alt="icon-twitter"
                        />
                    </div>
                    <div className="gray-3 regular flex align-center ">
                        Copyright 2021 Gaslur
                    </div>
                </div>
            </footer>
)


}

export default Footer