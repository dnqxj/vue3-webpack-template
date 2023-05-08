import { reactive } from "vue";

const store = reactive({
  count: 0,
  addCount() {
    this.count++;
  }
});

export default store;
