import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.scss';

interface Props {
    link: string,
    title: string
}

const NavigationItem: React.FC<Props> = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink to={props.link}>{props.title}</NavLink>
        </li>
    );
}

export default NavigationItem;