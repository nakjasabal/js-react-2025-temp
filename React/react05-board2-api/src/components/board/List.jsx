import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
 
function List() {
  /**API 서버와의 통신을 통해 전달받은 JSON데이터를 저장하기 위한
  State생성. 초기값은 빈 배열로 설정. */
  let [boardData, setBoardData] = useState([]);  
  
  //화면 렌더링 후 API 서버에 요청 
  useEffect(function(){
    fetch("http://nakja.co.kr/APIs/php7/boardListJSON.php?tname=nboard_news")
      .then((result)=>{
        return result.json();
      })
      .then((json)=>{
        console.log(json);
        //콜백 데이터로 State변경 
        setBoardData(json);
      });
  }, []);
  
  let lists = boardData.map((row) => {
    let date = row.regdate.substring(0,10);
    let subject = row.subject.substring(0,20);
    return (
      <tr key={row.idx}>
        <td className="cen">{row.idx}</td>
        <td><Link to={"/view/"+row.idx}>{subject}</Link></td>
        <td className="cen">{row.name}</td>
        <td className="cen">{date}</td>
      </tr>
    );
  });

  return (<>
    <header>
      <h2>게시판-목록</h2>
    </header>
    <nav>
      <Link to="/write">글쓰기</Link>
    </nav>
    <article>
      <table id="boardTable">
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {/* 파싱한 내용은 tbody 사이에 삽입  */}
          {lists}
        </tbody>
      </table>
    </article>
  </>);
}

export default List;
