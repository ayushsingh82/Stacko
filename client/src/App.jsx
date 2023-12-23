import { useState } from 'react'
import Wallet from './components/Wallet/Wallet'
import Navigation from './components/Navigation/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Wallet>
      <Navigation/>
     </Wallet>
    </>
  )
}

export default App
