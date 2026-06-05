<script setup lang="ts">
import { PageHome, AccessibilityResources } from '@/components';
import { usePagesStore } from '@/stores';

const pagesStore = usePagesStore();

function togglePage(idPage: string): void {
    pagesStore.selectPage(idPage);
}
</script>

<template>
  <main>
    <div class="container-home">
        <div class="container-welcome">
            <div class="icon-welcome">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand w-10 h-10 text-primary" aria-hidden="true"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
            </div>
            <h1 class="welcome-text">Boa noite, João!</h1>
            <p>Bem-vindo ao <strong>VisionNote</strong>. Uma plataforma de anotações projetada pensando em você, com foco em acessibilidade e facilidade de uso.</p>
        </div>
        <div class="container-you-want">
            <h3 class="question-title">O que você gostaria de fazer?</h3>
            <button class="btn-new-page">
                <div class="div-plus-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4 plus svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                </div>
                <div class="container-details-npg">
                    <span class="title-npg">Nova página</span>
                    <span class="description-npg">Começar do zero</span>
                </div>
            </button>
        </div>
        <div class="container-your-pages">
            <h3 class="ypgs-title">Suas Páginas</h3>
            <div class="container-flex-pages">
                <PageHome v-for="page in pagesStore.pages.pages" :key="page.id" :page="page" @toggle-page="togglePage" />
            </div>
        </div>
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

.container-welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
}
.icon-welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--pastel-bg);
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
}
.icon-welcome > svg {
    color: var(--second-color-theme);
}
.welcome-text {
    text-align: center;
    font-size: calc(var(--fs) + 1rem);
    font-weight: 700;
}
.container-welcome > p {
    color: var(--second-text);
    font-size: var(--fs);
    text-align: center;
}

.container-welcome > p > strong {
    color: var(--text);
}

.container-you-want {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    width: 100%;
}
.question-title {
    text-align: center;
    font-size: calc(var(--fs) + .5rem);
}
.btn-new-page {
    display: flex;
    column-gap: 1rem;
    padding: 1rem;
    background-color: var(--aside-bg);
    color: var(--second-color-theme);
    border: 1px solid var(--border);
    border-radius: 14px;
    width: 30%;
    min-width: 300px;
    cursor: pointer;
    transition: .2s;
}
.btn-new-page:hover {
    background-color: var(--second-bg);
    border: 1px solid var(--second-color-theme);
}
.btn-new-page:hover > .div-plus-icon {
    background-color: var(--third-hover);
}
.div-plus-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 14px;
    background-color: var(--pastel-bg);
    transition: .2s;
}
.container-details-npg {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    row-gap: .5rem;
    padding-top: .2rem;
}
.title-npg {
    color: var(--text);
    font-size: calc(var(--fs));
    font-weight: 700;
}
.description-npg {
    color: var(--second-text);
}

.container-your-pages {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    row-gap: .5rem;
}

.ypgs-title {
    text-align: center;
    font-family: var(--font-principal);
    font-size: calc(var(--fs) + .5rem);
}

.container-flex-pages {
    display: flex;
    column-gap: 1rem;
    row-gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
}
</style>