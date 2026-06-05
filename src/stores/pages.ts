import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import type { PagesState, PagesList } from "@/interfaces/pages";

export const usePagesStore = defineStore('aside', () => {

    const state = reactive<PagesState>({
        page_selected: "home"
    });

    const pages = ref<PagesList>({ pages: [] })

    function selectPage(idPage: string): void {
        state.page_selected = idPage;
    }

    function populatePages(): void {
        pages.value = {
            pages: [
                {
                    id: "abcd",
                    name: "Bem-vindo",
                    emoji: "👁️"
                },
                {
                    id: "abcde",
                    name: "Lista de tarefas"
                }
            ]
        }
    }

    function removePage(idPage: string) {
        pages.value.pages = pages.value.pages.filter(page => page.id != idPage);
    }

    return {
        state,
        pages,
        selectPage,
        populatePages,
        removePage
    }
})