import {combinedReducers} from 'redux';
import UserReducers from './reduceruser';

const allReducers = combinedReducers({
    users: UserReducers
});