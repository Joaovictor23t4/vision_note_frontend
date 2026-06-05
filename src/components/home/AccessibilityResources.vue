<script setup lang="ts">
</script>

<template>
  <div class="container-resources">
    <h3 class="title">Recursos de Acessibilidade</h3>
    <div class="container-cards">
        <div class="container-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-keyboard w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden="true"><path d="M10 8h.01"></path><path d="M12 12h.01"></path><path d="M14 8h.01"></path><path d="M16 12h.01"></path><path d="M18 8h.01"></path><path d="M6 8h.01"></path><path d="M7 16h10"></path><path d="M8 12h.01"></path><rect width="20" height="16" x="2" y="4" rx="2"></rect></svg>
            <div class="container-details">
                <h4 class="title-card">Atalhos de Teclado</h4>
                <p class="details">Ctrl + para aumentar fonte, Ctrl - para diminuir, Tab para navegar</p>
            </div>
        </div>
        <div class="container-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <div class="container-details">
                <h4 class="title-card">Alto Contraste</h4>
                <p class="details">Use a barra de acessibilidade para alternar entre modos de contraste</p>
            </div>
        </div>
        <div class="container-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume2 w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden="true"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
            <div class="container-details">
                <h4 class="title-card">Leitura em Voz Alta</h4>
                <p class="details">Selecione texto e use o menu de contexto para ouvir</p>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.container-resources {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    width: 100%;
    font-family: var(--font-principal);
    margin-bottom: 2rem;
}

.title {
    text-align: center;
    font-size: calc(var(--fs) + .5rem);
}

.container-cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
}

.container-card {
    display: flex;
    column-gap: .8rem;
    border: 1px solid var(--border);
    border-radius: 14px;
    width: 80%;
    padding: 1rem;
    background-color: var(--aside-bg);
    transition: .2s;
}

.container-card:hover {
    background-color: var(--second-bg);  
    border: 1px solid var(--second-color-theme);
}

.container-card > svg {
    color: var(--second-color-theme);
}

.container-details {
    display: flex;
    flex-direction: column;
    row-gap: .3rem;
}

.title-card {
    font-size: var(--fs);
    color: var(--text);
}

.details {
    font-size: calc(var(--fs) - .3rem);
    color: var(--second-text);
}
</style>