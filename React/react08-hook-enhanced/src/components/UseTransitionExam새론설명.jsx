import { useState, useTransition } from "react";

const UseTransitionExam = () => {
  // 긴급한 상태: 사용자가 입력하는 검색어(query)
  const [query, setQuery] = useState(""); 

  // 비긴급한 상태: 필터링된 아이템 리스트
  const [filteredItems, setFilteredItems] = useState([]); 

  // isPending: 비긴급 상태가 업데이트 중일 때 true가 됨 (로딩 표시용)
  // startTransition: 비긴급 상태 업데이트를 예약하는 함수
  const [isPending, startTransition] = useTransition();

  // "아이템1"부터 "아이템100000"까지의 문자열 배열 생성
  const itemStrs = Array.from({ length: 100000 }, (_, i) => `아이템${i + 1}`); 

  // 입력창 값이 변경될 때 실행되는 함수
  const changeItemStrs = (e) => {
    // 긴급 상태는 즉시 업데이트 (입력값 반영)
    setQuery(e.target.value); 

    // 필터링 작업은 비긴급 처리 (startTransition 사용)
    startTransition(() => {
      // 입력값이 포함된 아이템만 필터링
      const filteredStr = itemStrs.filter((currVal) =>
        currVal.includes(e.target.value)
      );

      // 필터링된 결과를 상태로 저장 (화면 렌더링 유발)
      setFilteredItems(filteredStr);
    });
  };

  return (
    <>
      <h2>UseTransition 사용하기</h2>

      {/* 사용자가 검색어를 입력할 수 있는 입력창 */}
      <input
        type="text"
        value={query}
        onChange={changeItemStrs}
        placeholder="아이템N 형식으로 입력"
      />

      {/* 비긴급 작업(필터링)이 진행 중일 때 로딩 메시지 표시 */}
      {isPending && <p>필터링 중...</p>}

      {/* 필터링된 결과 중 앞 50개만 화면에 렌더링 */}
      <ul>
        {filteredItems.slice(0, 50).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default UseTransitionExam;
