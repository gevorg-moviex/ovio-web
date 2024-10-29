import { useState } from 'react'
import './App.css'
import Other from './Components/Other/other'
import Cards from './Components/Cards/cards'
import Suggestions from './Components/Suggestions/suggestion'
import BottomContact from './Components/BottomContact/bottomContact'
import Header from './Components/Header/header'
import FirstTopSide from './Components/FirstTop/firstTopSide'
import Footer from './Components/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FirstTopSide />
      <Header />
      <Other />
      <Cards /> 
      <Suggestions />
      <BottomContact /> */}
      <Footer />
    </>
  )
}

export default App
