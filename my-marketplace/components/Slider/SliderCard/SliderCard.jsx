import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

//INTERNAL IMPORT
import Style from './SliderCard.module.css'
import images from '../../../img'


const SliderCard = ({el, i}) => {
  return (
    <motion.div className={Style.sliderCard}>
    <div className={Style.sliderCard_box}>
      <motion.div className={Style.sliderCard_box_img}>
        <Image
          src={el.background}
          className={Style.sliderCard_box_img_img}
          alt="slider profile"
          width={500}
          height={300}
          objectFit="cover"
        />
      </motion.div>
      <div className={Style.sliderCard_box_title}>
        <p>{el.name}</p>
        <div className={Style.sliderCard_box_title_like}>
          {/*<LikeProfile/>*/}
          <small>1 of 100</small>
        </div>
      </div>

      <div className={Style.sliderCard_box_price}>
        <div className={Style.sliderCard_box_price_box}>
          <small>Current Bid</small>
          <p> {el.price}</p>
        </div>

        <div className={Style.sliderCard_box_price_time}>
          <small>Reaming time</small>
          <p>3h : 15m : 20s</p>
        </div>
      </div>
    </div>
  </motion.div>
)
}
export default SliderCard