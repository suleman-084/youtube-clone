import React from 'react'
import { userIcon } from '../Utils/image'

const ChatMessage = ({name, message}) => {
  // console.log("name", name, message);
  return (
    <div className="flex  items-center shadow-sm p-2">
      <img className="h-8 col-span-1" src={userIcon} alt="user-icon" />
    
      <span className="font-bold px-2">{name}</span>
      <span className="px-2">{message}</span>  
    </div>
  )
}

export default ChatMessage
