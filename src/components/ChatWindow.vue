<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formatDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import getCollection from '../composables/getCollection';
  import { formatDistanceToNow } from 'date-fns';
  import { computed, onUpdated, ref } from 'vue';
  export default {
    setup() {
      const { documents, error } = getCollection('message');
      const messages = ref(null);
      const formatDocuments = computed(() => {
        if (documents.value) {
          return documents.value.map((doc) => {
            let time = formatDistanceToNow(doc.createdAt.toDate());
            return { ...doc, createdAt: time };
          });
        }
      });
      onUpdated(() => {
        // Logs: `Headline`
        messages.value.scrollTop = messages.value.scrollHeight;
      });
      console.log();
      return { documents, error, formatDocuments, messages };
    },
  };
</script>

<style lang="scss" scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;

    .messages {
      max-height: 400px;
      overflow: auto;
      .single {
        margin: 18px 0;
        .created-at {
          display: block;
          color: #999;
          font-size: 12px;
          margin-bottom: 4px;
        }
        .name {
          font-weight: bold;
          margin-right: 6px;
        }
      }
    }
  }
</style>
