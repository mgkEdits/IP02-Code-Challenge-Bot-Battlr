import React from 'react'
import { useState, useEffect } from "react";
import YourBotArmy from './components/YourBotArmy'
import BotCollection from '././components/BotCollection';

function Layout () {
    const [bots, setBots] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/bots")
          .then((response) => response.json())
          .then((data) => setBots(data));
      }, []);

    return (
      <div className='section-main'>
        <YourBotArmy/>
        <BotCollection botArmy={bots}/>
      </div>
    )
}

export default Layout