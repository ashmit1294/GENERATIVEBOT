import React from 'react';
import Query from './Query';
import Response from './Response'
const chatBox = () => {
  return (
    <div className="bg-white shadow-md rounded-lg max-w-lg w-full fixed right-10 bottom-10">
        <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Admin Bot</p>
         </div>
         <div  className="p-4 h-80 overflow-y-auto">
          <Query />
          <Response />
        </div>
         <div className="p-4 border-t flex">
            <input id="user-input" type="text" placeholder="Type a message" className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button id="send-button" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">Send</button>
        </div>
    </div>
  )
}

export default chatBox