import * as actions from '../actions/actionTypes';

const initialState = {
    filters: {
        acordao: false,
        comunicado: false,
        contribuinte: false,
        decreto: false,
        normativa: false,
        lei: false,
        tributaria: false,
        portaria: false,
        resolucao: false
    },
    startYear: "",
    endYear: "",
    words: ""
}

const reducer = (state = initialState, action) => {

    switch (action.type){
        case actions.ADD_FILTER:

            return {
                ...state,
                filters: {                
                    ...action.filters                
                }
            }            
        
        case actions.ADD_STARTYEAR:
            return {
                ...state,
                startYear: action.startYear
            }
            
        case actions.ADD_ENDYEAR:
            return {
                ...state,
                endYear: action.endYear
            }
            
        case actions.ADD_WORDS:
            return {
                ...state,
                words: action.words
            }
            
        default:
            return state;
    }

}

export default reducer;