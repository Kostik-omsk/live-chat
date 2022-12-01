<template>
  <form>
    <textarea
      placeholder="Напиши сообщение"
      v-model="message"
      @keypress.enter.prevent="handelSubmit"
    ></textarea>
    <div>{{ error }}</div>
  </form>
</template>

<script>
  import { ref } from 'vue';
  import getUser from '../composables/getUser';
  import useCollection from '../composables/useCollection';
  import { timestamp } from '../firebase/config';

  export default {
    setup() {
      const { addMessage, error } = useCollection('message');
      const { user } = getUser();
      const message = ref('');
      const handelSubmit = async () => {
        const chat = {
          name: user.value.displayName,
          message: message.value,
          createdAt: timestamp,
        };
        await addMessage(chat);
        if (!error.vaue) {
          message.value = '';
        }
      };
      return { message, handelSubmit, error };
    },
  };
</script>

<style lang="scss" scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>
