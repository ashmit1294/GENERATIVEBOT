import React from 'react'
import Query from './Query';
import Response from './Response'
const ChatContainer = () => {
  return (
    <div className="p-4 h-80 overflow-y-auto">
      <Query text={"query"} />
      <Response text={"response"}/>
    </div>
  )
}

export default ChatContainer