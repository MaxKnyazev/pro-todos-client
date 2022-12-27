import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import { userReducer } from './userReducer';
import { adminReducer } from './adminReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  userReducer,
  adminReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));