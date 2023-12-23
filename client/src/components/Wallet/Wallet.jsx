import Web3Context from "../../context/Web3Context";
import { useState,useEffect } from "react";
import  connectWallet  from "../../utils/connectWallet";
import Button from "../Button/Button";
import { handleAccountChange } from "../../utils/handleAccountChange";
import { handleChainChange } from "../../utils/handleChainChange";

const Wallet=({children})=>{
    const [state,setState]=useState({
        provider:null,
        account:null,
        stakingContract:null,
        stakeTokenContract:null,
        chainId:null
    })

    const [isLoading,setIsLoading]=useState(false);

    useEffect(()=>{
        window.ethereum.on('accountChanged',()=>handleAccountChange(setState))
        window.ethereum.on('chainChanged',()=> handleChainChange(setState))

        return ()=>{
            window.ethereum.removeListener('accountChanged',()=>handleAccountChange(setState))
            window.ethereum.removeListener('chainChanged',()=> handleChainChange(setState))
    
        }
    },[])


    const handleWallet=async()=>{
        try{
          setIsLoading(true);
          const {provider,selectedAccount,stakingContract,stakeTokenContract,chainId}=await connectWallet();
        //   console.log("Provider:" ,provider,"SelectedAccount:",selectedAccount,"stakingContract:",stakingContract,"stakeTokenContract:",stakeTokenContract,"chainId:",chainId)
          setState({provider,selectedAccount,stakingContract,stakeTokenContract,chainId})
        }catch(error){
           console.error("Error while connecting wallet :",error.message)
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <div>
        <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
        {isLoading && <p>Loading...</p>}
          <Button onClick={handleWallet} label="Connect Wallet"/>
        </div>
    )
}

export default Wallet;
