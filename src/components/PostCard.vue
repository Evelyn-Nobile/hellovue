<template>
<div class="post-card">
    <h3>Title</h3>
    <p>Description</p>
    <PostButton />
</div>
</template>

<script setup >
import PostButton from './PostButton.vue';
</script>

<style scoped>
.post-card{
    border-radius: 15px;
    padding: 20px;
    margin: 5px;
    border: 2px solid black;
    text-align: center;
}
</style>