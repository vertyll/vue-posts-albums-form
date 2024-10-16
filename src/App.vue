<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from "vue-router";
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};
const scrollToTop = () => {
  document.documentElement.scrollTop = 0;
};
window.onscroll = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  if (pos > 100) {
    scrollProgress.style.display = "block";
  } else {
    scrollProgress.style.display = "none";
  }
};
</script>
<template>
  <div id="progress" @click="scrollToTop" class="scroll-to-top">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L12 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M5 9L12 2L19 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
  <nav class="navbar">
    <div class="hamburger" @click="toggleMenu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
    <div class="desktop-menu">
      <RouterLink class="link" to="/" exact :class="{ active: $route.path === '/' }">Strona główna</RouterLink>
      <RouterLink class="link" to="/form" exact :class="{ active: $route.path === '/form' }">Formularz</RouterLink>
      <RouterLink class="link" to="/posts" exact :class="{ active: $route.path === '/posts' }">Posty</RouterLink>
      <RouterLink class="link" to="/albums" exact :class="{ active: $route.path === '/albums' }">Albumy</RouterLink>
    </div>
    <div :class="['mobile-menu', { 'open': isMenuOpen }]">
      <RouterLink class="link" to="/" exact :class="{ active: $route.path === '/' }" @click="closeMenu">Strona główna
      </RouterLink>
      <RouterLink class="link" to="/form" exact :class="{ active: $route.path === '/form' }" @click="closeMenu">
        Formularz</RouterLink>
      <RouterLink class="link" to="/posts" exact :class="{ active: $route.path === '/posts' }" @click="closeMenu">Posty
      </RouterLink>
      <RouterLink class="link" to="/albums" exact :class="{ active: $route.path === '/albums' }" @click="closeMenu">
        Albumy</RouterLink>
    </div>
  </nav>
  <div class="overlay" :class="{ 'active': isMenuOpen }" @click="closeMenu"></div>
  <RouterView />
</template>