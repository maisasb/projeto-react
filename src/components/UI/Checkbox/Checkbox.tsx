import React from 'react';
import classes from './Checkbox.module.scss';

interface Props {
    label: string,
    checked: boolean,
    changed: ((event: React.ChangeEvent<HTMLInputElement>) => void),
    bold?: boolean
}

const Checkbox: React.FC<Props> = props => {

    const labelClasses = [classes.Label];

    if (props.bold){
        labelClasses.push(classes.Bold)
    }

    return (
        <div>            
            <label className={labelClasses.join(' ')}>{props.label} 
                <input 
                    type="checkbox" 
                    checked={props.checked}
                    onChange={props.changed} />
                <span className={classes.Check}></span>
            </label>
        </div>
    );
};

export default Checkbox;