<script>
  import { provide } from 'vue';

  import store from './store.js';
  import VueGrid from './components/VueGrid.vue';
  import CssGrid from './components/CssGrid.vue';

  export default {
    components: {
      VueGrid,
      CssGrid,
    },
    setup() {
      console.log('App.vue store', store);
      provide('store', store);
    }
  }
</script>

<template>
  <VueGrid/>
  <CssGrid/>
</template>

