<script setup lang="ts">
import { EditorMd } from '@/components';
import { useNotesStore } from '@/stores';
import type { NoteUpdateDTO } from '@/types/notes';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const noteStore = useNotesStore();
const route = useRoute();

function splitTitleAndContent(markdown: string): { title: string, content: string } {
    const linesAux = markdown.split("<h1>");

    if (linesAux.length > 1) {
        const lines = linesAux[1].split("</h1>");
        const title = lines[0].replace(/^#+\s*/, '');
        const content = lines.slice(1).join("\n").trim();
        return {
            title,
            content
        };
    }
    return {
        title: "",
        content: markdown
    }
}

async function updateContent(markdown: string): Promise<void> {
    if (noteStore.note?.id) {
        const { title, content } = splitTitleAndContent(markdown);
        console.log(title, content);
        const dto: NoteUpdateDTO = {
            title, content
        }
        await noteStore.updateNote(noteStore.note.id, dto);
    }
}

onMounted(async () => {
    await noteStore.findNoteById(route.params.id);
})
</script>

<template>
    <EditorMd :note="noteStore.note" @update-content="updateContent"/>
</template>

<style scoped>
</style>