import React from 'react'

function Bot ({name, health, damage, armor, catchPhrase, avatar}) {
 
    return (
      <div className='card'>
        <div className='card-content'>
          <img className='avatar' src={avatar}/>
          <h3>{name}</h3>
          <p>{catchPhrase}</p>
          <a>🩶{health} | 🪖 {damage} | 🛡️{armor}</a>
        </div>
      </div>
    )
}

export default Bot