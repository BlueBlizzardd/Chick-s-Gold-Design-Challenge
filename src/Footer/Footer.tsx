import styles from './Footer.module.css';
import Socials from './Socials/Socials';

export default function Footer() {
    return (
        <div className={`${styles.footer}`}>
            <div className={`${styles.footerContainer} flex flex-column`}>
                <Socials />
                <div className={`${styles.ruler}`}></div>
                <div className={`${styles.info} flex`}>
                    <div className={`${styles.infoColumn}`}>
                        <div className={`${styles.footerBrand}`}>
                            <img src="src/assets/chicks-logo-large.svg" alt="chicks_logo" />
                        </div>
                        <span>support@chicksgold.com</span>
                    </div>
                    <div className={`${styles.infoColumn}`}>
                        <div className={`${styles.infoHeading}`}>Chicks Gold</div>
                        <a href="#">Games</a>
                        <a href="#">About Us</a>
                        <a href="#">Blog</a>
                        <a href="#">Sitemap</a>
                    </div>
                    <div className={`${styles.infoColumn}`}>
                        <div className={`${styles.infoHeading}`}>Support</div>
                        <a href="#">Contact Us</a>
                        <a href="#">FAQ</a>
                    </div>
                    <div className={`${styles.infoColumn}`}>
                        <div className={`${styles.infoHeading}`}>Legal</div>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Copyright Policy</a>
                    </div>
                    <div className={`${styles.infoColumn}`}>
                        <span>Trustpilot Reviews</span>
                    </div>
                </div>
                <div className={`${styles.copyright}`}>© 2017 - 2020, ChicksGold.com. All Rights Reserved.</div>
            </div>
        </div>
    )
}