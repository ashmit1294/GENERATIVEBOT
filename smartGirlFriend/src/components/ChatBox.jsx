import React from 'react';
import { useState } from 'react';
import ChatContainer from './ChatContainer';
import { Query_URL } from '../../utils/constants';

const chatBox = () => {
  let conversation=[
    {
      "hi":"Hello!",
  },
];
const [chats,setChats]=useState(conversation); 
const [text,setText]=useState("");
const handleInput=()=>{

} 
const handleSend= () =>{

};
const handleResponse= async ()=>{
  let queryUrl=Query_URL+"hi";

  const resp=await fetch(queryUrl);
  const jsonData=await resp.json();
  console.log(jsonData)

}
  return (
    <div className="bg-white shadow-md rounded-lg max-w-lg w-full fixed right-10 bottom-10 m-4">
        <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold"> Anya ❤ </p>
         </div>
         <ChatContainer conversation={chats}/>

         <div className="p-4 border-t flex">
            <input  
            type="text" 
            placeholder="Type a message" 
            className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
            onClick={()=>handleResponse()}
            >Send</button>
        </div>
    </div>
  )
}

export default chatBox;