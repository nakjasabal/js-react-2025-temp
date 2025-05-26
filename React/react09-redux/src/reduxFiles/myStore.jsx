import { legacy_createStore as createStore } from 'redux';

let myState = {
  iCounter : 0
};

const myReducer = (currState=myState, action) => {
  const newState = { ...currState };  
  if(action.type==='+'){
    newState.iCounter += action.num;
  }
  else if(action.type==='-'){
    newState.iCounter -= action.num;
  }
  return newState;
};

const myStore = createStore(myReducer);

myStore.subscribe(() => {
  console.log("State 업데이트:", myStore.getState());
});

export default myStore;
