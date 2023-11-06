import React from 'react'
import './../styles/yourBotArmy.css'

function YourBotArmy ({enlistedBots, onReleaseBot}) {

    return (
      <div className='card-botArmy'>
        <div className='card-title'>
          <h2>YourBotArmy</h2>
        </div>
        <div className='armys'>
        { enlistedBots.map((bot) => ( 
        <div key= {bot.id} className='army-wrapper' onClick={() => onReleaseBot(bot)}>
        <div className='army' >
          
            <img className='avatar' src={bot.avatar_url} alt={bot.name}/>
            <h3>{bot.name}</h3>
            <h3>{bot.bot_class}</h3>
            <p>{bot.catchphrase}</p>
            <a>🩶{bot.health} | 🪖 {bot.damage} | 🛡️{bot.armor}</a>
          
        </div>
        </div>
        ))}
        </div>
      </div>
    )
}

export default YourBotArmy