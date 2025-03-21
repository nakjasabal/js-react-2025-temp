import {NavLink} from 'react-router-dom';

const TopNavi = ()=>{
  return (
    <nav>
      <NavLink to="/">Home</NavLink>&nbsp;
      <NavLink to="/ZudApp">Zustand기본</NavLink>&nbsp;
      <NavLink to="/AttendanceApp">출결관리앱</NavLink>&nbsp;
    </nav>
  );
}

export default TopNavi;