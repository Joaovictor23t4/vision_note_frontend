<script setup lang="ts">
</script>

<template>
    <div class="container-you-want">
        <h3 class="question-title">O que você gostaria de fazer?</h3>
        <button class="btn-new-page">
            <div class="div-plus-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4 plus svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            </div>
            <div class="container-details-npg">
                <span class="title-npg">Nova página</span>
                <span class="description-npg">Começar do zero</span>
            </div>
        </button>
    </div>
</template>

<style scoped>
.container-you-want {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    width: 100%;
}
.question-title {
    text-align: center;
    font-size: calc(var(--fs) + .5rem);
}
.btn-new-page {
    display: flex;
    column-gap: 1rem;
    padding: 1rem;
    background-color: var(--aside-bg);
    color: var(--second-color-theme);
    border: 1px solid var(--border);
    border-radius: 14px;
    width: 30%;
    min-width: 300px;
    cursor: pointer;
    transition: .2s;
}
.btn-new-page:hover {
    background-color: var(--second-bg);
    border: 1px solid var(--second-color-theme);
}
.btn-new-page:hover > .div-plus-icon {
    background-color: var(--third-hover);
}
.div-plus-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 14px;
    background-color: var(--pastel-bg);
    transition: .2s;
}
.container-details-npg {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    row-gap: .5rem;
    padding-top: .2rem;
}
.title-npg {
    color: var(--text);
    font-size: calc(var(--fs));
    font-weight: 700;
}
.description-npg {
    color: var(--second-text);
}
</style>