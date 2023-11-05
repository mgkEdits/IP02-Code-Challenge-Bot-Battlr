import React from 'react'
import { useState, useEffect } from "react";
import YourBotArmy from './components/YourBotArmy'
import BotCollection from '././components/BotCollection';

function Layout () {
    const [bots, setBots] = useState([]);
    const [enlistedBots, setEnlistedBots] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:3000/bots")
          .then((response) => response.json())
          .then((data) => setBots(data));
      }, []);

    return (
      <div className='section-main'>
        <YourBotArmy enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} />
        <BotCollection bots={bots}/>
      </div>
    )
}

export default Layout