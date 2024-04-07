<template>   
<h1 class="title">USING PROPS AND EMITS</h1>
    <div class="postContainer" >     
        <PostDetail v-for="post in info" :key="post.title" :title="post.title" :content="post.content" @sendAlert="showAlert"/>
    </div>

</template>

<script setup>
import PostDetail from './PostDetail'

let info = [
    {title: 'Title 1', content: 'Text 1'},
    {title: 'Title 2', content: 'Text 2'},
    {title: 'Title 3', content: 'Text 3'},
    {title: 'Title 4', content: 'Text 4'},
    {title: 'Title 5', content: 'Text 5'}
]

// eslint-disable-next-line no-unused-vars
const showAlert = (msg) =>{
alert(msg)
}

</script> 

<style scoped>

.postContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.title{
    margin-top: 3rem;
}
</style>