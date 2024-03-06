import React, { useEffect } from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'
import { YtuubeApi } from '../utils/constants'

const MainContainer = () => {

 
  return (
    <div className=''>
     <ButtonList></ButtonList>
      <VideoContainer></VideoContainer>
    </div>
  )
}

export default MainContainer
