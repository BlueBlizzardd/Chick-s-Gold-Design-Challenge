import { useEffect, useState } from 'react';
import { CardProps } from '../ItemGrid/ItemCard/ItemCard';
import ItemGrid from '../ItemGrid/ItemGrid';
import Input from '../ui/Input/Input';
import content from './Content.module.css';

export default function Content() {
    const [data, setData] = useState<CardProps[]>([])

    useEffect(() => {
        fetch('src/assets/sampleData.json')
            .then(result => result.json())
            .then((res: CardProps[]) => setData(res));
    }, []);

    return (
        <section className={`${content.background}`}>
            <div className={`${content.container}`}>
                <div className={`${content.heading}`}>Game Items</div>
                <div className={`${content.searchbarRow} flex`}>
                    <Input type='text' placeholder='Select a game' />
                    <Input type='text' placeholder='Search' />
                    <Input type='text' placeholder='Price' />
                    <Input type='text' placeholder='Item Type' />
                </div>
                <ItemGrid items={data} />
            </div>
        </section>
    )
}