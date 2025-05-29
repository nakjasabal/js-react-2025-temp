import {NavLink} from 'react-router-dom';

const TopNavi = ()=>{
  return (
    <nav>
      <NavLink to="/upload">참조/업로드</NavLink>&nbsp;
      <NavLink to="/download">목록/다운로드/삭제</NavLink>&nbsp;
    </nav>
  );
}

export default TopNavi;