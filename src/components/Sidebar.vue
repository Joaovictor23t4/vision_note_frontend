<script setup lang="ts">
import { ref, Transition, onMounted } from 'vue';
import { useAsideStore } from '@/stores';

const asideStore = useAsideStore();
const hoverPage = ref<string>("");

onMounted(() => {
    asideStore.populatePages();
})
</script>

<template>
  <aside>
    <div class="container-home-area">
        <button class="home-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house w-4 h-4 shrink-0" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
            <span>Inicio</span>
        </button>
        <h3 class="h3-pages">PÁGINAS</h3>
    </div>
    <div class="divider-horizontal"></div>
    <div class="container-pages">
        <button v-for="page in asideStore.pages.pages" :key="page.id" :class="['page', {'page-select': page.id == asideStore.state.page_selected}]" @mouseenter="hoverPage = page.id" @mouseleave="hoverPage = ''" @click="asideStore.state.page_selected = page.id">
            <span class="emoji-span">{{ page.emoji }}</span>
            <span class="page-title">{{ page.name }}</span>
            <Transition name="fade">
                <svg v-if="hoverPage == page.id" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 trash-icon" viewBox="0 0 16 16" @click="asideStore.removePage(page.id)">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
            </Transition>
        </button>
    </div>
    <div class="divider-horizontal"></div>
    <div class="container-new-page">
        <button class="new-page-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4 plus svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            <span class="new-page-text">Nova Página</span>
        </button>
    </div>
  </aside>
</template>

<style scoped>
aside {
    display: flex;
    flex-direction: column;
    width: var(--aside-width);
    min-width: 200px;
    height: calc(100vh - var(--navbar-height));
    border-right: 1px solid var(--border);
    background-color: var(--aside-bg);
}
.container-home-area {
    display: flex;
    flex-direction: column;
    row-gap: .5rem;
    width: 100%;
    padding: 1rem .8rem 1rem 1.5rem;
}
.home-btn {
    display: flex;
    align-items: center;
    width: 100%;
    padding: .7rem .5rem .7rem 1rem;
    column-gap: 10px;
    border: none;
    border-radius: 14px;
    background-color: var(--aside-bg);
    color: var(--btn);
    cursor: pointer;
    transition: .3s;
}

.home-btn:hover {
    background-color: var(--hover);
}

.home-btn > span {
    font-family: var(--font-principal);
    font-size: calc(var(--fs) - 2px);
    font-weight: 700;
}

.h3-pages {
    color: var(--btn);
    font-family: var(--font-principal);
    font-size: var(--fs);
}

.divider-horizontal {
    width: 100%;
    height: 1px;
    background-color: var(--border);
}
.container-pages {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    row-gap: 1rem;
    padding: 1rem .8rem 1rem 1.5rem;
}

.page {
    display: flex;
    align-items: center;
    justify-content: left;
    column-gap: 8px;
    width: 100%;
    height: 3rem;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: transparent;
    color: var(--text);
    font-family: var(--font-principal);
    font-size: var(--fs);
    cursor: pointer;
    transition: .3s;
}
.page:hover {
    background-color: var(--hover);
}
.page-select {
    background-color: var(--hover);
    border-left: 4px solid var(--text);
    border-color: var(--second-color-theme);
    border-radius: calc(.75rem - 2px);
}
.page-title {
    display: flex;
    justify-content: left;
    flex-grow: 1;
}

.trash-icon {
    margin-left: 6px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.container-new-page {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem .5rem;
}

.new-page-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    width: 90%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: var(--second-color-theme);
    color: var(--bg);
    font-family: var(--font-principal);
    font-size: var(--fs);
    font-weight: 700;
    transition: .3s;
    cursor: pointer;
}

.new-page-btn:hover {
    background-color: var(--hover-new-page);
}

.plus-svg {
    width: 1rem;
    height: 1rem;
}
</style>