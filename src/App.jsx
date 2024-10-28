import { useState } from 'react'
import './App.css'
import Other from './Components/Other/other'
import Cards from './Components/Cards/cards'
import Suggestions from './Components/Suggestions/suggestion'
import TopSide from './Components/TopSide/topside'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Other /> */}
      {/* <Cards />  */}
      {/* <Suggestions /> */}
      <TopSide />
    </>
  )
}

export default App
