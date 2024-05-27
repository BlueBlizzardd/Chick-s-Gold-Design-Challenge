import styles from './Input.module.css';

type InputProps = {
    type: string,
    icon: string,
    placeholder: string,
    children: React.ReactNode
}

export default function Input({ type, placeholder }: Partial<InputProps>) {
    return (
        <input className={`${styles.input}`} type={type} placeholder={placeholder}></input>
    )
}