<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm @login="enterChat" />
      <p>Нет аккаунта? <span @click="showLogin = false">Регайся</span></p>
    </div>
    <div v-else>
      <h2>Sing up</h2>
      <SingnupForm @signup="enterChat" />
      <p>Уже зарегистриворан? <span @click="showLogin = true">Вход</span></p>
    </div>
  </div>
</template>

<script>
  import SingnupForm from '../components/SingnupForm.vue';
  import LoginForm from '../components/LoginForm.vue';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  export default {
    components: { SingnupForm, LoginForm },
    setup() {
      const showLogin = ref(true);
      const router = useRouter();

      const enterChat = () => {
        router.push({ name: 'Chatroom' });
      };
      return { showLogin, enterChat };
    },
  };
</script>

<style lang="scss">
  .welcome {
    text-align: center;
    padding: 20px 0;
    form {
      width: 300px;
      margin: 20px auto;
    }
    label {
      display: block;
      margin: 20px 0 10px;
    }
    input {
      width: 100%;
      padding: 10px;
      border-radius: 20px;
      border: 1px solid #eee;
      outline: none;
      color: #999;
      margin: 10px auto;
    }
    span {
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
    }
    button {
      margin: 20px auto;
    }
  }
</style>
