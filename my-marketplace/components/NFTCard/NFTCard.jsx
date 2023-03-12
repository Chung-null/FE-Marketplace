import React, { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsImages } from "react-icons/bs"
import Image from "next/image"
import Link from "next/link"

//INTERNAL IMPORT
import Style from "./NFTCard.module.css"
import images from "../../img"

const NFTCard = () => {
    const featureArray = [
        {
                background: images.nft_1,
                 name: "#17373",
               },
               {
                 background: images.nft_image_2,
                 name: "#24234",
               },
               {
                 background: images.nft_image_3,
                 name: "#25795",
               },
               {
                 background: images.nft_image_2,
                 name: "#45921",
               },
               {
                 background: images.nft_image_1,
                 name: "#86497",
               },
    ]
    const [like,setLike] = useState(true)
    const likeNft = () =>{
        if (!like) {
            setLike(true)
          } else {
            setLike(false)
          }
    }
  return (
    <div className={Style.NFTCard}>
        {featureArray.map((el,i)=>(
            <div className={Style.NFTCard_box} key={i+1}>
                <div className={Style.NFTCard_box_img}>
                    <Image 
                    src={el.background}
                    alt ="NFT images" 
                    width={400}
                    height = {400}
                    className = {Style.NFTCard_box_img_img}
                    />
                </div>
                <div className={Style.NFTCard_box_update}>
                    <div className={Style.NFTCard_box_update_left}>
                        <div 
                            className={Style.NFTCard_box_update_left_like}
                            onClick = {() => likeNft()}
                            >
                                {like ?(
                                    <AiOutlineHeart/>
                                ) : (
                                    <AiFillHeart
                                    className={Style.NFTCard_box_update_left_like_icon}
                                    />
                                )}
                                {""} 22
                        </div>
                    </div>
                    <div className={Style.NFTCard_box_update_right}>
                        <div className={Style.NFTCard_box_update_right_info}>
                            <small>Remaining time</small>
                            <p>3h:15m:20s</p>
                        </div>
                    </div>
                </div>
                <div className={Style.NFTCard_box_update_details}>
                    <div className={Style.NFTCard_box_update_details_price}>
                        <div className={Style.NFTCard_box_update_details_price_box}>
                            <h4>{el.name}</h4>
                            <div className={Style.NFTCard_box_update_details_price_box_box}>
                                <div className={Style.NFTCard_box_update_details_price_box_bid}>
                                    <small>Current Bid</small>
                                    <p>1.0000ETH</p>
                                </div>
                                <div className={Style.NFTCard_box_update_details_price_box_stock}>
                                    <small>61 in stock</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Style.NFTCard_box_update_details_category}>
                        <BsImages/>
                    </div>
                </div>
            </div>
        ))};
    </div>
  )
}

export default NFTCard