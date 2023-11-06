import React, { useState } from 'react'
import './../styles/botCollection.css'
import BotSpecs from './BotSpecs';

function BotCollection ({bots, onEnlistBot, setBots}) {
  const [selectedBot, setSelectedBot] = useState(null);

  const handleBotCardClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleBack = () => {
    setSelectedBot(null);
  };

  function handleDelete(bot){
    const botId=bot.id;

    fetch('http://localhost:3000/bots/${botId}',{
      method:"DELETE",
    })
          .then((response) => response.json())
          .then((data) => {
            const updatedBots = bots.filter((bott) => bott.id !== botId);
            setBots(updatedBots, botId);
          });
  }

    return (
      <div className='bot-collection'>
        <div className='card-title'>
          <h2>Bots Collection</h2>
        </div>

        {selectedBot ? (
          <BotSpecs bot={selectedBot} onEnlistBot={onEnlistBot} onBack={handleBack} />
        ) : (
        <div className='cards'>
        { bots.map((bot) => ( 
        <div key= {bot.id} className='card-wrapper' >
        <div className='card' onClick={() => handleBotCardClick(bot)}>
          
            <img className='avatar' src={bot.avatar_url} alt={bot.name} onClick={() => onEnlistBot(bot)}/>
            <h3>{bot.name}</h3>
            <h3>{bot.bot_class}</h3>
            <p>{bot.catchphrase}</p>
            <a>🩶{bot.health} | 🪖 {bot.damage} | 🛡️{bot.armor}</a>
            <a className='btn'onClick={() => handleDelete(bot)}> | X | </a>
        </div>
        </div>
        ))}
        </div>
        )}
      </div>
    )
}

export default BotCollection