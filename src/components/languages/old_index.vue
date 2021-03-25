<template>
  <datatable :columns="columns" :data="data">
    <template #columns>
      <a slot="operation"> AAAAAA </a>
    </template>
  </datatable>
</template>
<script>
import datatable from "../pages/datatable.vue";

export default {
  components: { datatable },
  data() {
    return {
      data: [
        {
          key: "1",
          Flag: "aaaa",
          Laguages: "John Brown",
          Code: 32,
          Status: "Active",
        },
        {
          key: "2",
          Flag: "aaaa",
          Laguages: "Jim Green",
          Code: 42,
          Status: "Active",
        },
        {
          key: "3",
          Flag: "aaaa",
          Laguages: "Joe Black",
          Code: 32,
          Status: "Active",
        },
        {
          key: "4",
          Flag: "aaaa",
          Laguages: "John Brown",
          Code: 32,
          Status: "Active",
        },
        {
          key: "5",
          Flag: "aaaa",
          Laguages: "Jim Green",
          Code: 42,
          Status: "Active",
        },
        {
          key: "6",
          Flag: "aaaa",
          Laguages: "Joe Black",
          Code: 32,
          Status: "Active",
        },
        {
          key: "7",
          Flag: "aaaa",
          Laguages: "John Brown",
          Code: 32,
          Status: "Active",
        },
        {
          key: "8",
          Flag: "aaaa",
          Laguages: "Jim Green",
          Code: 42,
          Status: "Active",
        },
        {
          key: "9",
          Flag: "aaaa",
          Laguages: "Joe Black",
          Code: 32,
          Status: "Active",
        },
      ],
      columns: [
        {
          title: "Laguages",
          dataIndex: "Laguages",
          key: "Laguages",
          scopedSlots: { customRender: "Laguages" },
          width: "30%",
        },
        {
          title: "Code",
          dataIndex: "Code",
          key: "Code",
          scopedSlots: {
            customRender: "Code",
          },
          width: "20%",
        },
        {
          title: "Status",
          dataIndex: "Status",
          key: "Status",
          scopedSlots: {
            customRender: "Status",
          },
          width: "25%",
        },
        {
          title: "Action",
          key: "operation",
          scopedSlots: { customRender: "operation" },
          width: "25%",
        },
      ],
    };
  },
};
</script>
