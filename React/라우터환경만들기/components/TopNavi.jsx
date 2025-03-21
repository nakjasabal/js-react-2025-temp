import {Link, NavLink} from 'react-router-dom';

const TopNavi = ()=>{
  return (
    <nav>
      <NavLink to="/">Home</NavLink>&nbsp;
      <NavLink to="/use-reducer">useReducer</NavLink>&nbsp;
      <NavLink to="/use-context">useContext</NavLink>&nbsp;
    </nav>
  );
}

export default TopNavi;