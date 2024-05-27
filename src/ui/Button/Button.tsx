import btn from './Button.module.css';

type ButtonProps = {
    background?: string,
    color?: string,
    border?: string,
    children: React.ReactNode
}

export default function Button({ background = 'transparent', color = '#37384b', border = '1px solid transparent', children }: ButtonProps) {
    return <button style={{ backgroundColor: background, color: color, border: border }} className={`${btn.btn}`}>
        {children}
    </button>
}