import NftList from "../models/nft-list";
import { useState } from "react";
import NftCard from "./nft-card";
import "../style/nft-list.css";

const NftCardList2 = ({ offset, nbCard }) => {
    const [nft, setNft] = useState(NftList);

    return (
       
            <div className="tableau anim2">
                {
                    nft.map((el) => {
                        if (el.id > offset && el.id <= offset + nbCard) {
                            return <NftCard nft={el} />;
                        }
                    })
                }
            </div>
       
    );
};

export default NftCardList2;
