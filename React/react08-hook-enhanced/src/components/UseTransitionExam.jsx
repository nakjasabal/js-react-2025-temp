import { useState, useTransition } from "react";

const UseTransitionExam = () => {
  // 긴급한 상태 (입력값)
  const [query, setQuery] = useState(""); 
  // 비긴급한 상태 (필터링된 리스트)
  const [filteredItems, setFilteredItems] = useState([]); 
  // isPending : 비긴급 상태가 변경될때 로딩 UI를 표시할 수 있음
  // startTransition : 비긴급 상태 업데이트를 위한 함수 
  const [isPending, startTransition] = useTransition();
  // 아이템1~100000까지 생성
  const itemStrs = Array.from({ length: 100000 }, (_, i) => `아이템${i + 1}`); 

  const changeItemStrs = (e) => {
    setQuery(e.target.value); 
    startTransition(() => {
      const filteredStr = itemStrs.filter((currVal) => currVal.includes(e.target.value));
      setFilteredItems(filteredStr);
    });
  };

  return (<>
    <h2>UseTransition 사용하기</h2>
    <input type="text" value={query} onChange={changeItemStrs} placeholder="아이템N 형식으로 입력" />

    {isPending && <p>필터링 중...</p>}

    <ul>
      {filteredItems.slice(0,50).map((item, index) => (
        <li key={index}>{item}</li> 
      ))}
    </ul>
  </>);
}

export default UseTransitionExam;