import {
  // Link,
  NavLink,
} from 'react-router-dom'

import classes from './Header.module.css'

const linkClassName = ({ isActive }) => (isActive ? classes.active : undefined)

const Header = () => (
  <header className={classes.header}>
    <nav>
      <ul className={classes.list}>
        <li>
          {/* <Link to="/">Home</Link> */}
          <NavLink to="/" className={linkClassName}>
            Home
          </NavLink>
        </li>
        <li>
          {/* <Link to="/products">Products</Link> */}
          <NavLink to="/products" className={linkClassName}>
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
