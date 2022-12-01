import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { ref } from 'vue';
const error = ref(null);

const logout = async () => {
  error.value = null;
  await signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((err) => {
      // An error happened.
      error.value = err.message;
    });
};
const useLogout = () => {
  return { logout, error };
};
export default useLogout;
