import {Link, NavLink} from 'react-router-dom';

/**
NavLink 컴포넌트는 <a>태그와 같이 하이퍼링크를 제공한다. 
단 <a>태그에서 preventDefault()가 적용된 형태로 화면의 깜빡임없이
페이지 이동을 할 수 있다.  
또한 링크를 클릭했을때 active라는 클래스 속성을 자동으로 추가해준다. 
 */
const TopNavi = ()=>{
  return (
    <nav>
      <a href="/">HOME</a>&nbsp;
      <NavLink to="/intro">인트로</NavLink>&nbsp;
      <NavLink to="/intro/router">Router관련Hook</NavLink>&nbsp;
      <Link to="/xyz">잘못된URL</Link>&nbsp;
    </nav>
  );
}

export default TopNavi;