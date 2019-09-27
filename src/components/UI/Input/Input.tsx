import React from 'react';
import classes from './Input.module.scss';

interface Props {
    height: string,
    disabled?: boolean,
    readOnly?: boolean,
    top?: boolean,
    width?:string,
    label: string,
    type?:string,
    placeholder?:string,
    required?:boolean,
    value: string,
    change: ((event: React.ChangeEvent<HTMLInputElement>) => void)
}

const Input: React.FC<Props> = props => {

    const inputClasses = [classes.Input, classes[props.height]];

    if (props.disabled){
        inputClasses.push(classes.InputDisabled);
    }
    if (props.readOnly){
        inputClasses.push(classes.InputReadOnly);
    }
    let row:string  = '';
    if (!props.top){
        row = classes.InputLabelRow;
    }

    return (
        <div className={row} style={{width: props.width}}>
            <label className={classes.Label}>{props.label}</label>             
            <input 
                type={props.type}
                className={inputClasses.join(' ')}                 
                placeholder={props.placeholder}
                disabled={props.disabled}
                readOnly={props.readOnly}
                required={props.required}
                value={props.value}
                onChange={props.change}/>
        </div>
    );
}


export default Input;