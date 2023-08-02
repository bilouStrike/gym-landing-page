import './style.css';

interface InforBoxProps {
    item: {
        title: string;
        description: string;
        icon: string
    }
}

const InforBox: React.FC<InforBoxProps> = ({item}) => {
  return (
    <div className="gym-infoBox">
        <img src={`images/${item.icon}`} />
        <div className="gym-infoBox__description">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
    </div>
  )
}

export default InforBox