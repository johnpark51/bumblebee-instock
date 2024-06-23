import "./Header.scss";
import logo from "@/assets/Logo/InStock-Logo.svg";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <section className="header__block">
        <Link to="/" data-aos="fade-down">
          <img className="header__logo" src={logo} alt="Instock" />
        </Link>
        <div className="header__nav" data-aos="fade-down">
          <NavLink className="header__link" to="/">
            <h3>Warehouses</h3>
          </NavLink>
          <NavLink className="header__link" to="/inventory">
            <h3>Inventory</h3>
          </NavLink>
        </div>
      </section>
    </header>
  );
};
