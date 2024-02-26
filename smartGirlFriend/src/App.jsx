import './App.css';
import ChatBox from './components/ChatBox';
import ChatButton from './components/ChatButton';
import { useState } from 'react';
function App() {
  const [chatOn,setChaton]=useState(false);
  const handleClick=()=>{
    setChaton(!chatOn)
  }
    return (
    <div className=''>
    {chatOn?<ChatBox />:""}
    <ChatButton onChange={handleClick}/>
    </div>
  )
};

export default App;
