import TrainerCard from '../trainerCard';
import './style.scss';

const TRAINERS = [
    {
        name: "Victoria Shurpik",
        photo: "photo-1.png"
    },
    {
        name: "Elizabeth Lavrinenko",
        photo: "photo-2.png"
    },
    {
        name: "Ivan Gladkikh",
        photo: "photo-3.png"
    },
    {
        name: "Lyudmila Sabilo",
        photo: "photo-4.png"
    }
]
const Trainers = () => {
  return (
    <section className="gym-trainers">
        <div className="container">
            <h3 className="gym-trainers__title">Trainers stuff</h3>
            <div className="gym-trainers__team row">
                {TRAINERS.map((item) => 
                    <div className="col-4" key={item.name}>
                        <TrainerCard trainer={item} />
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default Trainers;