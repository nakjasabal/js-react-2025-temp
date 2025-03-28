import { Routes, Route } from 'react-router-dom';

import TopNavi from './components/TopNavi';
import Home from './components/Home';
import UseIdExam from './components/UseIdExam';
import UseRefExam1 from './components/UseRefExam1';
import UseRefExam2 from './components/UseRefExam2';
import UseMemoExam from './components/UseMemoExam';
import UseCallbackExam from './components/UseCallbackExam';

function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/use-id' element={<UseIdExam />} />
      <Route path='/use-ref1' element={<UseRefExam1 />} />
      <Route path='/use-ref2' element={<UseRefExam2 />} />
      <Route path='/use-memo' element={<UseMemoExam />} />
      <Route path='/use-callback' element={<UseCallbackExam />} />
    </Routes>
  </>)
}

export default App
