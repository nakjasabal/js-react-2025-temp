import {Routes, Route} from "react-router-dom";

import Home from './components/Home';
import TopNavi from './components/TopNavi';
import RefUpload from './storages/RefUpload';
import ListDownload from './storages/ListDownload';
 
function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/storage01' element={<RefUpload />} />      
      <Route path='/storage02'>
        <Route index element={<ListDownload />} />          
        <Route path=":path" element={<ListDownload />} />
      </Route>
    </Routes>
  </>)
}

export default App
