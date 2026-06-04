<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import { useAccessibilityStore } from "@/stores/index";

const acessibilityStore = useAccessibilityStore();

onMounted(() => {
  acessibilityStore.setTheme(acessibilityStore.state.theme);
  acessibilityStore.setFontSize(acessibilityStore.state.font_size);
})
</script>

<template>
    <RouterView />
</template>

<style scoped>
</style>
