import {Routes, Route, NavLink} from 'react-router-dom';
// import {Outlet, useLocation, useSearchParams} from "react-router-dom";

import SubApp01 from './zud01/SubApp';
import SubApp02 from './zud02/SubApp';

const Home = () => {
  return (<>
    <h2>React 상태관리 라이브러리</h2>
    <p>
      zustand에 대해 학습합니다.
    </p>
  </>);
}

const TopNavi = () => {
  return (
    <nav>
      <NavLink to="/">HOME</NavLink>&nbsp;
      <NavLink to="/SubApp01">Zustand01</NavLink>&nbsp;
      <NavLink to="/SubApp02">Zustand02</NavLink>&nbsp;
    </nav>
  );
}

function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/SubApp01" element={<SubApp01 />} />
      <Route path="/SubApp02" element={<SubApp02 />} />
    </Routes>
  </>)
}

export default App
