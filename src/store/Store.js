import { createStore} from 'redux';
import CounterReducer from '../reducer/CounterReducer';

const Store = createStore(CounterReducer);
export default Store;
