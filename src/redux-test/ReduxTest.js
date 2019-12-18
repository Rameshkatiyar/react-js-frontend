//Counter Example:
const {createStore} = require('redux');

//STEP 1: Create Action
const action1 = {
    type: "INCREMENT",
    value: 2
}
const action2 = {
    type: "DECREMENT",
    value: 1
}

//STEP 2: Create Reducer
const initialState = {
    count: 10
};
const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case "INCREMENT": {
            newState.count += action.value;
        }break;
        case "DECREMENT": {
            newState.count -= action.value;
        }break;
    }
    return newState;
}

//STEP 3: Create Global Store
const store = createStore(reducer);

//STEP 4: Create Components
const component1 = () => {
    console.log("component1: "+store.getState().count)
}
const component2 = () => {
    console.log("component2: "+store.getState().count)
}

//STEP 5: Subscribe components to global store
store.subscribe(component1);
store.subscribe(component2);

//STEP 6: Send action to store
store.dispatch(action1);
store.dispatch(action2);
