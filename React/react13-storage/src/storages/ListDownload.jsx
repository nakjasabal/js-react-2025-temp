import { useState, useEffect } from 'react';
import { storage } from '../storageConfig'
import { ref, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { useParams, NavLink } from 'react-router-dom';

const Storage02 = () => {
  //폴더명을 파라미터로 받기
  let params = useParams();
  let refPath = (params.path === 'undefined') ? '' : params.path;
  console.log("refPath", refPath);
  
  //State : 파일목록 및 렌더링 
  const [fileLists, setFileLists] = useState([]);  
  const [renderFlag, setRenderFlag] = useState(false);  

  //스토리지 연결 및 root 경로로 참조 생성
  const rootRef = ref(storage, refPath); // or images

  //1차 렌더링 완료 후 파일목록을 비동기로 가져온다. 
  useEffect(() => {    
    let fileRows = [];
    //생성된 참조에서 모든 폴더와 파일명 인출 
    listAll(rootRef)
      .then((res) => {
        //폴더명 출력 
        res.prefixes.forEach((folderRef) => {
          //console.log('폴더명', folderRef.name);
          fileRows.push(
            <tr key={folderRef.name}>
              <td></td>
              <td><NavLink to={`/storage02/${folderRef.name}`}>{folderRef.name}</NavLink></td>
              <td>디렉토리</td>
              <td></td>
            </tr> 
          ); 
        });
        //파일명 출력 
        res.items.forEach((itemRef) => {
          //console.log('파일명', itemRef.name);
          const deleteRef = ref(rootRef, itemRef.fullPath);
          //파일의 다운로드 URL을 비동기로 가져온다. 파일명을 통해 참조를 생성한다.
          getDownloadURL(ref(rootRef, itemRef.name))
            .then((url)=>{
              //console.log('파일 URL 다운로드');
              //<img>에 부여된 id를 통해 DOM을 얻어온다. 
              const img = document.getElementById(`img_${itemRef.name}`);
              //<img>의 src, width속성을 부여한다. 
              img.setAttribute('src', url);
              img.setAttribute('width', '200');
            })
            .catch((error)=>{
              console.log("이미지 다운로드 중 에러", error)
            });

          //파일을 목록 생성. 최초 생성시에는 <img>에 src속성 없음. 
          fileRows.push(
            <tr key={itemRef.name}>
              <td><img id={`img_${itemRef.name}`} alt='' /></td>
              <td>{rootRef.fullPath}</td>
              <td>{itemRef.name}</td>
              <td><button type='button' onClick={() => {
                if(window.confirm('삭제할까요?')){
                  deleteObject(deleteRef).then(() => {
                    console.log("파일 삭제 성공");
                    setRenderFlag(!renderFlag);
                  })
                  .catch((error) => {
                    console.log("파일 삭제 실패", error);
                  });
                }
              }}>삭제</button></td>
            </tr> 
          );          
        });
        //완성된 파일목록을 통해 State 변경 
        setFileLists(fileRows);
      })
      .catch((error) => {
        console.log('파일 목록 출력중 에러발생', error);
      });
  }, [renderFlag, refPath]);

  return (<>
    <h2>Storage - 목록/다운로드/삭제</h2>
    <table border={1}>
      <thead>
      <tr>
        <th>이미지</th><th>경로</th><th>파일명</th><th></th>
      </tr>
      </thead>
      <tbody>
        {fileLists}
      </tbody>
    </table>
  </>);
}

export default Storage02;