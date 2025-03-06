import { useState } from 'react'

function App() {
  const [myCount, setMyCount] = useState({ cnt : 0});

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

React는 **참조 비교(Shallow Comparison)**를 사용해 state의 변경 여부를 판단합니다.

참조 값이 동일하면 React는 상태가 바뀌지 않았다고 간주하고 렌더링을 하지 않습니다.
객체나 배열을 변경하려면 새로운 객체를 생성하여 참조 값을 변경해야 React가 상태 변화로 인식하고 렌더링을 수행합니다.

버튼1
state.count를 직접 수정하고 setState를 호출합니다.
그러나 객체의 참조 값이 변경되지 않았기 때문에 React는 상태 변화가 없다고 판단하고 새로운 렌더링을 하지 않습니다.
따라서 Count는 변경되지 않은 것처럼 보입니다.

버튼2
setState 호출 시 기존 state를 복사(...state)하고 변경된 count 값을 포함하는 새로운 객체를 생성합니다.
새 객체를 할당했으므로 참조 값이 변경되고 React는 상태가 변경되었다고 판단하여 렌더링을 수행합니다.
 */