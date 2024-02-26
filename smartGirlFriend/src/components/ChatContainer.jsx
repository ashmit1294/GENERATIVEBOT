import React from 'react'
import Query from './Query';
import Response from './Response';
const ChatContainer = () => {
  return (
    <div  className="p-4 h-80 overflow-y-auto">
          <Query text={"design with tailwind"}/>
          <Response text={"This is a response from the chatbot"}/>
    </div>
  )
}

export default ChatContainer