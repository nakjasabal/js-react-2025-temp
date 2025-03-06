import {Outlet} from "react-router-dom";

/**
Outlet컴포넌트
: 웹사이트 제작시 공통으로 사용되는 레이아웃에서 특정 요청에 따른
내용만 변경해야할때 사용한다. 
 */
const CommonLayout = () => {
  return (
    <div>
      <header style={{ background:'lightgray', padding:'10px' }}>
        Outlet 컴포넌트 알아보기
      </header>
      <article>
        {/* 각 페이지의 컴포넌트가 보여지는 부분에 설정한다. */}
        <Outlet />
      </article>
      <footer style={{ background:'lightgray', padding:'10px' }}>
        공통 레이아웃 
      </footer>
    </div>
  );
};

export default CommonLayout;