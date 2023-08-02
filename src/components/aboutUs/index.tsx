import { useState } from 'react';
import './style.scss';

const GALLERY = [
    "gallery-photo-1.png",
    "gallery-photo-2.png",
    "gallery-photo-3.png",
    "gallery-photo-4.png"
];

const AboutUs = () => {

  const [activeImg, setActiveImg] = useState('gallery-photo-1.png');

  return (
    <section>
        <div className="container">
            <div className="gym-about row">
                <div className="gym-about__content">
                    <h3>About us</h3>
                    <p>
                        Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq. m of space dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength, Life Fitness, and TechnoGym.
                    </p>
                    <p>
                        With affordable membership options, Gym24 is accessible to everyone who wants to reach their fitness goals, whether it's building strength, increasing endurance, or losing weight.
                    </p>
                    <p>
                        Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored to each individual's needs and goals. 
                    </p>
                </div>
                <div className="gym-about__gallery">
                    <div className="gym-about__images">
                        {GALLERY.map((item) => 
                            <img key={item}
                                src={`images/${item}`} 
                                className={`gym-about__images_item ${item === activeImg ? 'gym-about__images_item--active' : ''} `}  
                            />
                        )}
                    </div>
                    <div className="gym-about__nav">
                        <div className="gym-about__span_nav">
                            {GALLERY.map((nav) => 
                                <span 
                                    key={nav}
                                    className={`gym-about__item_nav ${activeImg === nav ? 'gym-about__item_nav--active' :''}`}
                                    onClick={() => setActiveImg(nav)}>
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs