import "./style.css";

interface ButtonProps {
    text: string;
    size: string;
}

const Button: React.FC<ButtonProps> = ({text, size}) => {

    return (
        <button className={`gym-button gym-button--${size}`}>{text}</button>
    )
}

export default Button;