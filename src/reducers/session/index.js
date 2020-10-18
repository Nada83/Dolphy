import createReducer from '../createReducer';
import Types from './types';

const initialState = {
    token: null,
    usertype: 'customer'
};

export default createReducer(initialState, {
    [Types.SETTOKEN]: (state, {payload}) => ({
        ...state,
        token: payload.token
    }),
    [Types.SETUSERTYPE]: (state, {payload}) => ({
        ...state,
        usertype: payload.usertype
    })
})