<template>
    <nav class="navbar">
        <HamburgerIcon @toggle="toggleMenu" />
        <NavMenu :isMobile="false" />
        <NavMenu :isMobile="true" :isOpen="isMenuOpen" @close="closeMenu" />
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import HamburgerIcon from '../atoms/HamburgerIcon.vue';
import NavMenu from './NavMenu.vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>