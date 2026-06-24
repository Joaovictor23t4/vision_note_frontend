<script setup lang="ts">
import type { Note } from '@/interfaces/notes';
import { CardPage } from '..';
import { useNotesStore } from '@/stores';

const noteStore = useNotesStore();

function toggleNote(note: Note): void {
    noteStore.selectNote(note);
}
</script>

<template>
    <div class="container-your-pages">
        <h3 class="ypgs-title">Suas Páginas</h3>
        <div class="container-flex-pages" v-if="noteStore.notes">
            <CardPage v-for="note in noteStore.notes ? noteStore.notes : []" :key="note.id" :note="note" @toggle-note="toggleNote" />
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