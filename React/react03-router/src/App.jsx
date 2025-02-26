/**
react-router-dom으로부터 임포트한 컴포넌트와 훅 */
import {Routes, Route} from "react-router-dom";

import CommonLayout from './components/CommonLayout';
import Home from './components/Home';
import LayoutIndex from './components/LayoutIndex';
import NotFound from './components/NotFound';
import RouterHooks from './components/RouterHooks';
import TopNavi from './components/TopNavi';

function App() {  
  return (<>
    {/* 라우터 처리가 필요없는 컴포넌트는 전체페이지에서 공통으로
    출력하는 용도로 사용한다. */}
    <TopNavi></TopNavi>
    {/* 라우터 처리가 필요한 컴포넌트는 아래와 같이 path, element라는
    props를 통해 경로와 렌더링한 컴포넌트를 지정한다.  */}
    <Routes>
      <Route path='/' element={<Home></Home>} />
      {/* 하위 경로가 필요한 경우에는 '중첩라우터'를 사용한다. */}
      <Route path='/intro' element={<CommonLayout />}>
        {/* /intro로 요청이 들어오면 이 컴포넌트를 렌더링 */}
        <Route index element={<LayoutIndex />} />        
        {/* /intro/router 요청이 들어오면 RouterHooks 컴포넌트를
        렌더링한다. */}
        <Route path="router" element={<RouterHooks />} />
      </Route>
      {/* 지정되지 않은 모든 경로에 대해서는 404 처리  */}
      <Route path='*' element={<NotFound></NotFound>} />
    </Routes>    
  </>);
}

export default App;