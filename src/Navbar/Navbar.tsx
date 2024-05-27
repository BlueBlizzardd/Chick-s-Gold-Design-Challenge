import { useState } from 'react';
import Button from '../ui/Button/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [visible, setVisible] = useState(false);

    function handleClose() {
        setVisible(visible => !visible);
    }

    return (
        <nav className={`${styles.nav} flex`}>
            <div className={`${styles.navBrand}`}>
                <img src="src\assets\chicks-logo-large.svg" alt="chicks-logo" />
            </div>

            <button className={`${styles.mobileToggle}`} onClick={handleClose}></button>

            <div className={visible ? `${styles.navContainer} ${styles.visible} flex` : `${styles.navContainer} flex`}>
                <ul className={`${styles.navNavigation} flex`}>
                    <li><a className={`${styles.navLink}`} href='#'>Currency</a></li>
                    <li><a className={`${styles.navLink}`} href='#'>Items</a></li>
                    <li><a className={`${styles.navLink}`} href='#'>Accounts</a></li>
                    <li><a className={`${styles.navLink}`} href='#'>Services</a></li>
                    <li><a className={`${styles.navLink}`} href='#'>More</a></li>
                    <li><a className={`${styles.navLink}`} href='#'>Sell</a></li>
                </ul>
                <div className={`${styles.buttonRow} flex`}>
                    <a className={`${styles.navLink}`} href='#'>USD</a>
                    <Button background='#39e29d'>Sign In</Button>
                </div>
            </div>
        </nav>
    )
}