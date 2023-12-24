import { useState } from 'react'
import Wallet from './components/Wallet/Wallet'
import Navigation from './components/Navigation/Navigation'
import DisplayPannel from './components/DisplayPanel/DisplayPannel'
import TokenApproval from './components/StakeToken/TokenApproval'
import StakeAmount from './components/StakeToken/StakeAmount'
import Withdraw from './components/Withdraw/Withdraw'
import ClaimReward from './components/ClaimReward/ClaimReward'
import { StakingProvider } from './context/StakingContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Wallet>
      <Navigation/>
      <StakingProvider>
      <DisplayPannel/>
      <StakeAmount/>
      <Withdraw/>
      </StakingProvider>
      <TokenApproval/>
      <ClaimReward/>
     </Wallet>
    </>
  )
}

export default App
