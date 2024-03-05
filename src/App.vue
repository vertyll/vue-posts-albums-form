<script setup>
import { RouterLink, RouterView } from "vue-router";

const scrollToTop = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#3bba9c ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = scrollToTop;
window.onload = scrollToTop;
</script>

<template>
  <div id="progress">
    <span id="progress-value">&uarr;</span>
  </div>
  <div>
    <nav class="navbar">
      <RouterLink
        class="link"
        to="/"
        exact
        :class="{ active: $route.path === '/' }"
        >Strona główna</RouterLink
      >
      <RouterLink
        class="link"
        to="/form"
        exact
        :class="{ active: $route.path === '/form' }"
        >Formularz</RouterLink
      >
      <RouterLink
        class="link"
        to="/posts"
        exact
        :class="{ active: $route.path === '/posts' }"
        >Posty</RouterLink
      >
      <RouterLink
        class="link"
        to="/albums"
        exact
        :class="{ active: $route.path === '/albums' }"
        >Albumy</RouterLink
      >
    </nav>
  </div>

  <RouterView />
</template>
