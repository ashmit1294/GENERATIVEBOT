import React from 'react';
import ChatContainer from './ChatContainer';

const chatBox = () => {

  let conversation=[
    {
    "query":"response",
  },
];

  return (
    <div className="bg-white shadow-md rounded-lg max-w-lg w-full fixed right-10 bottom-10 m-4">
        <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Sheila</p>
         </div>
         <ChatContainer conversation={conversation} />
         <div className="p-4 border-t flex">
            <input  
            type="text" 
            placeholder="Type a message" 
            className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            
            >Send</button>
        </div>
    </div>
  )
}

export default chatBox;