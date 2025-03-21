import { useState, useRef } from 'react';

const UseRefExam1 = () => {
  //State를 통해 상수 생성
  const [stateNum, setStateNum] = useState(0);
  //useRef를 통해 상수 생성 
  const refNum = useRef(0);
  //일반변수 생성 
  let myNum = 0;

  // /** 
  // useRef를 통해 생성한 변수(상수)는 current라는 key를 가진 객체를
  // 반환한다. 즉 접근시에는 "current.Key값" 형태로 기술해야한다. */
  // console.log('countRef', countRef); 

  //State를 1 증가시킨다. 
  const plusState = () => {
    setStateNum(stateNum + 1);
    console.log('State증가', stateNum);
  }
  //Ref로 선언된 값을 1 증가시킨다. 
  const plusRef = () => {
    refNum.current = refNum.current + 1;
    console.log('Ref증가', refNum.current);
  }
  //일반변수를 1 증가시킨다. 
  const plusMyNum = () => {    
    console.log('일반변수증가', ++myNum);
  };

  return (<>
    <h2>useRef 사용하기1</h2>
    <div>
      <p>State : {stateNum}</p>      
      <p>Ref : {refNum.current}</p>
      <p>myNum : {myNum}</p>
      {/* 버튼을 누를때마다 State가 변경되므로 화면이 새롭게 렌더링된다. */}
      <button onClick={plusState}>State증가</button>
      {/* Ref가 변경되지만 화면은 새롭게 렌더링되지 않는다. */}
      <button onClick={plusRef}>Ref증가</button>
      <button onClick={plusMyNum}>myNum증가</button>
    </div>
  </>);
}

export default UseRefExam1;