import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AuctionCard from './components/layouts/views/home/AuctionCard'
import AuthForm from './components/layouts/views/home/AuthForm'
import BidForm from './components/layouts/views/home/BidForm'
import BidHistory from './components/layouts/views/home/BidHistory'
import CountdownTimer from './components/layouts/views/home/CountdownTimer'



//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <AuctionCard/>
 <AuthForm/>
 <BidForm/>
 <BidHistory/>
 <CountdownTimer/>

    </>
  )
}

export default App
