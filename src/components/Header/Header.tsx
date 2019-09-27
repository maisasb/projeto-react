import React from 'react';
import classes from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

interface Props{
    logo?: string,
    title: string
}

const Header:React.FC <Props> = props => {
    return (
        <div className={classes.Header}>
            <ul>
                <li>{props.logo}</li> 
                <li className={classes.HeaderTitle}>{props.title}</li>
            </ul>            
            <Navigation />
        </div>
    );
}

export default Header;