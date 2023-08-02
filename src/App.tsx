import './App.css'
import AboutUs from './components/aboutUs'
import Footer from './components/footer'
import Hero from './components/hero'
import MemberShip from './components/memberShip'
import ReasonJoin from './components/reasonJoin'
import Trainers from './components/trainers'

function App() {

  return (
    <div className="app-container">
      <Hero />
      <ReasonJoin />
      <MemberShip />
      <AboutUs />
      <Trainers />
      <Footer />
    </div>
  )
}

export default App
