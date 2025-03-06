import { useState } from "react";
import "./Level4.css"
import Level1 from "./level4Comp/Level1";

const App = () => {
  const [iCounter, setICounter] = useState(0);
  return (<>
    <Level1 iCounter={iCounter} onCounter={(oFlag, cNum)=>{
      if(oFlag==='+')
        setICounter(iCounter + Number(cNum));
      else if(oFlag==='-')
        setICounter(iCounter - Number(cNum));
  }} />
  </>);
};

export default App;
