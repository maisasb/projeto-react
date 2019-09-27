import React, { useState } from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar/SearchBar';
import SearchFilter from './SearchFilter/SearchFilter';
import * as actions from '../../store/actions/filter';
import { validator } from '../../validators/validators';

const Search = props => {

    const [formIsValid, setFormIsValid] = useState();

    const yearValidationRules = {
        number: true,
        minLength: 4,
        maxLength: 4,
    }

    const clickSearchButtonHandler = () => {
        if (formIsValid == null || formIsValid.isValid)
            props.history.push("/Resultados");
    }
   
    const changeCheckHandler = (event, funcUpdate) =>{
        props.addFilters({
            ...props.filters,
            [funcUpdate]: event.target.checked
        })
    }

    const changeStartYearHandler = event => {
        const validation = validator(event.target.value, yearValidationRules);
        setFormIsValid(validation);
        props.addStartYear(event.target.value);            
    }
    const changeEndYearHandler = event => {
        props.addEndYear(event.target.value);
    }
    const inputChangeHandler = (event) => {
        props.addWords(event.target.value);
    }

    return (
        <div>
            <SearchFilter 
                filters={props.filters}
                addFilters={props.addFilters}
                startYear={props.startYear}
                endYear={props.endYear}
                changeCheckHandler={changeCheckHandler}
                changeStartYearHandler={changeStartYearHandler}
                changeEndYearHandler={changeEndYearHandler}
                validationRules={yearValidationRules}/>
            <SearchBar 
                inputChangeHandler={inputChangeHandler} 
                inputValue={props.words}
                searchClick={clickSearchButtonHandler} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        filters: state.filter.filters,
        startYear: state.filter.startYear,
        endYear: state.filter.endYear,
        words: state.filter.words
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFilters: filters => dispatch(actions.addFilter(filters)),
        addStartYear : startYear => dispatch(actions.addStartYear(startYear)),
        addEndYear : endYear => dispatch(actions.addEndYear(endYear)),
        addWords: word => dispatch(actions.addWords(word))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);