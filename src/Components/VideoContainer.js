import React, { useEffect } from 'react'
import { YtuubeApi } from '../utils/constants'
// import VideoCard from './VideoCard'
import { useState } from 'react'
import VideoCart from './VideoCart';
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
const VideoContainer = () => {

  let searchQuerry=useSelector(store=>store.app.searchQuerry)
  // let searchQuerry="poetry"
  let [videos,setVideos]=useState([]);
  let getData=async()=>{
    let data= await fetch(YtuubeApi+searchQuerry)
    let json=await data.json()
    
    setVideos(json.items)
    console.log(json);
}
useEffect(()=>{
getData();
},[searchQuerry])
  return (

    <div className='flex flex-wrap justify-center'>


     {videos.map((ele)=>{
      console.log(ele)
      return <Link to={"/watch?v="+ele.id.videoId
    }> <VideoCart key={ele.id} obj={ele}></VideoCart></Link>
     })}
      {/* <VideoCart obj={videos[0]}></VideoCart> */}
    
    </div>
  )
}

export default VideoContainer
