import { combineReducers } from 'redux';

import customerReducer from './customer';
import sessionReducer from './session'

const Reducers = {
    customer: customerReducer,
    session: sessionReducer
};

export default combineReducers(Reducers);