<template>
    <div>
        <h2 v-custom-font.xl.blue >
            Computed properties: Option API
        </h2>
        <input type="text" v-model="message">
        <h3>{{message}}</h3>
        <h3>{{ reverse}}</h3>
    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({

    name: 'ComputedOption',

    data() {
        return {
            message:''
        }
    },

    computed: {
        reverse() {
            return this.message.split('').reverse().join('')
    }
},
})
</script> 

<style>
</style>