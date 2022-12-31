import { ethers } from "ethers";
import { Contract } from "ethers";
import * as React from "react";
import { useState } from "react";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./constant";
import styles from "../css/Transaction.module.css";



function Transaction() {

    const [walletAddress, setWalletAddress] = useState('');

    const mint = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = await provider.getSigner();
        const contract = new Contract(
          CONTRACT_ADDRESS,
          CONTRACT_ABI,
          signer
        )
        const tx = await contract.mint(walletAddress);
        const transactionHash = tx.hash;
        setHash(transactionHash);
        console.log(tx.hash)
        setSuccess(tx.hash);
      } catch (error) {
        console.log(error)
      }
    }

    const [success, setSuccess] = useState('');
    const [hash, setHash] = useState('');

    
    
    


    return (
        <form className={styles.form} onSubmit={(e) => {e.preventDefault() 
        mint()}}>
            <label htmlFor="walletAddress">Wallet Address:</label>
            <input 
            id="walletAddress" 
            onChange={(e) => setWalletAddress(e.target.value)} 
            placeholder="Enter the wallet address to receive NFT" 
            value={walletAddress} 
            />
            <button>Mint NFT</button>
            {success && (
              <div style={{textAlign: 'center'}}>
                Successfully minted your NFT!
                <div>
                  <a href={`https://polygonscan.com/tx/${hash}`}>Check Blockchain</a>
                </div>
              </div>
            )}
        </form>
    );
}

export default Transaction;