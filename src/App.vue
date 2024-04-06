<template>
 <h1>Hello Vue!</h1>
 <PostConainer/>
 <CounterOption/>
 <CounterComposition/>
 <ExampleSelective/>
 <ExampleFor/>
 <ClassBind/>
 <StyleBind/>
 <ModelForm/>
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
