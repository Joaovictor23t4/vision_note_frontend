<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3';
import { BubbleMenu } from '@tiptap/vue-3/menus'
import StarterKit from '@tiptap/starter-kit';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import { Markdown } from '@tiptap/markdown';
import { ref } from 'vue';

const content = ref<string>("");

const editor = useEditor({
    content: "## Título\n\nOlá **mundo**!",
    contentType: 'markdown',
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
      content.value = editor.getMarkdown();
    },
    onBlur({ editor }) {
      console.log("blur");
      console.log(content.value);
    },
    onCreate({ editor }) {
      content.value = editor.getMarkdown();
    },
    editable: true,
});
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