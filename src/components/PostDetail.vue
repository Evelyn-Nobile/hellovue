<template>
    <div class="post">
        <h2 >{{title}}</h2>
        <p>{{content}}</p>
        <button class="button" @click="handleClick()">SEND ALERT</button>
        
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
// eslint-disable-next-line no-unused-vars
const props = defineProps({
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        default: "no hay información para mostrar",
      },
    });

const emits = defineEmits(['sendAlert']);  

 const handleClick = () => {
emits("sendAlert", "EMITS: This is the message received by the fn")
 }   

</script> 

<style scoped>

.post{
    border: 4px dotted orangered;
    padding: 10px;
    width: 150px;
}
.button{
    padding: 10px;
    background-color: yellow;
    border: 2px solid black;
    border-radius: 10px;
    font-weight: 400;
}

.button:hover{
    background-color: rgb(255, 255, 0, 0.5);
}
</style>