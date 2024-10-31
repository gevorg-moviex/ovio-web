import { useState } from 'react'
import './App.css'
import Other from './Components/Other/other'
import Cards from './Components/Cards/cards'
import Suggestions from './Components/Suggestions/suggestion'
import BottomContact from './Components/BottomContact/bottomContact'
import Header from './Components/Header/header'
import FirstTopSide from './Components/FirstTop/firstTopSide'
import Footer from './Components/Footer/footer'
import Section from './Components/Section/section'
import SuggestionsLayout from './Layouts/SuggestionsLayout'
import Channel from './Components/Channel/channel'
import VideoPart from './Components/VideoPart/videopart'
import Help from './Components/Help/help'
import HelpLayout from './Layouts/HelpLayout'
import News from './Components/News/news'
import { BiLogIn } from 'react-icons/bi'
import Register from './Components/Register/register'
import RegisterLayout from './Layouts/RegisterLayout'
import SlicedHeader from './Components/SlicedHeader/slicedHeader'
import SlicedFooter from './Components/SlicedFooter/slicedFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FirstTopSide />
      <Header />
      <Section />
      <Other />
      <Cards /> 
      <Suggestions />
      <BottomContact /> 
      <Footer /> */}
     {/* <SuggestionsLayout /> */}
     {/* <VideoPart />*/}
     {/* <Suggestions />
     <BottomContact />  */}
     {/* <HelpLayout /> */}
     {/* <News /> */}
     {/* <RegisterLayout /> */}
     {/* <SlicedHeader /> */}
     {/* <SlicedFooter /> */}
    </>
  )
}

export default App
