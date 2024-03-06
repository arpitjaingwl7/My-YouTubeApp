import React from 'react'
import Button from './Button'
const list=["All","Gaming","Songs","Live","Soccer","Cricket","Cooking","Valentine"]
const ButtonList = () => {
  return (
    <div className='flex w-96 md:w-[1500px] lg:w-full overflow-scroll sm:overflow-hidden '>
    { 
      list.map((ele)=>{
        return <Button  name={ele}></Button>
      })
    }
      
    </div>
  )
}

export default ButtonList
