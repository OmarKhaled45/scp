<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)

function increment() {
    count.value++ 
}
</script>

<template>
    <RouterLink :to="{name: 'SecPage'}">test</RouterLink>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="../assets/img/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="../assets/img/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>

    <h1>Vite + Vue</h1>

    <div class="card">
        <button type="button" @click="increment">count is {{ count }}</button>
        <p>
            Edit
            <code>components/HomePage.vue</code> to test HMR
        </p>
    </div>

    <p>
        Check out
        <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
        starter
    </p>
    <p>
        Install
        <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
        in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
