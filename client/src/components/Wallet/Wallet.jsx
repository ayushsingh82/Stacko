import { ConnectWallet } from "@thirdweb-dev/react";
import { useState,useEffect } from "react";

const Wallet=()=>{
    const [state,setState]=useState({
        provider:null,
        account:null,
        stakingContract:null,
        stakeTokenContract,
        chainId:null
    })

    const [isLoading,setIsLoading]=useState(false);

    const handleWalllet=async=>{
        try{
          setIsLoading(true);
          const {provider,account,stakingContract,stakeTokenContract,chainId}=await ConnectWallet();
          setState({provider,account,stakingContract,stakeTokenContract,chainId})
        }catch(error){
           console.error("Error while connecting wallet :",error.message)
        }finally{
            setIsLoadingsLoading(false)
        }
    }
}

export default Wallet;