import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
/**
라우터 설정을 위해 최상위 컴포넌트인 <App>을 BrowserRouter
컴포넌트로 랩핑한다. 이 설정은 App.jsx에서도 동일하게 할 수 있다.
 */
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
