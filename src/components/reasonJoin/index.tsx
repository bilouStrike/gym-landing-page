import InforBox from '../UI/infobox';
import AnimateText from '../../utils/AnimateText';

import './style.scss';

const infoBoxData = [
    {
        title: "15000 sq.m",
        description: "A spacious gym for sports - a safe distance between excercise machines",
        icon: "sqm.svg"
    },
    {
        title: "More than 200 equipements",
        description: "No queues at this similators, Premium equipement from lifeStyle. Hammer stength. TechnoGym  ",
        icon: "equipement.svg"
    },
    {
        title: "4 Fitness zones",
        description: "From cardio to functional to cycle, seperate area for boxing and mixed matrial atrs",
        icon: "fitness-zone.svg"
    },
    {
        title: "Round-The-Clock operation",
        description: "The Gym is open 24 hours a day, also works on all holidays and weekends",
        icon: "round-clock.svg"
    },
];

const ReasonJoin = () => {
    return (
        <section className="reasons-join">
            <div className="container">
                <AnimateText>
                    <h2 className="reasons-join__title">Reason To Join</h2>
                </AnimateText>
                <div className="row space-between reasons-join__detail">
                    {infoBoxData.map((item) => 
                        <div key={item.title} className="col-2">
                            <AnimateText>
                                <InforBox item={item} />
                            </AnimateText>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ReasonJoin;