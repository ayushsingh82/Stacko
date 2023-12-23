import {ethers,Contract} from "ethers";
import stakingABI from "../ABI/stakingABI.json";
import stakeTokenABI from "../ABI/stakeTokenABI.json";


export const ConnectWallet=async()=>{
    try{
       let [signer,provider,stakingContract,stakeTokenContract,chainId]=[null]
       if(window.ethereum===null){
        throw new Error("Metamask is not installed");
       }
       const account=await window.ethereum.request({
        method:'eth_requestAccounts',
       })

       let chainIdHex=await window.ethereum.request({
        method:'eth_chainId'
       })
       chainId=parseInt(chainIdHex,10)
       let selectedAccount=account[0];
       if(!selectedAccount){
        throw new Error("No ethereum account available")
       }

       provider=new ethers.BrowserProvider(window.ethereum);
       signer=await provider.getSigner();

       const stakingContractAddress="0xfB528B5905C8f9398fb625Ab4155C567A75cCC9F"
       const stakeTokenContractAddress="0x5263fdc29e84891ded4e0fb8be4084398d9a6e84"

       stakingContract=new Contract(stakingContractAddress,stakingABI)
       stakeTokenContract=new Contract(stakeTokenContractAddress,stakeTokenABI)

       return {provider,selectedAccount,stakeTokenContract,stakingContract,chainId}

    }catch(error){
        console.error(error);
        throw error
    }
}
