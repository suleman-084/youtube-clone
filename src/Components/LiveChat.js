import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice'

const LiveChat = () => {
  const dispatch = useDispatch()
  const chatMessages = useSelector((store) => store.chat.messages)

  useEffect(() => {
   const timer = setInterval(() => {
    dispatch(addMessage({
      name:"sulemans",
      message:"woww!!"
    }))
// console.log("api polling");

    }, 2000)
    return () => clearInterval(timer)

  }, [])
  return (
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-300 rounded-lg overflow-y-scroll'>
       { chatMessages?.map((c, i)=><ChatMessage key={i} name={c.name} message={c.message}/>)}
     {/* <ChatMessage name="suleman" message="Amazing Live Chat!!"/> */}
   
    </div>
  )
}

export default LiveChat
