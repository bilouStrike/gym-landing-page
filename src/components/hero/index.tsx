import Button from "../UI/button";
import Navbar from "../UI/navbar";
import AnimateText from '../../utils/AnimateText';

import './style.scss';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <Navbar />
                <div className="hero__content">
                    <AnimateText>
                        <h1> Free Trial Session with Trainer </h1>
                    </AnimateText>
                    <Button text="Detailed" size="big"/>
                </div>
            </div>
        </section>
    );
}

export default Hero;