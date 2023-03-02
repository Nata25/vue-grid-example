
<template>
  <h1>Native css grid</h1>
  <div class="grid">
    <div v-for="item of items" class="item" :class="`item-${item}`">
      {{ item }}
    </div>
  </div>
</template>

<script setup>
  const items = [0, 1, 2, 3, 4, 5];
</script>

<style scoped>
  .grid {
    display: grid;
    padding: 10px;
    box-sizing: border-box;
    grid-template-columns: repeat(6, 140px);
    grid-template-rows: repeat(3, 32px);
    width: 900px;
    gap: 8px;
    background-color: #e9e9e9;
  }

  .item {
    background: lightgrey;
    border: 1px solid black;
  }

  .item-0 {
    /* {"x":0,"y":0,"w":1,"h":1,"i":"0"} */
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .item-1 {
    /* {"x":1,"y":0,"w":1,"h":2,"i":"1"} */
    grid-column: 2 / 3;
    grid-row: 1 / span 2;
  }

  .item-2 {
    /* {"x":2,"y":0,"w":2,"h":2,"i":"2"} */
    grid-column: 3 / span 2;
    grid-row: 1 / span 2;
  }

  .item-3 {
    /* {"x":4,"y":0,"w":2,"h":3,"i":"3"} */
    grid-column: 5 / span 2;
    grid-row: 1 / span 3;
  }

  .item-4 {
    /* {"x":0,"y":1,"w":1,"h":1,"i":"4"} */
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .item-5 {
    /* {"x":0,"y":2,"w":4,"h":1,"i":"5"} */
    grid-column: 1 / span 4;
    grid-row: 3 / 4;
  }
</style>
