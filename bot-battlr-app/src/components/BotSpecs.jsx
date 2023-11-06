import React from 'react'

function BotSpecs({ bot, onEnlistBot, onBack }) {
      return (
        <div className='bot-specs'>
          <h2>Bot Details</h2>
          <div className='specs'>
            <div className='image'>
            <img className='avatar' src={bot.avatar_url} alt={bot.name} />
            </div>
            <div className='botInfo'></div>
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
            <p>🩶{bot.health} | 🪖{bot.damage} | 🛡️{bot.armor}</p>
            <button onClick={() => onEnlistBot(bot)}>Enlist</button>
            <button onClick={onBack}>Back to List</button>
          </div>
        </div>
      );
    }

export default BotSpecs