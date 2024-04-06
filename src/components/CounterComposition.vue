<template>
    <div class="counter">
<h3>{{ counter}}</h3>
<button @click="decrement">DECREMENT</button>
</div>
</template>

<script setup>
// sin el setup de arriba:
// import { defineComponent, ref } from 'vue';
// export default defineComponent({
// name: 'CounterComposition',
// setup(){
//     let counter = ref(50);
//     const decrement = () =>{
//         counter.value--
//     }
// return {counter, decrement}
// }
// })
import {ref} from 'vue';
let counter = ref(50);
const decrement = () => {
    counter.value--
}
</script>

<style scoped>
.counter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
