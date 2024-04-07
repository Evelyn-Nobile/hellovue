<template>
  <div></div>
</template>

<script setup>
import { onMounted, onUpdated} from 'vue';


onMounted(() =>{
    console.log('composition mounted')
}

)


onUpdated(() => {
    console.log('composition updated')
}

)
</script> 

<style scoped>
</style>