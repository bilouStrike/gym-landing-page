import SocialContact from '../UI/socialContact';
import './style.scss';

const SOCIAL_DATA = [
    "youtube.png",
    "twitter.png",
    "instagram.png",
    "facebook.png"
];

const Footer = () => {
  return (
    <footer className="gym-trainer-footer">
        <div className="container row space-between">
            <div className="gym-trainer-footer__about">
                <img src="images/GYM24-logo.png" />
                <p>Build strength and confidence at our gym with state-of-the-art equipment, personalized training, and a motivating community</p>
            </div>
            <div className="gym-trainer-footer__address">
                <h4>Address</h4>
                <p>Republic of Belarus
                    Minsk city
                    Dzerzhinsky Avenue 15
                </p>
            </div>
            <div className="gym-trainer-footer__contact">
                <h4>Conatct</h4>
                <SocialContact items={SOCIAL_DATA}/>
            </div>
        </div>
    </footer>
  )
}

export default Footer;