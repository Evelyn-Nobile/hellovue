<template>
 <h1>HELLO VUE!: LEARNING ABOUT VUE 3</h1>
 <PostConainer/>
 <CounterOption/>
 <CounterComposition/>
 <ExampleSelective/>
 <ExampleFor/>
 <ClassBind/>
 <StyleBind/>
 <ModelForm/>
 <CycleOption/>
 <CycleComposition/>
 <PostList/>
 <PostDetail/>

</template>

<script setup>
import PostConainer from '@/components/PostConainer'
import CounterOption from './components/CounterOption.vue';
import CounterComposition from './components/CounterComposition.vue';
import ExampleSelective from './components/ExampleSelective.vue';
import ExampleFor from './components/ExampleFor.vue';
import ClassBind from './components/ClassBind.vue';
import StyleBind from './components/StyleBind.vue';
import ModelForm from './components/ModelForm.vue';
import CycleOption from '@/components/CycleOption'
import CycleComposition from './components/CycleComposition.vue';
import PostList from './components/PostList.vue';
</script>

<style>
h1{
  color: orangered;
  text-align: center;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
}
</style>
