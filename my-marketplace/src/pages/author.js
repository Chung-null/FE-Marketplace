import React, {useEffect,useState} from 'react'

//INTERNAL IMPORT
import Style from '../styles/author.module.css'
import {Banner, NFTCardTwo} from '../../collectionPage/collectionIndex'
import { Brand,Title } from '../../components/ComponentIndex'
import images from '../../img'
import {AuthorProfileCard, AuthorTaps, TabCard, AuthorNFTCardBox} from '../../authorPage/componentIndex'
import FollowerTabCard from '../../components/FollowerTab/FollowerTabCard/FollowerTabCard'

const author = () => {
    const followerArray = [
        {
          background: images.cyber1,
          user: images.user1,
          name: "Jackson Baker",
          seller: "",
        },
        {
          background: images.creatorbackground2,
          user: images.user2,
          name: "Giada Mann",
          seller: "",
        },
        {
          background: images.ai2,
          name: "Everly Williams",
          user: images.user3,
          seller: "",
        },
        {
          background: images.creatorbackground4,
          user: images.user4,
          name: "Sofia Brown",
          seller: "",
        },
        {
          background: images.bored2,
          user: images.user5,
          name: "Harrison Garcia",
          seller: "",
        },
        {
          background: images.creatorbackground6,
          name: "Emma Jones",
          user: images.user6,
          seller: "",
        },
      ]
      const [collectiables, setCollectiables] = useState(true);
      const [created, setCreated] = useState(false);
      const [like, setLike] = useState(false);
      const [follower, setFollower] = useState(false);
      const [following, setFollowing] = useState(false);
      const [nfts, setNfts] = useState([]);
      const [myNfts, setMyNfts] = useState([]);
      
  return (
    <div className={Style.banner}>
        <Banner bannerImage={images.creatorbackground8} />
        <AuthorProfileCard/>
        <AuthorTaps 
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
        nfts={nfts}
        myNfts={myNfts}
      />
      <Title heading="Popular Creators" paragraph="Click on music icon and enjoy NTF music or audio" />
      <div className={Style.author_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} key={i + 1} />
        ))}
      </div>
      <Brand/>
    </div>
  )
}

export default author