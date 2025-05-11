

/**
🔹 useTransition이란?
React 18에서 추가된 훅으로, 낮은 우선순위 상태 업데이트를 비동기적으로 처리하여 렌더링 성능을 최적화하는 역할을 합니다.
  -기본 원리: useTransition을 사용하면 상태 업데이트를 "긴급한 상태"와 "긴급하지 않은 상태"로 구분할 수 있음.
  -사용 목적:
    버튼 클릭, 입력 변경 등 빠른 반응이 필요한 UI와
    리스트 필터링, 대량의 데이터를 렌더링하는 작업 등 상대적으로 느려도 되는 UI를 분리
    이를 통해 UI가 끊기지 않고 부드럽게 렌더링되도록 최적화

입력 필드에 입력할 때 리스트를 필터링하는 기능 구현
  사용자가 빠르게 입력해도 입력 반응성은 유지
  리스트 필터링은 비동기적으로 처리하여 렌더링 속도를 최적화
*/

import { useState, useTransition } from "react";

const UseTransitionExam = () => {

  const [query, setQuery] = useState(""); // 긴급한 상태 (입력값)
  const [filteredItems, setFilteredItems] = useState([]); // 비긴급한 상태 (필터링된 리스트)
  //isPending : 비긴급 상태가 변경될때 로딩 UI를 표시할 수 있음
  //startTransition : 비긴급 상태 업데이트를 위한 함수 
  const [isPending, startTransition] = useTransition();

  /**
  Array.from(arrayLike, mapFunction);
    : 첫번째 인수는 유사배열, 두번째는 map함수. 
    -유사배열
      { length: 10000 } >> 실제 값을 가지지 않고 길이만 가진 유사배열객체 
          Array.from() 에서 사용하려면 length 속성이 필수적임. 
    -map함수 
      형식 : map(currentValue, index)와 같은 인수를 가짐. 
      실제 값을 가지지 않는 유사배열이므로 (_, i)와 같이 기술하는것임. 
      _(언더바)는 JS에서 '사용하지 않는 변수'라는 관례적인 표현임. 
   */
  const itemStrs = Array.from({ length: 100000 }, (_, i) => `Item${i + 1}`); // Item1~100000까지 생성

  const changeItemStrs = (e) => {
    // 입력값 즉시 업데이트 (긴급 상태)
    setQuery(e.target.value); 

    // 비긴급한 상태 업데이트를 useTransition으로 처리
    /**
    includes함수 : 배열 또는 문자열이 특정 요소(또는 문자열)를 포함하는지 확인
      배열.includes("검색항목") >> 존재하면 true 
     */
    startTransition(() => {
      const filteredStr = itemStrs.filter((currVal) => currVal.includes(e.target.value));
      setFilteredItems(filteredStr);
    });
  };

  return (<>
    <h2>UseTransition 사용하기</h2>
    <input type="text" value={query} onChange={changeItemStrs} placeholder="ItemN 형식으로 입력" />

    {/* 로딩 표시 */}
    {isPending && <p>필터링 중...</p>}

    {/* 필터링된 결과 출력. 결과 중 50개만 표시. */}
    <ul>
      {filteredItems.slice(0,50).map((item, index) => (
        <li key={index}>{item}</li> 
      ))}
    </ul>
  </>);
}

export default UseTransitionExam;