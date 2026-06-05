<script setup lang="ts">
import { CardPage } from '..';
import { usePagesStore } from '@/stores';

const pagesStore = usePagesStore();

function togglePage(idPage: string): void {
    pagesStore.selectPage(idPage);
}
</script>

<template>
    <div class="container-your-pages">
        <h3 class="ypgs-title">Suas Páginas</h3>
        <div class="container-flex-pages">
            <CardPage v-for="page in pagesStore.pages.pages" :key="page.id" :page="page" @toggle-page="togglePage" />
        </div>
    </div>
</template>

<style scoped>
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