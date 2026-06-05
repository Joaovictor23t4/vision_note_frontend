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
    <header>
        <nav>
            <div class="container-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye inline w-5 h-5 mr-1"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <span class="title">Vision Note</span>
            </div>
            <div class="divider"></div>
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
            <div class="divider" id="second-divider"></div>
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
        </nav>
    </header>
</template>

<style scoped>
header {
    background-color: var(--aside-bg);
    height: var(--navbar-height);
    position: relative;
    border-bottom: 1px solid var(--border);
}

nav {
    display: flex;
    justify-content: left;
    align-items: center;
    column-gap: 10px;
    padding: .5rem 1rem .5rem 1rem;
}

.container-title {
    display: flex;
    align-items: center;
    column-gap: 10px;
}

.container-title > svg {
    color: var(--second-color-theme);
}

.title {
    font-family: var(--font-principal);
    color: var(--second-color-theme);
    font-size: var(--fs);
    font-weight: 700;
}

.divider {
    width: 1px;
    height: 1.5rem;
    background-color: var(--text);
    margin-top: 2px;
}

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

#second-divider {
    margin-top: 3px;
}

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