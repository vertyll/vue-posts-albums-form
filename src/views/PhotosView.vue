<template>
  <main>
    <BuildPhotos :photos="photos" v-if="photos" />
  </main>
</template>

<script>
import BuildPhotos from "@/components/BuildPhotos.vue";
import { getPhotosFromAlbums } from "@/api.js";
export default {
  data() {
    return {
      photos: null,
    };
  },
  components: {
    BuildPhotos,
  },
  async created() {
    this.photos = await getPhotosFromAlbums(this.$route.params.albumId);
  },
};
</script>
