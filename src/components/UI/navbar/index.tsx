import "./style.scss";
import Logo from '../../../assets/images/GYM24-logo.png';
import { useState } from "react";

const Navbar = () => {

    const [toogle, setToogle] = useState(false);

    return (
        <nav className="navbar">
            <img src={Logo} />
            <ul className="nav-menu">
                <li><a href="">Advantages</a></li>
                <li><a href="">MemberShip</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Trainers</a></li>
            </ul>
            <ul className="nav-menu-mobile"  style={{display: `${toogle ? 'block': 'none'}`}}>
                <li><a href="">Advantages</a></li>
                <li><a href="">MemberShip</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Trainers</a></li>
            </ul>
            <div className={`navbar__mobile-menu ${toogle ? 'nav-is-open' :  ''} `} onClick={() => setToogle(!toogle)}></div>
        </nav>
    )
}

export default Navbar;