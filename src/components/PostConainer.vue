<template>

<div class="post-container">
<PostCard/>
<PostCard/>
<PostCard/>
<PostCard/>
</div>

</template>

<script setup>
import PostCard from './PostCard.vue';
</script>

<style scoped>
.post-container{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 5rem;
}
</style>