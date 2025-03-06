/**
/intro 경로가 요청될때 Outlet 컴포넌트 위치에 렌더링된다. 
이 부분은 <App>컴포넌트에 설정되어있다. 
 */
const LayoutIndex = () => {
  return (<>
    <h2>레이아웃 인덱스 페이지</h2>
    <ul>
      <li>Outlet 컴포넌트 위치에 출력됩니다.</li>
      <li>Route 설정시 index로 지정합니다.</li>
    </ul>
  </>);
}

export default LayoutIndex;
