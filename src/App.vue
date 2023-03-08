<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="sidebar">
        <RouterLink to="/">Strona głowna</RouterLink>
        <RouterLink to="/form">Formularz</RouterLink>
        <RouterLink to="/posts">Posty</RouterLink>
        <RouterLink to="/albums">Albumy</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
