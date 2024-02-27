import React, { useState } from 'react';
import ChatContainer from './ChatContainer';
import { Query_URL } from '../../utils/constants';

const ChatBox = () => {
  const initialConversation = [{ "hi": "Hello!" }];
  const [chats, setChats] = useState(initialConversation);
  const [texts, setTexts] = useState("");

  const handleResponse = async () => {
    try {
      const queryUrl = Query_URL + texts;
      const resp = await fetch(queryUrl);
      const jsonData = await resp.json();
      const { text, status } = jsonData;

      const message = status === 200 ? text : "I didn't find anything! Try something else!";
      const newChat = { [texts]: message };

      setChats([...chats, newChat]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setTexts("");
  };

  return (
    <div className="bg-white shadow-md rounded-lg max-w-lg w-full fixed right-10 bottom-10 m-4">
      <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
        <p className="text-lg font-semibold">Anya ❤</p>
      </div>
      
      <ChatContainer conversation={chats} />

      <div className="p-4 border-t flex">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setTexts(e.target.value)}
          value={texts}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300"
          onClick={()=>handleResponse()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
