import {Routes, Route} from "react-router-dom";

import Home from './components/Home';
import TopNavi from './components/TopNavi';
import UseReducerExam from './components/UseReducerExam';
import UseContextExam from './components/UseContextExam';

function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/use-reducer' element={<UseReducerExam />} />
      <Route path='/use-context' element={<UseContextExam />} />
    </Routes>
  </>)
}

export default App
