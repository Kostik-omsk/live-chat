import { ref } from 'vue';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const useCollection = (collections) => {
  const error = ref(null);

  const addMessage = async (mes) => {
    try {
      await addDoc(collection(db, collections), mes);
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };
  return { addMessage, error };
};

export default useCollection;
