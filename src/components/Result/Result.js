import React, { useEffect } from 'react';
import axios from '../../axios';
import { connect } from 'react-redux';

const Result = props => {

    useEffect(() => {
        axios.get("/users")
            .then(result => {
                console.log(result.data.data);
            });
    }, [])

    return (
        <div>Resultados</div>
    );

}

const mapStateToProps = state => {
    return {
        filters: state.filter.filters,
        startYear: state.filter.startYear,
        endYear: state.filter.endYear
    }
}

export default connect(mapStateToProps)(Result);