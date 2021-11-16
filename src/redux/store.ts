import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from './reducers';

const rootReducer = combineReducers({userReducer});

const store = createStore(rootReducer, applyMiddleware(thunk));

export {store};
