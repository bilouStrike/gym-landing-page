import Button from "../button";

interface PricingItemProps {
    item: {
        title: string;
        price: string;
        detail: string[]
    }
}

const PricingItem: React.FC<PricingItemProps> = ({item}) => {
    return (
        <div className="gym-membership-item">
            <div className="gym-membership-item__header">
                <strong>{item.title}</strong>
                <p>{item.price}</p>
            </div>
            <div className="gym-membership-item__content">
                <ul>
                    {item.detail.map((item) => 
                        <li key={item}>
                            <img src="images/check-icon.svg" width="25" height="25" />
                            <span>{item}</span>
                        </li>
                    )}
                </ul>
                <Button text="Buy" size='small' />   
            </div>
        </div>
    )
}

export default PricingItem;