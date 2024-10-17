<template>
  <main>
    <div class="spinner" v-if="isLoading"></div>
    <BuildPhotos :photos="photos" v-if="photos && !isLoading" />
  </main>
</template>

<script>
import BuildPhotos from "@/components/organisms/BuildPhotos.vue";
import { getPhotosFromAlbums } from "@/api.js";

export default {
  data() {
    return {
      photos: null,
      isLoading: false,
    };
  },
  components: {
    BuildPhotos,
  },
  async created() {
    this.isLoading = true;
    this.photos = await getPhotosFromAlbums(this.$route.params.albumId);
    this.isLoading = false;
  },
};
</script>