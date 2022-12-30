import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Transaction from "../src/components/Transaction";

function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://twitter.com/nirvanaacd">Nirvana Academy</a>!
        </h1>

        <p className={styles.description}>
          You must have completed all exercise to qualify for Mint
        </p>

        <div className={styles.connect}>
         
        </div>

        <div className={styles.grid}>
          
            <h2></h2>
            <p>
              
            </p>

            <Transaction />
          
        </div>
      </main>
    </div>
  );
}


export default Home;