<template>
  <div class="container">
    <h1>Vue grid</h1>
    <grid-layout
      :layout.sync="layout"
      :col-num="6"
      :col-width="120"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i">
        {{ item.i }}
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { inject } from 'vue';
import { GridLayout, GridItem } from 'vue3-grid-layout-next';

export default {
  components: {
      GridLayout,
      GridItem,
    },
    setup() {
      const { store } = inject('store');

      return {
        layout: store.layout
      }
    },
}
</script>

<style scoped>
.container {
  width: 900px;
}
.container .vue-grid-item.vue-grid-placeholder {
    background: green;
}
.vue-grid-layout {
    background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
}
.vue-grid-item .resizing {
    opacity: 0.9;
}
.vue-grid-item .static {
    background: #cce;
}
.vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
}
.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}
.vue-grid-item .minMax {
    font-size: 12px;
}
.vue-grid-item .add {
    cursor: pointer;
}
.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}
</style>
