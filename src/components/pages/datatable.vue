<template>
  <a-table :columns="columns" :data-source="data">
  
  </a-table>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
    },
    data: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
