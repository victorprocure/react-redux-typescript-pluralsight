import * as React from 'react';
import { NavLink } from 'react-router-dom';

import * as styles from './header.css';

export const Header: React.SFC<void> = () => (
    <nav>
        <NavLink to="/home" activeClassName={styles.active}>Home</NavLink>
        { " | " }
        <NavLink to="/courses" activeClassName={styles.active}>Courses</NavLink>
        { " | " }
        <NavLink to="/about" activeClassName={styles.active}>About</NavLink>
    </nav>
);