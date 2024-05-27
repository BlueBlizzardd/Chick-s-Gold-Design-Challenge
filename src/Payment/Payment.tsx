import payment from './Payment.module.css';

export default function Payment() {
    return (
        <div className={`${payment.paymentRow}`}>
            <div className={`${payment.container} flex`}>
                <div className={`${payment.method}`}>
                    <img src="./src/assets/paymentMethods/Visa_Inc._logo.svg" alt="Visa" />
                </div>
                <div className={`${payment.method}`}>
                    <img src="./src/assets/paymentMethods/Mastercard-logo.svg" alt="Master_Card" />
                </div>
                <div className={`${payment.method}`}>
                    <img src="./src/assets/paymentMethods/Skrill_logo.svg" alt="Skrill" />
                </div>
                <span>and 50+ more</span>
            </div>
        </div>
    )
}