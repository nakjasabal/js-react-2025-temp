import { storage } from '../storageConfig'
import { ref, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

const ListDownload = () => {
  let params = useParams();
  let refPath = (params.path === 'undefined') ? '' : params.path;
  
  const [fileLists, setFileLists] = useState([]);  
  const [renderFlag, setRenderFlag] = useState(false);  
  const rootRef = ref(storage, refPath);  
  useEffect(() => {    
    let fileRows = [];
    listAll(rootRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          fileRows.push(
            <tr key={folderRef.name}>
              <td><NavLink to={`/download/${folderRef.name}`}>{folderRef.name}</NavLink></td>
              <td></td>
              <td colSpan={2}>디렉토리</td>
            </tr> 
          ); 
        });
        res.items.forEach((itemRef) => {
          const deleteRef = ref(rootRef, itemRef.fullPath);
          getDownloadURL(ref(rootRef, itemRef.name))
            .then((url)=>{
              const img = document.getElementById(`img_${itemRef.name}`);
              img.setAttribute('src', url);
              img.setAttribute('width', '200');
            })
            .catch((error)=>{
              console.log("이미지 다운로드 중 에러", error)
            });
          fileRows.push(
            <tr key={itemRef.name}>
              <td>{rootRef.fullPath}</td>
              <td><img id={`img_${itemRef.name}`} /></td>
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
        setFileLists(fileRows);
      })
      .catch((error) => {
        console.log('파일 목록 출력중 에러발생', error);
      });
  }, [renderFlag, refPath]);

  return (<>
    <h2>Storage - 목록/다운로드/삭제</h2>
    <table border={1}>
      <tbody>
        <tr>
          <th>경로명</th><th>이미지</th><th colSpan={2}>파일명</th>
        </tr>
        {fileLists}
      </tbody>
    </table>
  </>);
}

export default ListDownload;