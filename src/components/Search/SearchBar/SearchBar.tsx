import React from 'react';
import Input from '../../UI/Input/Input';
import classes from './SearchBar.module.scss';
import Button from '../../UI/Button/Button';

interface Props {
    inputValue: string,
    inputChangeHandler: () => {},
    searchClick: () => {}
}

const SearchBar: React.FC <Props> = props => {

   
    return (
        <div className={classes.SearchBar}>
            <Input 
                label="Consultar" 
                height="big" 
                width="100%" 
                type="text"
                value={props.inputValue}
                change={props.inputChangeHandler}
                top/>   
            <div className={classes.ButtonPosition}>
                <Button width="30%" size="big" color="primary" click={props.searchClick}>Pesquisar</Button>                
            </div>         
        </div>
    );
}

export default SearchBar;