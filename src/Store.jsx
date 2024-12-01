import React, { useState } from 'react'

import { createStore } from 'redux';
const initState = { post: 0, name: 'Vinay' };

const Store = () => {
    const inc = 'INCREMENT';
    const dec = 'DECREMENT';
    const [data, setData] = useState({});
    // ----------create-store-for-application--------
    const myStore = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());


    // ----getState()-called-to-reducer-function-and-return-updated-state-value----
    myStore.subscribe(() => {
        console.log(myStore.getState(), 'store');
        // setData(myStore.getState());
    })

    // --------reducer-fun-defined---------
    function reducer(state = initState, action) {
        // console.log(action)
        switch (action.type) {
            case inc: return { ...state, post: state.post + 1 }
            case dec: return { post: state.post - 1 }
            case 'PAYLOAD': return { ...state, post: state.post + action.payload }
            default: return state;
        }
    };

    myStore.dispatch({ type: inc });
    myStore.dispatch({ type: dec });
    myStore.dispatch({ type: inc });
    myStore.dispatch({ type: 'PAYLOAD', payload: 50 });

    // const renderdata = document.getElementById('data');
    // renderdata.innerText = data.post; 
  

}
export default Store