import React from 'react'
import './../styles/botCollection.css'

function BotCollection ({bots, onEnlistBot }) {
    
  function handleDelete(bot){
    const botId=bot.id;

    fetch("http://localhost:3000/bots/${botId}",{
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
        <div className='cards'>
        { bots.map((bot) => ( 
        <div key= {bot.id} className='card-wrapper' >
        <div className='card'>
          
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
      </div>
    )
}

export default BotCollection