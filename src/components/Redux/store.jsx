import { combineReducers, createStore, applyMiddleware } from 'redux';
import headerReducer from './headerReducer';
import thunk from 'redux-thunk';


const reducer = combineReducers({
    header: headerReducer
});

const store = createStore(reducer, applyMiddleware(thunk));
export default store;