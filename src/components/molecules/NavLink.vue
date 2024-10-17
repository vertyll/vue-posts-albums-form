<template>
    <RouterLink class="link" :to="to" exact :class="{ active: $route.path === to }" @click="$emit('click')">
        <slot></slot>
    </RouterLink>
</template>

<script setup>
defineProps(['to']);
</script>