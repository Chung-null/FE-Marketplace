import React from 'react'
import Image from 'next/image'

//INTERNAL IMPORT
import Style from './Banner.module.css'

const Banner = ({bannerImage}) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image 
          className={Style.banner_img_img}
          src={bannerImage} 
          alt='backround' 
          height={300}
        />
      </div>
      <div className={Style.banner_img_mobile}>
      <Image 
          className={Style.banner_img_img}
          src={bannerImage} 
          alt='backround' 
          height={300}
        />
      </div>
    </div>
  )
}

export default Banner