<template>
    <div class="counter">
<h3>{{ counter }}</h3>
<button @click="addCounter">INCREMENT</button>

</div>
</template>  

<script>
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'CounterOption',
    data() {
        let counter = 0;
        return {counter};
    },
    methods: {
        addCounter() {
            this.counter++;
        }
    }
    })

</script>

<style scoped>
.counter{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}

</style>