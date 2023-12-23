import { useState,useEffect,useContext,useRef } from "react"
import Button from "../Button/Button"
import {ethers} from "ethers"
import Web3Context from "../../context/Web3Context"

const TokenApproval=()=>{
    const {stakeTokenContract,stakingContract,provider}=useContext(Web3Context);
    const approveTokenRef=useRef();
    const [transactionStatus,setTransactionStatus]=useState("")

 const approveToken=async(e)=>{
    e.preventDefault();
    const amount=approveTokenRef.current.value.trim();

    if(isNaN(amount) || amount<=0){
        console.error("Please enter valid number");
        return ;
    }
    const amountToSend=ethers.parseUnits(amount,18).toString();
    try{
      const transaction=await stakeTokenContract.approve(stakingContract.target,amountToSend);
      setTransactionStatus("Transaction is pending...")
      // const transObj=await provider.getTransaction(transaction.hash)
      const receipt=await transaction.wait();
      if(receipt.status===1){
        setTransactionStatus("Transaction is successful");
        setTimeout(()=>{
            setTransactionStatus("")
        },5000)
        approveTokenRef.current.value=""
      }else{
        setTransactionStatus("Transaction Failed")
      }
    }catch(error){
        console.error("Token Approval Failed",error.message);
    }
 }

    return(
        <div>
        {transactionStatus && <div>{transactionStatus}</div>}
            <form onSubmit={approveToken}>
              <label>Token Approval:</label>  
              <input type="text" ref={approveTokenRef} />
              <Button onClick={approveToken} type="submit" label="Token Approve"/>
            </form>
        </div>
    )
}

export default TokenApproval