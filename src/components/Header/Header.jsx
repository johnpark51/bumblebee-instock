import './Header.scss';
import logo from '../../assets/Logo/InStock-Logo.svg'
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Instock" />
            <div className="header__nav">
                <NavLink className="header__link" to="/"><h3>Warehouses</h3></NavLink>
                <NavLink className="header__link" to="/"><h3>Inventory</h3></NavLink>
            </div>
        </header>
    )
}