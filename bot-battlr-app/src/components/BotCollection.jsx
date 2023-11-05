import React from 'react'
import './../styles/botCollection.css'
import Bot from './Bot'

function BotCollection ({botArmy}) {
    const army = botArmy.map((bot) => (
        <Bot 
          key={bot.id} 
          name ={bot.name}
          health ={bot.health}
          damage ={bot.damage}
          armor ={bot.armor}
          catchPhrase ={bot.catchphrase} 
          avatar ={bot.avatar_url}
        />
    ));

    return (
      <div className='bot-collection'>
        <div className='card-title'>
          <h2>Bots Collection</h2>
        </div>
        <div className='card-wrap'>
         {army}
        </div>
      </div>
    )
}

export default BotCollection