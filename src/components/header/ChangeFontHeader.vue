<script setup lang="ts">
import { useAccessibilityStore } from '@/stores';

const accessibilityStore = useAccessibilityStore();

function increaseFontSize(): void {
    if (accessibilityStore.state.font_size < 20) {
        accessibilityStore.setFontSize(accessibilityStore.state.font_size += 2);
    }
    else {
        accessibilityStore.setFontSize(accessibilityStore.state.font_size += 4);
    }
}

function decreaseFontSize(): void {
    if (accessibilityStore.state.font_size > 20) {
        accessibilityStore.setFontSize(accessibilityStore.state.font_size -= 4);
    }
    else {
        accessibilityStore.setFontSize(accessibilityStore.state.font_size -= 2);
    }
}
</script>

<template>
    <div class="container-change-w-font">
        <button class="change-font increase" :disabled="accessibilityStore.state.font_size == 14" @click="decreaseFontSize">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type w-4 h-4 change-w-font"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" x2="15" y1="20" y2="20"></line><line x1="12" x2="12" y1="4" y2="20"></line></svg>
            <span>-</span>
        </button>
        <span class="current-w-font">{{ accessibilityStore.state.font_size }}px</span>
        <button class="change-font decrease" :disabled="accessibilityStore.state.font_size == 28" @click="increaseFontSize">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type w-4 h-4 change-w-font"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" x2="15" y1="20" y2="20"></line><line x1="12" x2="12" y1="4" y2="20"></line></svg>
            <span>+</span>
        </button>
    </div>
</template>

<style scoped>
.container-change-w-font {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 15px;
    padding-top: 3px;
}

.change-font {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
    background-color: var(--second-bg);
    border: none;
    border-radius: calc(.75rem - 2px);
    color: var(--btn);
    cursor: pointer;
    transition: .3s;
}

.increase {
    width: 45px;
    height: 38px;
}

.decrease {
    width: 50px;
    height: 38px;
}

.change-font:hover {
    background-color: var(--hover);
}

.change-font > span {
    font-size: 1.3rem;
    margin-left: .125rem;
}

.change-w-font {
    color: var(--btn);
}

.current-w-font {
    color: var(--btn);
    font-family: var(--font-principal);
    font-size: var(--fs);
}
</style>