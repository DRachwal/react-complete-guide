import { FC } from "react";

import classes from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
        <nav>
            <ul>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">Terms of Use</a>
                </li>
            </ul>
        </nav>
    </footer>
  );
};

export default Footer;
