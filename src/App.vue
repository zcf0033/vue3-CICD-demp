<template>
    <div>
        <h1>真实Vite+Vue3 CI/CD 已跑通</h1>
        <p>当前环境 {{ env }}</p>
    </div>
</template>

<script setup>
const env = import.meta.env.MODE

</script>

<style scoped>
h1 {
    color: #42b883;
}
</style>