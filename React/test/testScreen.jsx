import { useState } from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";

/**

  const [myState, setMyState] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

      <BrowserRouter>
      <Routes>
        <Route path='URL설정1' element={<컴포넌트1 />} />
        <Route path='URL설정2' element={<컴포넌트2 />} />
      </Routes>    
    </BrowserRouter>
 */

const MyComponent = () => {  
  let num = 10;
  const fx = () => {
    함수의 실행부;
  }
}


const MyLifeCycle = () => {
  1.컴포넌트 실행
  
  
  useEffect(() => {
    A.컴포넌트가 마운트된 후 실행할 내용
    return () => {
      B.컴포넌트가 언마운트되기 직전에 실행할 내용
    };  
  }, 
  [의존성배열]);
  
  
  
  return (<>
    2.컴포넌트 렌더링  
  </>);
}


import create from 'zustand'
const Zustand스토어명 = create(
  (set) => ({
    상태변수명: 초기값,
    함수명: (매개변수) => set((state) => ({ 
      상태변수명 : 변경된값 
    })),
  })
);
export default StudentUnit;





export default Home;

