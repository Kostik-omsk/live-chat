<script>
  import useSignup from '../composables/useSingnup';
  import { ref } from 'vue';

  export default {
    setup(props, context) {
      const { error, signup } = useSignup();
      const dysplayName = ref('');
      const email = ref('');
      const password = ref('');

      const handeleSubmit = async () => {
        await signup(email.value, password.value, dysplayName.value);
        if (!error.value) {
          context.emit('signup');
        }
      };
      return { dysplayName, email, password, handeleSubmit, error };
    },
  };
</script>
<template>
  <form @submit.prevent="handeleSubmit">
    <input type="text" required placeholder="name" v-model="dysplayName" />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Рег</button>
  </form>
</template>

<style lang="scss" scoped></style>
