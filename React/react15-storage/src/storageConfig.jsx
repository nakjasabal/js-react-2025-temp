//파이어베이스 서비스에 연결하기 위한 임포트 
import { initializeApp } from "firebase/app";
//storage 임포트 
import { getStorage } from "firebase/storage";

//.env 파일 생성 후
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

//App 초기화
const app = initializeApp(firebaseConfig);
//storage 객체 생성 
const storage = getStorage(app, "본인의 gs:// 주소");
//익스포트 
export { storage };

