import {Routes, Route} from "react-router-dom";

import Home from './components/Home';
import TopNavi from './components/TopNavi';
import ReduxStep1 from './components/ReduxStep1';
import ReduxStep2 from './components/ReduxStep2';

function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/redux-step1' element={<ReduxStep1 />} />
      <Route path='/redux-step2' element={<ReduxStep2 />} />
    </Routes>
  </>)
}

export default App;
