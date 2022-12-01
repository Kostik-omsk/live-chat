<script>
  import useLogout from '../composables/useLogout';
  import getUser from '../composables/getUser';
  export default {
    setup() {
      const { logout, error } = useLogout();
      const { user } = getUser();

      const handelClick = async () => {
        await logout();

        if (!error.value) {
          console.log('epth вышел');
        }
      };

      return { handelClick, user };
    },
  };
</script>

<template>
  <nav v-if="user">
    <div>
      <p>Хей... {{ user.displayName }}</p>
      <p class="email">твой адрес: {{ user.email }}</p>
    </div>
    <button @click="handelClick">Logout</button>
  </nav>
</template>

<style lang="scss" scoped>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 2px auto;
      font-size: 16px;
      color: #444;
      &.email {
        font-size: 14px;
        color: #999;
      }
    }
  }
</style>
