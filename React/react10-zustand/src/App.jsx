import {Routes, Route} from 'react-router-dom';

import TopNavi from './components/TopNavi';
import Home from './components/Home';
import ZudApp from './zud01/ZudApp';
import AttendanceApp from './zud02/AttendanceApp';
 
 
function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/ZudApp" element={<ZudApp />} />
      <Route path="/AttendanceApp" element={<AttendanceApp />} />
    </Routes>
  </>)
}

export default App