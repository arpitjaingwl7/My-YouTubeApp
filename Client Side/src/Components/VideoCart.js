import React from 'react'

const VideoCart = ({obj}) => {

    const {snippet, statistics}=obj
    const {thumbnails,channelTitle,title}=snippet
  return (
    <div className='hover:bg-gray-200 p-2 m-2 w-80 rounded-lg h-80 shadow-lg'>
     <img className='rounded-lg' src={thumbnails.medium.url} alt="" />
     <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        {/* <li>{statistics.viewCount}</li> */}
     </ul>
    </div>
  )
}

export default VideoCart
