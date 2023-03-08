import { reactive } from 'vue';

const store = reactive({
  layout: [
    {"x":0,"y":0,"w":1,"h":1,"i":"0"},
    {"x":1,"y":0,"w":1,"h":2,"i":"1"},
    {"x":2,"y":0,"w":2,"h":2,"i":"2"},
    {"x":4,"y":0,"w":2,"h":3,"i":"3"},
    {"x":0,"y":1,"w":1,"h":1,"i":"4"},
    {"x":0,"y":2,"w":4,"h":1,"i":"5"},
  ]
});

export default {
  store
}
