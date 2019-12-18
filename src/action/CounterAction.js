//Create constant
const CounterActionType = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
};


//Create Object
const upCount = {
    type: CounterActionType.INCREMENT,
};

const downCount ={
    type: CounterActionType.DECREMENT,
};

export {upCount, downCount, CounterActionType};