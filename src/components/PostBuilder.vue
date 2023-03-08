<template>
  <div class="post" :id="`post_${post.id}`">
    <h1><p>Autor: {{ post.userId }}</p></h1>
    <p>Post nr: {{ post.id }}</p> 
    <h2><p>Tytuł: {{ post.title }}</p></h2>
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
    <PostComments 
      v-if="toggle" 
      :postId="post.id" 
    />
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
      }
    },
    components: { PostComments }
  }
</script>