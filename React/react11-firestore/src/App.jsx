import {Routes, Route} from "react-router-dom";

import Home from './components/Home';
import TopNavi from './components/TopNavi';
import FireConnect from "./firestores/FireConnect";
import FireCreate from "./firestores/FireCreate";
import FireRead from "./firestores/FireRead";
import FireUpdate from "./firestores/FireUpdate";
// import FireDelete from "./firestores/FireDelete";

function App() {
  return (<>
    <TopNavi></TopNavi>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/connect' element={<FireConnect />} />
      <Route path='/create' element={<FireCreate />} />
      <Route path='/read' element={<FireRead />} />      
      <Route path='/update'>
        <Route path=":idx" element={<FireUpdate />} />
      </Route>
      {/* <Route path='/delete' element={<FireDelete />} /> */}
    </Routes>
  </>)
}

export default App
