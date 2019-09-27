import * as actions from './actionTypes';

export const login = (user, password) => {
    return {
        type: actions.LOGIN,
        user: user,
        password: password
    }
}