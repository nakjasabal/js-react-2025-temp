import { useState } from 'react'

function App() {
  const [myCount, setMyCount] = useState({cnt : 0});

  const plusMyCount1 = () => {
    myCount.cnt += 1;
    setMyCount(myCount);
    console.log("변경후1", myCount);
  }

  const plusMyCount2 = () => {
    let newMyCount = {...myCount};
    newMyCount.cnt += 1;
    setMyCount(newMyCount);
    console.log("변경후2", myCount);
  }

  return (<>
    <div>
      <h2>React-참조 비교</h2>
      <p>Count : { myCount.cnt }</p>
      <button type='button' onClick={plusMyCount1}>원본증가</button>
      <button type='button' onClick={plusMyCount2}>복사본증가</button>
    </div>
  </>)
}

export default App

/**
React에서 **state**는 참조형 데이터(객체, 배열)인 경우, 참조 값이 변경되지 않으면 React는 상태가 변경되었다고 인식하지 않습니다. 따라서 객체를 직접 수정한 후 다시 setState를 호출해도 참조 값이 같다면 React는 새로운 렌더링을 트리거하지 않습니다.

React는 **얕은 비교(Shallow Comparison)**를 사용해 state의 변경 여부를 판단합니다.
참조값을 통해 객체의 차이를 비교하므로 "참조비교"라고 표현하기도 한다. 

✅ IPA(국제 음성 기호): /kəmˈpær.ɪ.sən/
✅ 발음 (미국식 & 영국식 공통): [컴-패-리-슨]

참조 값이 동일하면 React는 상태가 바뀌지 않았다고 간주하고 렌더링을 하지 않습니다.
객체나 배열을 변경하려면 새로운 객체를 생성하여 참조 값을 변경해야 React가 상태 변화로 인식하고 렌더링을 수행합니다.

React가 **얕은 비교(Shallow Comparison)**를 사용하는 이유
-렌더링 최적화  
  값 비교(deep comparison)를 하면 성능 비용이 크기 때문에, 단순히 참조(메모리 주소)가 변경되었는지만 비교하여 빠르게 변경 여부를 판단합니다.
-객체의 크기에 관계없이 일정한 성능 유지
  deep comparison을 사용하면 객체가 클수록 비교 연산이 느려집니다.
  shallow comparison은 객체 크기에 관계없이 O(1) 시간 복잡도로 빠르게 비교할 수 있습니다.

버튼1
state.count를 직접 수정하고 setState를 호출합니다.
그러나 객체의 참조 값이 변경되지 않았기 때문에 React는 상태 변화가 없다고 판단하고 새로운 렌더링을 하지 않습니다.
따라서 Count는 변경되지 않은 것처럼 보입니다.

버튼2
setState 호출 시 기존 state를 복사(...state)하고 변경된 count 값을 포함하는 새로운 객체를 생성합니다.
새 객체를 할당했으므로 참조 값이 변경되고 React는 상태가 변경되었다고 판단하여 렌더링을 수행합니다.
*/