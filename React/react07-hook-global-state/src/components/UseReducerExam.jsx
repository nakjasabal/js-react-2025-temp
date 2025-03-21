import { useReducer, useState } from 'react';

const bankReducer = (bankState, bankAction) => {
  console.log("리듀서호출", bankState, bankAction);  
  /** Action을 분석해서 입출금을 처리한다. 변경된 값을 반환하면 즉시
  적용되어 렌더링이 새롭게 된다. */
  switch (bankAction.mode){
    case 'diposit': //입금
      return bankState + bankAction.amount;
    case 'withdraw': //출금
      return bankState - bankAction.amount;
    default: //잔고조회 
      return bankState;
  }
}

const UseReducerExam = () => {
  //State선언. 입출금 금액 변경. 
  const [inputMoney, setInputMoney] = useState(0);
  //Reducer선언. money는 0으로 초기화. 디스패치와 리듀서 함수 선언. 
  const [balance, bankDispatch] = useReducer(bankReducer, 0);
  return (<>
    <h2>UseReducer 사용하기</h2>
    <p>잔고 : {balance}원</p>
      {/* 입출금을 위한 금액은 스핀박스를 통해 1000원 단위로 증감한다.  */}
      <input type="number" value={inputMoney} step={1000} 
        onChange={(e) => {
          setInputMoney(parseInt(e.target.value));
        }
      } />
      {/* 앞에서 선언한 상수를 이용해서 Action을 전달한다.  */}
      <button type='button' onClick={() => {
        bankDispatch({mode:'diposit', amount:inputMoney});        
      }}>입금</button>
      <button type='button' onClick={() => {
        bankDispatch({mode:'withdraw', amount:inputMoney});        
      }}>출금</button>
  </>);
}

export default UseReducerExam;