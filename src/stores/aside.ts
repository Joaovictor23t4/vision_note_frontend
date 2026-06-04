import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useAsideStore = defineStore('aside', () => {
    interface StateInterface {
        page_selected: string | null
    }

    interface Page {
        id: string,
        name: string,
        emoji?: string
    }

    interface PagesList {
        pages: Page[]
    }

    const state = reactive<StateInterface>({
        page_selected: "abcd"
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