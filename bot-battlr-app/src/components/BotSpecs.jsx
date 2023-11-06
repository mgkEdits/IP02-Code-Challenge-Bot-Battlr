import React from 'react'
import './../styles/botSpecs.css'
function BotSpecs({ bot, onEnlistBot, onBack }) {
      return (
        <div className='bot-specs'>
          <h2>Bot Details</h2>
          <div className='specs'>
            <div className='image'>
            <img className='avatarr' src={bot.avatar_url} alt={bot.name} />
            </div>
            <div className='botInfo'>
            <h5>{bot.name}</h5>
            <p className='bot-inffo'>Bot Class:    {bot.bot_class}</p>
            <p className='bot-inffo'>Catchphrase:</p>
            <p className='bot-inffo'>{bot.catchphrase}</p>
            <p className='bttn'>🩶{bot.health}   |   🪖{bot.damage}   |   🛡️{bot.armor}</p>
            <button className='btnn' onClick={() => onEnlistBot(bot)}>Enlist</button>
            <button className='btnn' onClick={onBack}>Back to List</button>

            </div>
            
          </div>
        </div>
      );
    }

export default BotSpecs