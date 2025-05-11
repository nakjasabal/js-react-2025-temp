import { useState, useMemo } from 'react';

const longTimeCalculate = (number) => {
  console.log('Long time 계산기');
  for(let i=0 ; i<1234567890 ; i++){
    number++;
  }  
  return number;
}

const shortTimeCalculate = (number) => {
  console.log('Short time 계산기');
  return number + 1;
}

const UseMemoExam = () => {
  const [longTimeNum, setLongTimeNum] = useState(0);
  const [shortTimeNum, setShortTimeNum] = useState(0);

  //step1
  // const longTimeSum = longTimeCalculate(longTimeNum);    
  // const shortTimeSum = shortTimeCalculate(shortTimeNum);

  //step2
  const longTimeSum = useMemo(()=>{
    return longTimeCalculate(longTimeNum);
  }, [longTimeNum]);
  const shortTimeSum = useMemo(()=>{
    return shortTimeCalculate(shortTimeNum);
  }, [shortTimeNum]);

  return (<>
    <h2>useMemo 사용하기</h2>
    <h2>Long Time 계산기</h2>
    <input type="number" value={longTimeNum}
      onChange={(e)=>setLongTimeNum(parseInt(e.target.value))} 
    /> 
    =&gt; {longTimeSum}
    <h2>Short Time 계산기</h2>
    <input type="number" value={shortTimeNum}
      onChange={(e)=>setShortTimeNum(parseInt(e.target.value))} 
    /> 
    =&gt; {shortTimeSum}
  </>);
}

export default UseMemoExam;