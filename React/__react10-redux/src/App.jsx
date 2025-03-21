import { useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./Level4.css"
import Level1 from "./level4Comp/Level1";

const App = () => {
  const [iCounter, setICounter] = useState(0);
  return (<>
    <Provider store={store}>
      <Level1 iCounter={iCounter} onCounter={(pNum)=>{
        setICounter(iCounter + Number(pNum));
      }} />
    </Provider>
  </>);
};

export default App;
