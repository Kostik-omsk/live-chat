import { ref } from 'vue';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user, { displayName });
    return user;
  } catch (err) {
    console.log('ERROR: ' + err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};
export default useSignup;
