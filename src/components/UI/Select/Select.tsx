import React from 'react';
import classes from './Select.module.scss';

interface Props {
    options: [{value:string, label: string}],
    height: string
}

const Select: React.FC<Props> = (props) => {

    let options = props.options.map((option) => {
        return <option key={option.value} value={option.value}>{option.label}</option>
    });

    const inputClasses = [classes.Select, classes[props.height]];

    return (
        <select className={inputClasses.join(' ')}>
            {options}
        </select>
    );

}

export default Select;