import { FC } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.png';

import {useStyles} from './styles';

export const Header: FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.link}>
        <img src={logo} alt="gerrronimo" className={classes.image} />
      </Link>

      <Link to="/contact" className={classes.link}>Contact</Link>
    </header>
  )
}
