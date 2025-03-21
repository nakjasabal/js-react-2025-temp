import { useState, useMemo } from 'react';

//호출시 시간이 매우 많이 걸리는 로직을 수행하는 함수(REST API통신 등)
const longTimeCalculate = (number) => {
  console.log('Long time 계산기');
  //12억번 반복하는 for문 
  for(let i=0 ; i<1234567890 ; i++){
    number++;
  }  
  return number;
}

//매우 간단한 로직을 수행하는 함수 
const shortTimeCalculate = (number) => {
  console.log('Short time 계산기');
  return number + 1;
}

const UseMemoExam1 = () => {
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
    <h2>useMemo 사용하기1</h2>
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

export default UseMemoExam1;