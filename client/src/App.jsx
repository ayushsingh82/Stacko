import { useState } from 'react'
import Wallet from './components/Wallet/Wallet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Wallet/>
    </>
  )
}

export default App
