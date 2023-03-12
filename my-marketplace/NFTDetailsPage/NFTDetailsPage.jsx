import React from 'react'


//INTERNAL IMPORT
import Style from './NFTDetailsPage.module.css'
import {NFTDescription, NFTTabs, NFTDetailsImg} from './NFTDetailsIndex'


const NFTDetailsPage = () => {
  return (
    <div className={Style.NFTDetailsPage}>
    <div className={Style.NFTDetailsPage_box}>
      <NFTDetailsImg />
      <NFTDescription />
    </div>
  </div>
  )
}

export default NFTDetailsPage