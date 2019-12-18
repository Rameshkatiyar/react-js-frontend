import {CounterActionType} from "../action/CounterAction";

const initialState = {
    count: 10
}

const counterReducer = (state = initialState, action) => {
    const prevState = {...state};

    if (action.type === CounterActionType.INCREMENT){
        prevState.count++;
    }
    if (action.type === CounterActionType.DECREMENT){
        prevState.count--;
    }

    return prevState;
};

export default counterReducer;