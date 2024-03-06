import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { pushMessage } from '../utils/chatSlice';
import { generateName, makeid } from '../utils/helper';
// import { UseSelector } from 'react-redux'}




const LiveChat = () => {
  let[liveMsg,setLiveMsg]=useState("");
 let dispatch=useDispatch();
  let message= useSelector(store=>store.chat.messages)
// const [message,setMessage]=useState([{name:"hrdeh",mes:"rsgrrgh"}]);
  useEffect(()=>{
    const i= setInterval(()=>{
    const obj={
      name:generateName(),
      mes:makeid(20)
    }
    dispatch(pushMessage(obj)   )
    // console.log("dwn")
    // message.push(obj)
    // setMessage(message);
    },2000)

    return ()=>{
      clearInterval(i)
    }
  },[])



  const liveChatHandle=()=>{

    const newObj={
      name:"arpit",
      mes:liveMsg
    }
    setLiveMsg("")
    dispatch(pushMessage(newObj))
    

  }
  return (

    <>
    <div className='overflow-y-scroll flex flex-col-reverse mx-2 h-[425px] border  border-black rounded-lg p-2  bg-gray-100 w-full mr-4 '>
       {/* <ChatMessage name="arpit" message="gdgaettttttttttt"></ChatMessage> */}
     {message.map((ele)=>{
      return  <ChatMessage name={ele.name} message={ele.mes}></ChatMessage>
    })} 

    </div>


<form className=' border ml-2 p-2 border-black ' onSubmit={(e)=>{
  e.preventDefault()
  liveChatHandle()
}}>
  <input  type="text" className='pl-2 border border-black-100 ' value={liveMsg} onChange={(e)=>{
    setLiveMsg(e.target.value)
  }}/>
  <button  className='pl-1 bg-green-100' >Send</button>
</form>

    </>
  )
}

export default LiveChat
