<script setup lang="ts">
import { useAccessibilityStore } from '@/stores';

const accessibilityStore = useAccessibilityStore();
</script>

<template>
    <div class="container-change-theme">
        <button :class="['change-theme', {'select-theme': accessibilityStore.state.theme == 'dark'}]" aria-label="Tema escuro" @click="accessibilityStore.setTheme('dark')">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon w-4 h-4"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
        </button>
        <button :class="['change-theme', {'select-theme': accessibilityStore.state.theme == 'light'}]" aria-label="Tema claro" @click="accessibilityStore.setTheme('light')">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun w-4 h-4"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
        </button>
        <button :class="['change-theme', {'select-theme': accessibilityStore.state.theme == 'high_contrast'}]" aria-label="Tema escuro com alto contraste" @click="accessibilityStore.setTheme('high_contrast')">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot w-4 h-4"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
        </button>
    </div>
</template>

<style scoped>
.container-change-theme {
    display: flex;
    column-gap: 5px;
}

.change-theme {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    padding: .6rem;
    background-color: var(--second-bg);
    border: none;
    border-radius: calc(.75rem - 2px);
    color: var(--btn);
    cursor: pointer;
    transition: .3s;
}

.change-theme:hover {
    background-color: var(--hover);
}

.select-theme {
    background-color: var(--second-color-theme);
    color: var(--select-color-btn);
}

.select-theme:hover {
    background-color: var(--second-color-theme);
    color: var(--select-color-btn);
}
</style>