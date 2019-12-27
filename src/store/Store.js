import { createStore, applyMiddleware} from 'redux';
import CombineReducers from '../reducer/CombineReducers';
import thunk from "redux-thunk";

const Store = createStore(CombineReducers, applyMiddleware(thunk));;
export default Store;
