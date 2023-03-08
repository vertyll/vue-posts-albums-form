<template>
  <div class="album" :id="`album-${album.id}`">
    <h1>Autor: {{ album.userId }}</h1>
    <h2>Album nr: {{ album.id }}</h2>
    <h3>Tytuł: {{ album.title }}</h3>
    <div class="album-bottom">
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