// импортируйте необходимые вам функции от необходимых SDK
import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: добавьте SDK для продуктов Firebase, которые вы хотите использовать
// https://firebase.google.com/docs/web/setup#available-libraries

// Конфигурация Firebase вашего веб -приложения
const firebaseConfig = {
  apiKey: 'AIzaSyB_lkfJu8xFVnKqAJIWrgy7Fe8x9yeDnDM',
  authDomain: 'vue-site-test.firebaseapp.com',
  databaseURL:
    'https://vue-site-test-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'vue-site-test',
  storageBucket: 'vue-site-test.appspot.com',
  messagingSenderId: '623612406648',
  appId: '1:623612406648:web:d83ad12d520f74e169368d',
};

// Инициализировать пожарную базу
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const timestamp = serverTimestamp();
const auth = getAuth(app);
export { db, timestamp, auth };
