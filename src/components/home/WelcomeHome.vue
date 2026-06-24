<script setup lang="ts">
</script>

<template>
    <div class="container-welcome">
        <div class="icon-welcome">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand w-10 h-10 text-primary" aria-hidden="true"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
        </div>
        <h1 class="welcome-text">Boa noite, João!</h1>
        <p>Bem-vindo ao <strong>VisionNote</strong>. Uma plataforma de anotações projetada pensando em você, com foco em acessibilidade e facilidade de uso.</p>
    </div>
</template>

<style scoped>
.container-welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
}
.icon-welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--pastel-bg);
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
}
.icon-welcome > svg {
    color: var(--second-color-theme);
}
.welcome-text {
    text-align: center;
    font-size: calc(var(--fs) + 1rem);
    font-weight: 700;
}
.container-welcome > p {
    color: var(--second-text);
    font-size: var(--fs);
    text-align: center;
}

.container-welcome > p > strong {
    color: var(--text);
}
</style>