<template>
    <div :class="['menu', { 'mobile-menu': isMobile, 'desktop-menu': !isMobile, 'open': isOpen }]">
        <NavLink to="/" @click="$emit('close')">Strona główna</NavLink>
        <NavLink to="/form" @click="$emit('close')">Formularz</NavLink>
        <NavLink to="/posts" @click="$emit('close')">Posty</NavLink>
        <NavLink to="/albums" @click="$emit('close')">Albumy</NavLink>
    </div>
</template>

<script setup>
import NavLink from './../molecules/NavLink.vue';

defineProps(['isMobile', 'isOpen']);
</script>