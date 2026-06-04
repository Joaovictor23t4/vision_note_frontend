import { defineStore } from "pinia";
import { reactive } from "vue";

export const useAccessibilityStore = defineStore('accessibility', () => {
    interface StateInterface {
        theme: string,
        font_size: string
    };

    const state = reactive<StateInterface>({
        theme: localStorage.getItem("data-theme") ?? "high_contrast",
        font_size: localStorage.getItem("data-font_size") ?? "18"
    });

    function setTheme(theme: string): void {
        state.theme = theme;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("data-theme", theme);
    }

    function setFontSize(fontSize: string): void {
        state.font_size = fontSize;
        document.documentElement.setAttribute("data-font-s", fontSize);
        localStorage.setItem("data-font_size", fontSize);
    }

    return {
        state,
        setTheme,
        setFontSize
    }
});