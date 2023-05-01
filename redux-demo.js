const redux = require("redux");


const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "decrement") {
        return {
            counter : state.counter - 1
        }
    }
    else {
        return {
            counter: state.counter + 1,
        }
    }
}

const store = redux.createStore(counterReducer);


const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({type:"1"})
store.dispatch({type:"2"})
store.dispatch({type:"3"})
store.dispatch({type:"4"})
store.dispatch({type:"5"})
store.dispatch({ type: "decrement"});
store.dispatch({ type: "decrement"});
store.dispatch({ type: "decrement"});
store.dispatch({ type: "decrement"});