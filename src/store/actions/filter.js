import * as actions from './actionTypes';

export const addFilter = (filters) => {
    return {
        type: actions.ADD_FILTER,
        filters: filters
    }
}

export const addStartYear = (startYear) => {
    return {
        type: actions.ADD_STARTYEAR,
        startYear: startYear
    }
}

export const addEndYear = (endYear) => {
    return {
        type: actions.ADD_ENDYEAR,
        endYear: endYear
    }
}

export const addWords = (words) => {
    return {
        type: actions.ADD_WORDS,
        words: words
    }
}

