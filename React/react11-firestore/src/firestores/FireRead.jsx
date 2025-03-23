import { firestore } from '../firestoreConfig';
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore"; 
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const FireRead = () => {
  const [showData, setShowData] = useState([]);
  const [isRender, setIsRender] = useState(true);

  const getCollection = async () => {
    let trArray = [];
    //컬렉션 이름으로 지정된 하위 문서를 얻어온다. 
    const querySnapshot = await getDocs(collection(firestore, "members"));
    //문서의 갯수만큼 반복해서 <tr>태그를 추가한다. 
    querySnapshot.forEach((row) => {
      console.log(row.id, " => ", row.data());  
      let memberInfo = row.data();
      console.log("파싱", row.id, memberInfo.pass, memberInfo.name, memberInfo.regdate)
      trArray.push (
        <tr key={row.id}>
          <td className="cen">{row.id}</td>
          <td className="cen">{memberInfo.pass}</td>
          <td className="cen">{memberInfo.name}</td>
          <td className="cen">{memberInfo.regdate}</td>
          <td className="cen">
            <NavLink to={"/update/"+row.id}>[수정]</NavLink>
            &nbsp;
            <NavLink onClick={async ()=>{
              if(confirm('삭제할까요?')){
                await deleteDoc(doc(firestore, "members", row.id));
                alert('삭제 성공');
                setIsRender(!isRender);
              }
            }}>[삭제]</NavLink>
          </td>
        </tr>  
      );
    });
    //파싱된 데이터를 통해 State를 변경하고 새롭게 렌더링한다. 
    setShowData(trArray);
  }

  useEffect(() => {
    getCollection();
  }, [isRender]);

  return (<>
    <h2>Firestore - 목록</h2>
    <table border='1'>
      <thead>
        <tr className='text-center'>
          <th>아이디</th><th>비밀번호</th><th>이름</th>
          <th>가입일</th><th></th>
        </tr>
      </thead>
      <tbody>
        {showData}
      </tbody>
    </table>
  </>);
}

export default FireRead;