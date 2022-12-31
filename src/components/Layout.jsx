import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../css/Layout.module.css";
import logo from "../assets/nirvana_new.png";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

function Layout({ children }) {

    const [isActive, setIsActive] = useState("");

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href={"/"}>
                    <Image src={logo} alt="logo" height={50} width={120} />
                </Link>
            </div>

            <ul className={isActive === false ? styles.navmenu : styles.navmenu + " " + styles.active}>
                {}
                <li className={styles.navLink}>
                    <Link href={"/rules"}>Teams</Link>
                </li>
                <li className={styles.navLink}>
                    <Link href={"/whitepaper"}>Whitepaper</Link>
                </li>
                <li className={`${styles.navLink} ${styles.small}`}>
                    <ConnectButton />
                </li>
            </ul>

            <button onClick={handleClick} className={isActive === false ? styles.hamburger : styles.hamburger + " " + styles.active}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
        </nav>

        {children}

        <footer className={styles.footer}>
            <h4>Built by {" "} 
            <u>
                <a href="https://twitter.com/techwithmide" target="_blankspace" rel="noreferrer">IDE</a>
            </u>
            </h4>
        </footer>
        </>
    );
}

export default Layout;