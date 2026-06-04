import { defineStore } from "pinia";
import { reactive } from "vue";

export const useAccessibilityStore = defineStore('accessibility', () => {
    interface StateInterface {
        theme: string,
        font_size: number
    };

    const state = reactive<StateInterface>({
        theme: localStorage.getItem("data-theme") ?? "high_contrast",
        font_size: Number(localStorage.getItem("data-font-size")) ?? 18
    });

    function setTheme(theme: string): void {
        state.theme = theme;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("data-theme", theme);
    }

    function setFontSize(fontSize: number): void {
        state.font_size = fontSize;
        document.documentElement.setAttribute("data-font-s", fontSize.toString());
        localStorage.setItem("data-font-size", fontSize.toString());
    }

    return {
        state,
        setTheme,
        setFontSize
    }
});