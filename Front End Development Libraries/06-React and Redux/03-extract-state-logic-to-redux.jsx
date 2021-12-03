// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = (text) => {
  return {
    type: ADD,
    message: text
  }
}

const messageReducer = (state = [], action) => {
  switch(action.type){
    case ADD:
      return [...state, action.message]
    default:
      return state
  }
}

const store = Redux.createStore(messageReducer);
