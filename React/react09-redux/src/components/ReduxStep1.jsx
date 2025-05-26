import { useState } from "react";
import Level1 from "../step1/Level1";

const ReduxStep1 = () => {
  const [iCounter, setICounter] = useState(0);
  return (<>
    <h2>Redux Step1 - 적용전</h2>
    <Level1 iCounter={iCounter} onCounter={(oFlag, cNum)=>{
      if(oFlag==='+')
        setICounter(iCounter + Number(cNum));
      else if(oFlag==='-')
        setICounter(iCounter - Number(cNum));
      }
    }/>     
  </>);
}

export default ReduxStep1;
