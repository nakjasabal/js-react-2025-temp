import {NavLink} from 'react-router-dom';

const TopNavi = ()=>{
  return (
    <nav>
      <NavLink to="/">Home</NavLink>&nbsp;
      <NavLink to="/use-id">useId</NavLink>&nbsp;
      <NavLink to="/use-ref1">useRef1</NavLink>&nbsp;
      <NavLink to="/use-ref2">useRef2</NavLink>&nbsp;
      <NavLink to="/use-memo">useMemo</NavLink>&nbsp;
      <NavLink to="/use-callback">useCallback</NavLink>&nbsp;      
    </nav>
  );
}

export default TopNavi;