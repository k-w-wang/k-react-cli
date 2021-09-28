import { createStore } from 'redux'
const  reducer = (state = { count: 1, index: 2 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
let store = createStore(reducer)
export default store