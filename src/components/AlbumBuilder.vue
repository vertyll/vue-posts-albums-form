<template>
  <div class="album" :id="`album${album.id}`">
    <h1>Autor: {{ album.userId }}</h1>
    <h2>Tytuł: {{ album.title }}</h2>
    <h3>Album nr: {{ album.id }}</h3>
    <div class="album-button">
      <RouterLink :to="`/albums/${album.id}/photos`">
        <button>Zdjęcia</button>
      </RouterLink>
    </div>
  </div>
</template>
  
<script>
  export default {
    props: {
      album: {
        type: Object,
        required: true,
        default: Object,
      },
    },
  }
</script>