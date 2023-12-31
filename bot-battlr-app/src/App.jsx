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
        if (bot.bot_class in enlistedBotRefs.current) {
          // You can enlist only one bot from each bot_class
          alert(`You can enlist only one ${bot.bot_class}`);
          return;
        }
        // Add the bot to enlistedBots
        setEnlistedBots([...enlistedBots, bot]);
        console.log(bot)

        // Add the bot reference to the enlistedBotRefs
        enlistedBotRefs.current[bot.bot_class] = bot;
      };

      const handleReleaseBot = (bot) => {
        // Remove the bot from enlistedBots
        const updatedEnlistedBots = enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id);
        setEnlistedBots(updatedEnlistedBots);
    
        // Remove the bot reference from enlistedBotRefs
        delete enlistedBotRefs.current[bot.bot_class];
      };
    

    return (
      <div className='section-main'>
        <YourBotArmy enlistedBots={enlistedBots} onReleaseBot={handleReleaseBot} />
        <BotCollection bots={bots} onEnlistBot={handleEnlistBot} setBots={setBots}/>
      </div>
    )
}

export default App