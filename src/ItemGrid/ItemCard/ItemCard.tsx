import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'
import card from './ItemCard.module.css'

export type CardProps = {
    name: string,
    icon: string,
    price: number,
    description: string
}

export function ItemCard({ name, icon, price, description }: CardProps) {
    return (
        <div className={`${card.cardContainer}`}>
            <div className={`${card.stock} flex`}>
                <div className={`${card.stockInfo}`}>
                    <span className={`${card.sale}`}>On Sale</span>
                    <span className={`${card.availability}`}>In Stock</span>
                </div>
                <Input type='number' />
            </div>
            <div className={`${card.icon}`}>
                <img src={icon} alt={`${icon}`} />
            </div>
            <div className={`${card.title}`}>{name}</div>
            <div className="priceRow flex">
                <div className={`${card.price}`}>${price / 2}</div>
                <div className={`${card.discount}`}>${price}</div>
            </div>
            <div className={`${card.description}`}>{description}</div>
            <div className={`${card.optionsRow} flex`}>
                <Button background='#3f4254' color='hsla(0,0%,100%,.75)'>Details</Button>
                <Button background='#5762d5' color='#fff'>Add</Button>
            </div>

        </div>
    )
}