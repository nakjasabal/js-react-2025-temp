import {NavLink} from 'react-router-dom';

const TopNavi = ()=>{
  return (
    <nav>
      <NavLink to="/">Home</NavLink>&nbsp;
      <NavLink to="/redux-step1">Redux적용전</NavLink>&nbsp;
      <NavLink to="/redux-step2">Redux적용후</NavLink>&nbsp;
    </nav>
  );
}

export default TopNavi;