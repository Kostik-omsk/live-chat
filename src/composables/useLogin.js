import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { ref } from 'vue';

const error = ref(null);
const login = async (email, password) => {
  error.value = null;
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    error.value = err.message;
  }
};
const useLogin = () => {
  return {
    login,
    error,
  };
};
export default useLogin;
