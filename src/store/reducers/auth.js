import * as actions from '../actions/actionTypes';

const initialStatus = {
    user: "",
    password: ""
};

const reducer = (state = initialStatus, action) => {

    switch(action.type){
        case actions.LOGIN:
            return {
                user: action.user,
                password: action.password
            }
            
        default:
            return state;
    }

}

export default reducer;