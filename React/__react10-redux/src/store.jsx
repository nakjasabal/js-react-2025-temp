// store.js
import { legacy_createStore as createStore } from "redux";
import counterReducer from "./reducer";

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log("State updated:", store.getState());
});

export default store;
