<template>
  <div class="comments-container" :id="`post${postId}comments`">
    <h2>Komentarze:</h2>
    <div v-if="isLoading" class="spinner"></div>
    <div v-else>
      <div v-for="comment in comments" :key="comment.id" class="comment-div">
        <p>Email: {{ comment.email }}</p>
        <p>Nazwa: {{ comment.name }}</p>
        <p>Treść: {{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getCommentsData } from "@/api.js";

export default {
  data() {
    return {
      isLoading: true,
      comments: [],
    };
  },
  props: {
    postId: {
      type: Number,
      required: true,
    },
  },
  async created() {
    try {
      this.comments = await getCommentsData(this.postId);
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania komentarzy:", error);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>
