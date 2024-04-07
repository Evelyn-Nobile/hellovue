<template>
    <div>
        <h2 v-custom-size:xl>
            Computed properties: Composition API
        </h2>
        <input type="text" v-model="message">
        <h3>{{message}}</h3>
        <h3>{{ reverse}}</h3>
    </div>
</template>

<!-- <script setup>
import { ref, computed} from 'vue';

let message = ref('')
const reverse = computed(() => message.value.split('').reverse().join(''))

</script>  -->

<script>
import { defineComponent, ref, computed} from 'vue';

export default defineComponent({
    name: 'ComputedComposition',

    setup(){
let message = ref('')
const reverse = computed(() => message.value.split('').reverse().join(''))
return {message, reverse}
    }

});

</script> 

<style scoped>
</style>