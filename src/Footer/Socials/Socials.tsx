import socials from './Socials.module.css'

export default function Socials() {
    return (
        <div className={`${socials.container} flex`}>
            <div className={`${socials.icon} ${socials.fb} flex`}>
                <img src="src/assets/socials/facebook_white.svg" alt="facebook" />
            </div>
            <div className={`${socials.icon} ${socials.ig} flex`}>
                <img src="src/assets/socials/instagram_white.svg" alt="instagram" />
            </div>
            <div className={`${socials.icon} ${socials.twt} flex`}>
                <img src="src/assets/socials/twitter_white.svg" alt="twitter" />
            </div>
            <div className={`${socials.icon} ${socials.disc} flex`}>
                <img src="src/assets/socials/discord_white.svg" alt="discord" />
            </div>
        </div>
    )
}