import AnimateText from '../../utils/AnimateText';
import PricingItem from '../UI/pricingItem';
import './style.scss';

const PRICING_DATA = [
    {
        title: `Pass 'Trial'`,
        price: '$ 0',
        detail: [
           'Access to the Gym from 8:00 to 4:00',
           'The trainer on duty will introduce you to the Gym'     
        ]
    },
    {
        title: `Pass ‘Easy Start’ `,
        price: '$ 119',
        detail: [
           'Visit without restrictions 24/7',
           'Individual training program',
           'Access to the VTRAINER application',
           'Trainer support'
        ]
    },
    {
        title: `Pass ‘Free Time’ `,
        price: '$ 49',
        detail: [
           'The entrance time to the gym is from 14:00 to 16:00',
           'Without suspension of gym membership',
           'The trainer on duty will introduce you to the gym',
        ]
    },
    {
        title: `Pass ‘1 Month 24/7’ `,
        price: '$ 85',
        detail: [
           'Visit without restrictions 24/7',
           'The trainer on duty will introduce you to the gym',
        ]
    },
    {
        title: `Pass ‘In Shape (AM)’ `,
        price: '$ 165',
        detail: [
           'Training in mini-groups until 14:00',
           'Without suspension of gym membership',
           'Classes with a trainer in a mini-group 3 times a week',
           'Trainer support'
        ]
    },
    {
        title: `Pass ‘In Shape (PM)’ `,
        price: '$ 195',
        detail: [
           'Training in mini-groups until 17:00',
           'Without suspension of gym membership',
           'Classes with a trainer in a mini-group 3 times a week',
           'Trainer support'
        ]
    }
];

const MemberShip = () => {
  return (
    <section className="gym-membership">
        <div className="container">
            <AnimateText>
                <h2>Gym membership</h2>
            </AnimateText>
            <div className="gym-membership__pricing row">
                {PRICING_DATA.map((item, index) => 
                    <div className="col-3" key={item.title}>
                        <AnimateText delay={index / 4}>
                            <PricingItem key={item.title} item={item} />
                        </AnimateText>
                    </div>
                )}
            </div>
        </div>
    </section>
  );
}

export default MemberShip;
