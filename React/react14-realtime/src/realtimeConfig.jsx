//파이어베이스 서비스에 연결하기 위한 임포트 
import { initializeApp } from "firebase/app";
//realtime 데이터베이스 임포트 
import { getDatabase } from "firebase/database";

//.env 파일 생성 후
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  databaseURL: import.meta.env.VITE_databaseURL
};

//App 초기화
const app = initializeApp(firebaseConfig);
//realtime 객체 생성 
const realtime = getDatabase(app);
//익스포트 
export { realtime };


