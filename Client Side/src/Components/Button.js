import React from 'react'
import { useDispatch } from 'react-redux'
import { setQuerry } from '../utils/appSlice'

const Button = ({name}) => {
  let distpatch=useDispatch()
  return (
    <div>
      <button  onClick={()=>{distpatch(setQuerry(name))}} className='hover:bg-gray-200 px-5 py-2 m-5 rounded-lg bg-gray-100'>{name}</button>
    </div>
  )
}

export default Button
