<script setup lang="ts">
import { Header, Sidebar } from "@/components/index";
import { RouterView } from "vue-router";
</script>

<template>
    <Header />
    <div class="container-side-main">
        <Sidebar />
        <RouterView />
    </div>
</template>

<style scoped>
.container-side-main {
    display: flex;
}
</style>