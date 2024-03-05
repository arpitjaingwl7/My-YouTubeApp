import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import LiveChat from './LiveChat'
import CommentsContainer from './CommentsContainer'

const WatchPage = () => {
   const dispatch =useDispatch()
    useEffect(()=>{
      dispatch(closeMenu())
    },[])

    const [params]=useSearchParams()
    console.log(params.get("v"))
  return (
    <div className='flex'>
      <Sidebar></Sidebar>

      <div className=" w-full">

        <div className='flex w-full'>
      <div className='pl-5'>
      <iframe width="900" height="430px" src={"https://www.youtube.com/embed/"+params.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div >

     <div className='w-full p-1  '>
      <LiveChat></LiveChat>
     </div>

    </div>
   
    
    <CommentsContainer></CommentsContainer>
   </div>

   
   
    </div>
  )
}

export default WatchPage
