import React from 'react'
import Query from './Query';
import Response from './Response';
const ChatContainer = () => {
  let conversation=[{
    "query":"response",
  }];

  return (
    <div className="p-4 h-80 overflow-y-auto">
      {conversation?.map(())}
      <Query text={"query"} />
      <Response text={"response"}/>
    </div>
  )
}

export default ChatContainer;