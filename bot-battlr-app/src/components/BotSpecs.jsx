import React from 'react'
import { Link } from 'react-router-dom'

function BotSpecs (name, health, damage, armor,catchphrase,avatar) {
 
    return (
      <div className='card'>
        <div className='card-content'>
          <div>
            <img className='avatar' src={avatar}/>
          </div>

          <div>
            <h3>Name:{name}</h3>
            <h4>catchphrase:</h4>
            <p>{catchphrase}</p>

            <a>health{health} | damage {damage} | armor{armor}</a>
         
            <a></a>
            <a></a>
            <Link/>
            <Link />

          </div>
          
          <h3>{name}</h3>
          <p>{catchphrase}</p>
          <a>health{health} | damage {damage} | armor{armor}</a>
        </div>
      </div>
    )
}

export default BotSpecs