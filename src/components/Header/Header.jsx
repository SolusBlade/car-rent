import Container from "components/Container/Container";
import s from "./Header.module.scss"
import { NavLink } from "react-router-dom/dist";
import clsx from "clsx";

const getActiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Header = () => {

    return (
      <header className={s.header}> 
        <Container>
            <ul className={s.list}>
                <li><NavLink to="/" className={getActiveClass}>Home</NavLink></li>
                <li><NavLink to="/catalog" className={getActiveClass}>Catalog</NavLink></li>
                <li><NavLink to="/favorites" className={getActiveClass}>Favorites</NavLink></li>
            </ul>
        </Container>
      </header>
  );
};

export default Header;