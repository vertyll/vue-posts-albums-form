<template>
  <div class="comments-container" :id="`post${postId}-comments`">
    <h2>Komentarze:</h2>
    <div 
      v-for="comment in comments" 
      :key="comment" 
      class="comment-div"
    >
        <p>Email: {{ comment.email }}</p>
        <p>Nazwa: {{ comment.name }}</p>
        <p>Treść: {{ comment.body }}</p>
    </div>
  </div>
</template>
  
<script>
  import { getCommentsData } from "@/api.js";
  export default {
    data() {
      return {
        comments: {},
      };
    },
    props: {
      postId: {
        type: Number,
        required: true,
      },
    },
    async created() {
      this.comments = await getCommentsData(this.postId);
    },
  };
</script>