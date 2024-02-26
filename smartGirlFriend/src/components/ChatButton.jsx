import React from 'react'

const ChatButton = ({onChange}) => {
  return (
    <div className='fixed bottom-0 right-0 mb-4 mr-4 '>
     <button onClick={()=>onChange()} className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
    <abc />Chat with Bot
  </button>
    </div>
  )
}

export default ChatButton