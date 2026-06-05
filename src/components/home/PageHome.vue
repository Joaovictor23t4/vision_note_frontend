<script setup lang="ts">
import type { PagePropsHome } from '@/interfaces/props';

const props = defineProps<PagePropsHome>();
const emit = defineEmits(['togglePage'])
</script>

<template>
    <button class="btn-page-home" @click="emit('togglePage', page.id)">
        <span class="emoji-pg-span-home">{{ props.page.emoji }}</span>
        <span class="name-pg-span-home">{{ props.page.name }}</span>
    </button>
</template>

<style scoped>
.btn-page-home {
    display: flex;
    column-gap: .8rem;
    background-color: var(--aside-bg);
    border: 1px solid var(--border);
    border-radius: 14px;
    cursor: pointer;
    transition: .2s;
    color: var(--text);
    padding: 1rem;
    width: 30%;
    min-width: 300px;
}
.btn-page-home:hover {
    background-color: var(--second-bg);
    border: 1px solid var(--second-color-theme);
}
.emoji-pg-span-home {
    font-size: calc(var(--fs) + .2rem);
}
.name-pg-span-home {
    font-family: var(--font-principal);
    font-size: calc(var(--fs) + .2rem);
}
</style>