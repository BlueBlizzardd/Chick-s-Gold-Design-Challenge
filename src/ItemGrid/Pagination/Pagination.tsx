import Button from '../../ui/Button/Button';
import pagination from './Pagination.module.css';

export default function Pagination() {
    return (
        <div className={`${pagination.paginator} flex`}>
            <Button color='#fff' border='1px solid #5762d5'><span className={`arrow ${pagination.arrowLeft}`}></span></Button>
            <Button background='#5762d5' color='#fff'>1</Button>
            <Button color='#fff'>2</Button>
            <Button color='#fff'>3</Button>
            <Button color='#fff'>4</Button>
            <Button color='#fff'>...</Button>
            <Button color='#fff'>11</Button>
            <Button color='#fff' border='1px solid #5762d5'><span className={`arrow ${pagination.arrowRight}`}></span></Button>
        </div>
    )
}