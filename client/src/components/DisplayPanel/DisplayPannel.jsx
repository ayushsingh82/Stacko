import EarnedReward from "./EarnedReward"
import RewardRate from "./RewardRate"
import StakedAmount from "./StakedAmount"

const DisplayPannel=()=>{
  return (
    <div>
        <StakedAmount/>
        <EarnedReward/>
        <RewardRate/>
    </div>
  )
}

export default DisplayPannel