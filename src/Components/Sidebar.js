import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom'
import { setQuerry } from '../utils/appSlice'
const Sidebar = () => {

  let dispatch=useDispatch();
let isMenuOpen=useSelector(store=>store.app.isMenuOpen)

if(!isMenuOpen){
return null

}
else{


  return (

    


    <div className='shadow-lg p-5 w-44'>

<ul className='py-5'>
        <Link to={"/"}><li className='hover:bg-gray-200 p-2 rounded-lg'>Home </li></Link>
        <li className='hover:bg-gray-200 p-2 rounded-lg cursor-pointer'onClick={()=>{dispatch(setQuerry("shorts"))}}>Shorts</li>
        <li className='hover:bg-gray-200 p-2 rounded-lg cursor-pointer'onClick={()=>{dispatch(setQuerry("videos"))}}>Videos</li>
        <li className='hover:bg-gray-200 p-2 rounded-lg cursor-pointer'onClick={()=>{dispatch(setQuerry("live"))}}>Live</li>
      </ul>
        <h1 className='font-bold '>Subscriptions</h1>
      <ul>
        <li className='hover:bg-gray-200 p-2 rounded-lg cursor-pointer'onClick={()=>{dispatch(setQuerry("music"))}}>Music </li>
        <li className='hover:bg-gray-200 p-2 rounded-lg cursor-pointer'onClick={()=>{dispatch(setQuerry("sports"))}}>Sports</li>
        <li className='hover:bg-gray-200 p-2 rounded-lg cursor-pointer'onClick={()=>{dispatch(setQuerry("gaming"))}}>Gaming</li>
        <li className='hover:bg-gray-200 p-2 rounded-lg cursor-pointer'onClick={()=>{dispatch(setQuerry("Movies"))}}>Movies</li>
      </ul>


      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li className='hover:bg-gray-200 p-2  rounded-lg cursor-pointer' onClick={()=>{dispatch(setQuerry("music"))}}>Music </li>
        <li className='hover:bg-gray-200 p-2 rounded-lg cursor-pointer'onClick={()=>{dispatch(setQuerry("Sports"))}}>Sports</li>
        <li className='hover:bg-gray-200 p-2 rounded-lg cursor-pointer'onClick={()=>{dispatch(setQuerry("Gaming"))}}>Gaming</li>
        <li className='hover:bg-gray-200 p-2 rounded-lg cursor-pointer'onClick={()=>{dispatch(setQuerry("Movies"))}}>Movies</li>
      </ul>
    </div>
  )
}
}
export default Sidebar
