import { useState } from "react";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import styles from "../css/Transaction.module.css";

function Transaction() {

    const [walletAddress, setWalletAddress] = useState('');
    
    const { config } = usePrepareContractWrite({
        address: "0xc2577f0DCcC17E7d479788A9F8e85f5F02564976",
        abi: [
            {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                  }
                ],
                "name": "mint",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
              },
        ],
        functionName: 'mint',
        args: [parseFloat(walletAddress)],
        enabled: false,
    });

    const { write } = useContractWrite(config);

    return (
        <form className={styles.form} onSubmit={(e) => {e.preventDefault()
        write?.()
        }}
        >
            <label htmlFor="walletAddress">Wallet Address:</label>
            <input type="text" onChange={(e) => setWalletAddress(e.target.value)} placeholder="Enter the wallet address to receive NFT" value={walletAddress} />
            <button disabled={!write}>Mint NFT</button>
        </form>
    );
}

export default Transaction;