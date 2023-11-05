import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import BotCollection from './components/BotCollection'
import BotSpecs from './components/BotSpecs'
import SortBar from './components/SortBar'


function App ()  {
  
    return (
     <BrowserRouter>
       <Routes>
         <Route path='/' element={<Layout/>}>
           <Route index element={<BotCollection/>}/>
           <Route  path='botSpecs' element={<BotSpecs/>}/>
           <Route  path='sorted-bots' element={<SortBar/>}/>
         </Route>
       </Routes>
     </BrowserRouter>
    )
}

export default App