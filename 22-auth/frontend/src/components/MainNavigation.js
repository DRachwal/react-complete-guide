import {
  NavLink,
  Form,
  // useNavigate,
  useRouteLoaderData,
  // redirect,
} from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

const isActiveClass = ({ isActive }) => (isActive ? classes.active : undefined);

const MainNavigation = () => {
  // const navigate = useNavigate();
  const token = useRouteLoaderData("root");
  console.log("MainNavigation token", token);

  // const logoutHandler = () => {
  //   localStorage.removeItem("token");
  //   navigate("/");
  // };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={isActiveClass} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={isActiveClass}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/newsletter" className={isActiveClass}>
              Newsletter
            </NavLink>
          </li>
          {!token && (
            <li>
              <NavLink to="/auth?isLogin=1" className={isActiveClass}>
                Login
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/logout" method="POST">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
};

export default MainNavigation;
