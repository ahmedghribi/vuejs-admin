<template>
  <a-table :columns="columns" :data-source="data">
   
    <!--span slot="action"-->
    <span slot="action" slot-scope="text, record">
      <a-dropdown-button>
        <router-link :to="{ path: '/manage/' + record.key }">
          <a-icon type="eye" /> View
        </router-link>

        <a-menu slot="overlay">
          <a-menu-item key="1"> Update </a-menu-item>
          <a-menu-item key="2"> Delete </a-menu-item>
        </a-menu>
      </a-dropdown-button>
    </span>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "Title",
    dataIndex: "Title",
    key: "Title",
    // slots: { title: 'customLanguages' },
    scopedSlots: { customRender: "Title" },
    width: "30%",
    sorter: (a, b) => a.Title.length - b.Title.length,
  },
  {
    title: "Monthly Price",
    dataIndex: "Monthly",
    key: "Monthly",
    width: "20%",
    sorter: (a, b) => a.Monthly.length - b.Monthly.length,
  },
  {
    title: "Annualy Price",
    dataIndex: "Annualy",
    key: "Annualy",
    width: "20%",
    sorter: (a, b) => a.Annualy.length - b.Annualy.length,
  },
  {
    title: "Created",
    key: "created",
    dataIndex: "created",
    scopedSlots: { customRender: "created" },
    width: "20%",
    sorter: function(a, b) {
      var c = new Date(a.created);
      var d = new Date(b.created);
      return c - d;
    },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
    width: "10%",
  },
];

const data = [
  {
    key: "1",
    Title: "Transfer",
    Monthly: "5$",
    Annualy: "55$",
    created: "09/01/2021",
  },
  {
    key: "2",
    Title: "Mini bus",
    Monthly: "9$",
    Annualy: "99$",
    created: "05/01/2021",
  },
  {
    key: "3",
    Title: "Wedding",
    Monthly: "10$",
    Annualy: "100$",
    created: "11/01/2021",
  },
];

export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
