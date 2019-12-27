import { createStore, applyMiddleware} from 'redux';
import RootReducers from '../reducer/RootReducer';
import thunk from "redux-thunk";

const Store = createStore(RootReducers, applyMiddleware(thunk));;
export default Store;
