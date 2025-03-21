import { legacy_createStore as createStore } from 'redux';

//State 객체 
let myState = {
  iCounter : 0
};

//Reducer
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

//Store
const myStore = createStore(myReducer);

//Subscribe 
myStore.subscribe(() => {
  console.log("State 업데이트:", myStore.getState());
});

export default myStore;
