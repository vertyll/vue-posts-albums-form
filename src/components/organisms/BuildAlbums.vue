<template>
  <div id="albums-container">
    <AlbumBuilder v-for="album in albumsData" :key="album" :album="album" />
  </div>
</template>

<script>
import AlbumBuilder from "./AlbumBuilder.vue";
export default {
  props: {
    albumsData: {
      type: Object,
      required: true,
      default: Object,
    },
  },
  components: { AlbumBuilder },
};
</script>
