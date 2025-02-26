import {Link} from 'react-router-dom';

/**
설정된 경로 외 잘못된 경로를 요청했을때 렌더링되는 컴포넌트
Link컴포넌트는 NavLink와 기능은 동일하지만 class를 추가하는 기능은
없다. 
 */
const NotFound = ()=>{
  return (
    <div>
      <h2>Not Found</h2>
      <p>
        페이지를 찾을 수 없습니다. ㅜㅜ <br/>
        <Link to='/'>Home</Link>
      </p>
    </div>
  );
}

export default NotFound;