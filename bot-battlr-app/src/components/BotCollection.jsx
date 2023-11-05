import React from 'react'
import './../styles/botCollection.css'

function BotCollection ({bots}) {
    

    return (
      <div className='bot-collection'>
        <div className='card-title'>
          <h2>Bots Collection</h2>
        </div>
        <div className='cards'>
        { bots.map((bot) => ( 
        <div key= {bot.id} className='card-wrapper'>
        <div className='card' >
          
            <img className='avatar' src={bot.avatar_url}/>
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
            <a>🩶{bot.health} | 🪖 {bot.damage} | 🛡️{bot.armor}</a>
          
        </div>
        </div>
        ))}
        </div>
      </div>
    )
}

export default BotCollection