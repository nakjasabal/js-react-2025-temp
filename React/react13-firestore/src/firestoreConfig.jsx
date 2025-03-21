//파이어베이스 서비스에 연결하기 위한 임포트 
import { initializeApp } from "firebase/app";
//파이어스토어 데이터베이스를 사용하기 위한 임포트 
import { getFirestore } from "firebase/firestore";

//.env 파일 생성 전. 파이어베이스에서 제공받은 API 정보.
// const firebaseConfig = {
//   apiKey: "AIzaSyAhM5uybX8TUJB6fReNtyqnpzDvFgVhfm8",
//   authDomain: "myreactapp-55914.firebaseapp.com",
//   projectId: "myreactapp-55914",
//   storageBucket: "myreactapp-55914.firebasestorage.app",
//   messagingSenderId: "832312445066",
//   appId: "1:832312445066:web:31f5eeaedef4afb0de4573"
// };

//.env 파일 생성 후
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

//firebase에 연결한 후 앱 초기화 
const app = initializeApp(firebaseConfig);
//firestore 사용을 위한 객체 생성 
const firestore = getFirestore(app);
//익스포트 
export { firestore };
