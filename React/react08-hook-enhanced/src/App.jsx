import {Routes, Route} from "react-router-dom";

import Home from './components/Home';
import TopNavi from './components/TopNavi';
import UseTransitionExam from './components/UseTransitionExam';
import UseOptimisticExam from './components/UseOptimisticExam';
import UseFormStatusExam from './components/UseFormStatusExam';
import UseActionStateExam from './components/UseActionStateExam';

function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/use-transition' element={<UseTransitionExam />} />
      <Route path='/use-optimistic' element={<UseOptimisticExam />} />      
      <Route path='/use-form-status' element={<UseFormStatusExam />} />
      <Route path='/use-action-state' element={<UseActionStateExam />} />
    </Routes>
  </>)
}

export default App
