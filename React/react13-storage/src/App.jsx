import {Routes, Route} from "react-router-dom";
import TopNavi from './components/TopNavi';
import RefUpload from './storages/RefUpload';
import ListDownload from './storages/ListDownload';
 
function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<RefUpload/>} />
      <Route path='/upload' element={<RefUpload />} />      
      <Route path='/download'>
        <Route index element={<ListDownload />} />          
        <Route path=":path" element={<ListDownload />} />
      </Route>
    </Routes>
  </>)
}

export default App
