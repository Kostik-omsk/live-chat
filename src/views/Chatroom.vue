<script>
  import { watch } from 'vue';
  import { useRouter } from 'vue-router';
  import Navbar from '../components/Navbar.vue';
  import getUser from '../composables/getUser';
  import NawChatForm from '../components/NawChatForm.vue';
  import ChatWindow from '../components/ChatWindow.vue';
  export default {
    setup() {
      const { user } = getUser();
      const router = useRouter();
      watch(user, () => {
        if (!user.value) {
          router.push({ name: 'Welcome' });
        }
      });
      return {};
    },
    components: { Navbar, NawChatForm, ChatWindow },
  };
</script>
<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NawChatForm />
  </div>
</template>

<style lang="scss" scoped></style>
