import React from 'react'
import Query from './Query';
import Response from './Response';
const ChatContainer = ({conversation}) => {
  return (
    <div className="p-4 h-80 overflow-y-auto">
      {conversation?.map((obj)=>{
        return <div>
        <Query text={Object.keys(obj)} />
        <Response text={Object.values(obj)}/>
        </div>
      })}  
    </div>
  )
}

export default ChatContainer;