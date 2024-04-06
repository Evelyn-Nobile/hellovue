<template>
  <ul class="list">
    <li v-for="(country, index) in countries" v-bind:key="index">
      {{ country }}
    </li>

    <ul class="listObj" >
        <li v-for="country in countriesObj" :key="country.code" >{{ country.name}}</li>
    </ul>
  </ul>
</template>

<script setup>
let countries = ["Spain", "France", "UK", "Italy", "Portugal"];
let countriesObj = [
  {
    code: "arg",
    name: "Argentina",
  },
  {
    code: "co",
    name: "Colombia",
  },
  {
    code: "uru",
    name: "Uruguay",
  },
];
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 2rem;
}

.listObj{
    display: flex;
    gap: 10px;
   list-style-type: none;
}
</style>
