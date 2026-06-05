<script setup lang="ts">
import { ChangeFontHeader, ChangeThemeHeader } from '..';
</script>

<template>
    <header>
        <nav>
            <div class="container-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye inline w-5 h-5 mr-1"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <span class="title">Vision Note</span>
            </div>
            <div class="divider"></div>
            <ChangeFontHeader />
            <div class="divider" id="second-divider"></div>
            <ChangeThemeHeader />
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

#second-divider {
    margin-top: 3px;
}
</style>