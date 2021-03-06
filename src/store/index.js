import { createStore } from 'redux'



const INITIAL_STATE =  {
  data: [],
}


function reducer(state = INITIAL_STATE, action) {
  if(action.type === 'LOAD_PRODUCTS'){
    return{...state, data: action.payload}
  }
  return state
}

const store = createStore(reducer) 

export default store