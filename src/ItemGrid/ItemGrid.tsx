import Input from "../ui/Input/Input"
import { ItemCard, CardProps } from "./ItemCard/ItemCard"
import itemGrid from './ItemGrid.module.css'
import Pagination from "./Pagination/Pagination"

export default function ItemGrid({ items }: { items: Array<CardProps> }) {
    return (
        <div className={`${itemGrid.itemContainer}`}>
            <div className={`${itemGrid.searchResults} flex`}>
                <span className={`${itemGrid.resultNum}`}>Showing 20 of 125</span>
                <Input type="text" placeholder="Sort by" />
            </div>
            <div className={`${itemGrid.itemGrid} grid`}>
                {items.map((item, index) =>
                    <ItemCard key={index} name={item.name} icon={item.icon} price={item.price} description={item.description} />
                )}
            </div>
            <Pagination />
        </div>
    )
}