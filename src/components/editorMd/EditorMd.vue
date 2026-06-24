<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import { BubbleMenu } from '@tiptap/vue-3/menus'
import StarterKit from '@tiptap/starter-kit';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import { Markdown } from '@tiptap/markdown';
import { ref, watch } from 'vue';
import type { NoteProps } from '@/interfaces/props';

const props = defineProps<NoteProps>();
const emit = defineEmits(['update-content']);

const content = ref<string>(props.note?.content ? ("<h1>" + props.note.title + "</h1>") + props.note.content : "");

const editor = useEditor({
    content: content.value,
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: {}
        },
        heading: {
          HTMLAttributes: {}
        }
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Markdown
    ],
    onUpdate({ editor }) {
      content.value = editor.getHTML();
    },
    onBlur({ editor }) {
      emit('update-content', content.value);
    },
    onCreate({ editor }) {
      content.value = editor.getHTML();
    },
    editable: true,
});

watch(() => props.note?.id, () => {
  editor.value?.commands.setContent(props.note?.content ? ("<h1>" + props.note.title + "</h1>") + props.note.content : "");
})
</script>

<template>
  <main>
      <BubbleMenu v-if="editor" :editor="editor" class="bubble-menu">
        <button @click="console.log(content); editor?.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
          Bold
        </button>
        <button @click="editor?.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
          Italic
        </button>
        <button @click="editor?.chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }">
          Strike
        </button>
      </BubbleMenu>
    <EditorContent :editor="editor" v-model="content" />
  </main>
</template>

<style scoped>
main {
    width: calc(100vw - var(--aside-width));
    height: calc(100vh - var(--navbar-height));
    padding-top: 4rem;
    padding-bottom: 0;
    padding-left: 20vw;
    padding-right: 20vw;
    overflow-y: auto;
}
</style>