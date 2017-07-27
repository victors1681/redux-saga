import { createStore } from 'redux';

const reducer = (state, action)=>{
    if(action.type === "INC"){
        return state  + 1;
    }
    return state;
}


const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, 0);

store.subscribe(()=>{
    console.log("Store  changed", store.getState());
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
