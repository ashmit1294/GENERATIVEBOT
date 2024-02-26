import './App.css';
import ChatBox from './components/ChatBox';
import ChatButton from './components/ChatButton';
import { useState } from 'react';
function App() {
  const [chatOn,setChaton]=useState(false);
    return (
    <div className='fixed bottom-0 right-0 mb-4 mr-4'>
    {chatOn?<ChatBox />:<ChatButton />}
    </div>
  )
};

export default App;
