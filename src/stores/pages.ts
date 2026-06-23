import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import type { PagesState, PagesList } from "@/interfaces/pages";
import { useRouter } from "vue-router";

export const usePagesStore = defineStore('aside', () => {

    const state = reactive<PagesState>({
        page_selected: "home"
    });

    const router = useRouter();

    const pages = ref<PagesList>({ pages: [] })

    function selectPage(idPage: string): void {
        state.page_selected = idPage;

        if (idPage == "home") {
            router.push("/home");
        }
        else {
            router.push(`/page/${idPage}`);
        }
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