<script>
  import { ref } from 'vue';
  import useLogin from '../composables/useLogin';

  export default {
    setup(props, context) {
      const email = ref('');
      const password = ref('');
      const { error, login } = useLogin();

      const handeleSubmit = async () => {
        await login(email.value, password.value);
        if (!error.value) {
          context.emit('login');
        }
      };
      return { email, password, handeleSubmit, error };
    },
  };
</script>
<template>
  <form @submit.prevent="handeleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Войти</button>
  </form>
</template>

<style lang="scss" scoped></style>
