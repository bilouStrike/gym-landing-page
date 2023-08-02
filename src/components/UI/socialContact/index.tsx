
import './style.scss';

interface SocialContactProps {
    items: string[]
}

const SocialContact: React.FC<SocialContactProps> = ({items}) => {
  return (
        <ul className="gym-trainers__contact">
            {items.map((item) => 
                <li key={item}><a href="#"><img src={`images/${item}`} /></a></li>
            )}
        </ul>
    );
}

export default SocialContact