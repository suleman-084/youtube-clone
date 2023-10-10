import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { addMessage } from '../Utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../Utils/Helper'

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("")
  const dispatch = useDispatch()
  const chatMessages = useSelector((store) => store.chat.messages)

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(15),
      }))
      // console.log("api polling");

    }, 2000)
    return () => clearInterval(timer)

  }, [])
  return (
    <>
      <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-300 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
          {chatMessages?.map((c) => <ChatMessage name={c.name} message={c.message} />)}
          {/* <ChatMessage name="suleman" message="Amazing Live Chat!!"/> */}
        </div>
      </div>


      <form className="w-full p-2 ml-2 border border-black " onSubmit={(e) => { e.preventDefault() 
      dispatch(addMessage({
        name:"suleman",
        message:liveMessage
      }))
      setLiveMessage("")
      }}>
        <input className="px-2 w-86" type="text" value={liveMessage} onChange={(e) => { setLiveMessage(e.target.value) }} />
        <button className="px-2 mx-6 bg-green-300 rounded-lg py-1 hover:bg-green-500">Send</button>
      
      </form>
    </>
  )
}

export default LiveChat
