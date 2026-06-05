<script setup lang="ts">
import { WelcomeHome, PageHome, AccessibilityResources, WantHome } from '@/components';
</script>

<template>
  <main>
    <div class="container-home">
        <WelcomeHome />
        <WantHome />
        <PageHome />
        <AccessibilityResources />
    </div>
  </main>
</template>

<style scoped>
main {
    width: calc(100vw - var(--aside-width));
    height: calc(100vh - var(--navbar-height));
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 20vw;
    padding-right: 20vw;
    overflow-y: auto;
}

.container-home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    row-gap: 2.5rem;
    color: var(--text);
    font-family: var(--font-principal);
}
</style>