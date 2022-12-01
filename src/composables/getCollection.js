import { ref, watchEffect } from 'vue';
import { db } from '../firebase/config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const getCollection = (myCollection) => {
  const documents = ref(null);
  const error = ref(null);
  let collectionRef = collection(db, myCollection);
  let q = query(collectionRef, orderBy('createdAt'));
  const unsub = onSnapshot(
    q,
    (querySnapshot) => {
      console.log('+');
      const results = [];
      querySnapshot.forEach(
        (doc) =>
          doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
      );
      documents.value = results;
      error.value = null;
    },
    (err) => {
      documents.value = null;
      error.value = err.message;
    }
  );
  watchEffect((onInvalidate) => {
    console.log(onInvalidate);
    onInvalidate(() => unsub());
  });
  return { documents, error };
};
export default getCollection;
