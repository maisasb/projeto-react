import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './Navigation.module.scss';

const Navigation: React.FC = () => {
    return (
        <div className={classes.Navigation}>
            <ul className={classes.NavigationBar}>
                <NavigationItem title="Início" link="/" />                             
            </ul>
            <ul className={classes.NavigationRight}>
                <NavigationItem title="Autenticação" link="/Login" />
            </ul>
        </div>
    );
}

export default Navigation;