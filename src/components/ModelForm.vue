<template>
<h2>Bindeo bidireccional</h2>
<form >
  <label >Write here:</label>  <input type="text" v-model="inputText" />
  <input type="checkbox" v-model="agree" >I agree
  <select v-model="country">
    <option value="spain">Spain</option>
    <option value="france">France</option>
    <option value="germany">Germany</option>
  </select>
</form>
<h3>{{ inputText }}</h3>
</template>

<script setup>
import {ref} from 'vue'

let inputText = ref('')
let agree = ref(true)
let country = ref('germany')
</script> 

<style scoped>
</style>