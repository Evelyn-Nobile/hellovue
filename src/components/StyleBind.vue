<template>
    <p v-bind:style="{
        backgroundColor : '#FFFF00',
        color : color,
        fontWeight : 'bold'
    }">Style binding</p>
    <div class="buttons"> 
        <button v-on:click="handleClick()">ACTIVATE EVENT</button>
        <button @click="handleClear()">DEACTIVATE EVENT</button>
    </div>
</template>

<script setup>
// hacer referencia si quiero que color sea reactivo
import {ref} from 'vue'
let color = ref('#fc4b08')
// funcion que cambia el valor de la referencia:
const handleClick = () =>{
    color.value = "#000"
}

const handleClear = () =>{
color.value = "#fc4b08"
}
</script>

<style scoped> 

button{
    margin-right: 30px;
}
</style>