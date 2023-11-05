import React from 'react'
import { useState, useEffect, useRef } from "react";
import YourBotArmy from './components/YourBotArmy'
import BotCollection from '././components/BotCollection';

function App () {
    const [bots, setBots] = useState([]);
    const [enlistedBots, setEnlistedBots] = useState([]); 
    const enlistedBotRefs = useRef({}); 

    useEffect(() => {
        fetch("http://localhost:3000/bots")
          .then((response) => response.json())
          .then((data) => setBots(data));
      }, []);

      const handleEnlistBot = (bot) => {
    
        // Add the bot to enlistedBots
        setEnlistedBots([...enlistedBots, bot]);
        console.log(bot)
      };
    

    return (
      <div className='section-main'>
        <YourBotArmy enlistedBots={enlistedBots} />
        <BotCollection bots={bots} onEnlistBot={handleEnlistBot}/>
      </div>
    )
}

export default App