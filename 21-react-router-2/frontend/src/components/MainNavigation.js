import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const navLinkClass = ({ isActive }) => (isActive ? classes.active : undefined);
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={navLinkClass}>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
