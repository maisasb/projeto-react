import React from 'react';
import classes from './Button.module.scss';

interface Props{
    color: string,
    size: string,
    click: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void),
    width?: string
}

const Button: React.FC<Props> = props => {

    const classButton = [classes.Button, classes[props.color], classes[props.size]];

    return (
        <button 
            className={classButton.join(' ')} 
            onClick={props.click}
            style={{width: props.width}}>
            {props.children}
        </button>
    );
}





export default Button;