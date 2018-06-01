import {combineReducers} from 'redux';
import UserReducers from './reduceruser';

 const allReducers = combineReducers({
    users: UserReducers
});

export default allReducers;