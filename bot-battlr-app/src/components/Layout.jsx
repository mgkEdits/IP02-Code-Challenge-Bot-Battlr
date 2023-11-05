import React from 'react'
import { Outlet } from 'react-router-dom'
import YourBotArmy from './YourBotArmy'

function Layout () {

    return (
      <div className='section-main'>
        <YourBotArmy/>
        <Outlet/>
      </div>
    )
}

export default Layout