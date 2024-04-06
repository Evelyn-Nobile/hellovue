<template>
    <p v-bind:class="{
'error' : hasError
    }">Class binding</p>
</template>

<script setup>
// import {ref} from 'vue'
// let hasError = ref(false)
let hasError = true
</script>

<style scoped>
.error{
    color:red;
    text-align: center;
}
</style>