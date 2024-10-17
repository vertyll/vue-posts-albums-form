<template>
    <ScrollToTopButton />
    <Navbar />
    <div class="overlay" :class="{ 'active': isMenuOpen }" @click="closeMenu"></div>
    <RouterView />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ScrollToTopButton from '../atoms/ScrollToTopButton.vue';
import Navbar from '../organisms/Navbar.vue';

const isMenuOpen = ref(false);

const closeMenu = () => {
    isMenuOpen.value = false;
};

const handleScroll = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    if (scrollProgress) {
        scrollProgress.style.display = pos > 100 ? "block" : "none";
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>