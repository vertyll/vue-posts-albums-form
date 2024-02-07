<template>
  <div class="post" :id="`post${post.id}`">
    <h1>Autor: {{ post.userId }}</h1>
    <h2>Tytuł: {{ post.title }}</h2>
    <h3>Post nr: {{ post.id }}</h3>
    <p>Treść: {{ post.body }}</p>
    <div class="post-button">
      <button
        @click="
          () => {
            toggle = !toggle;
          }
        "
      >
        Komentarze
      </button>
    </div>
    <PostComments v-if="toggle" :postId="post.id" />
  </div>
</template>

<script>
import PostComments from "./PostComments.vue";
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: Object,
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
  components: { PostComments },
};
</script>
