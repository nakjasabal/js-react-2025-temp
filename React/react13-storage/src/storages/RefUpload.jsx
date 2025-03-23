import { storage } from '../storageConfig'
import { ref, uploadBytes } from "firebase/storage";

const Storage01 = () => {
  const storageRef = ref(storage);
  console.log('루트경로참조', storageRef);

  const imagesRef = ref(storage, 'images/myFile.jpg');  
  const imagesParentRef = imagesRef.parent;
  const rootRef = imagesParentRef.root;  
  console.log('경로1/파일명', imagesRef.fullPath, imagesRef.name); 
  console.log('경로2', imagesParentRef.fullPath);
  console.log('경로3', rootRef.fullPath);

  const uploadPath = imagesParentRef; //or imagesParentRef
  
  return (<>
    <h2>Storage - 참조/업로드</h2>
    <p>파일을 선택하면 즉시 업로드 됩니다.</p>
    <input type="file" name="myfile" onChange={(e) => { 
      console.log('files 프로퍼티', e.target.files);
      //파일 업로드
      const uploadRef = ref(uploadPath, e.target.files[0].name);     
      uploadBytes(uploadRef, e.target.files[0]).then((snapshot) => {
        console.log('업로드성공', snapshot);
      });
    }} />
  </>);
}

export default Storage01;