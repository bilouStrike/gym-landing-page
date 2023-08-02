import './style.scss';
import SocialContact from '../UI/socialContact';

interface TrainerProps {
    trainer: {
        name: string,
        photo: string
    }
}

const SOCIAL_DATA = [
    "youtube.png",
    "twitter.png",
    "instagram.png"
];

const TrainerCard:React.FC<TrainerProps> = ({trainer}) => {
    return (
        <div className="gym-trainers__item">
            <img src={`images/${trainer.photo}`}/>
            <h3 className="gym-trainers__title">{trainer.name}</h3>
            <SocialContact items={SOCIAL_DATA}/>
        </div>
    );
}

export default TrainerCard;