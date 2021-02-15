<template>
  <a-table :columns="columns" :data-source="data">
    <span slot="action" slot-scope="record">
      <a-dropdown-button>
        <router-link :to="{ path: '/manage' }">
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
    title: "Category Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
    width: "33%",
  },
  {
    title: "Action",
    dataIndex: "Action",
    width: "33%",
    scopedSlots: { customRender: "action" },
    key: "action",
  },
];

const data = [
  {
    key: 1,
    name: "Free",
    Date: "07/01/2021",
    children: [
      {
        key: 11,
        name: "Option 1",
        Date: "07/01/2021",
      },

      {
        key: 13,
        name: "Option 2",
        Date: "07/01/2021",
      },
    ],
  },
  {
    key: 2,
    name: "Drivers",
    Date: "07/01/2021",
  },
  {
    key: 3,
    name: "Training",
    Date: "07/01/2021",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

export default {
  data() {
    return {
      data,
      columns,
      rowSelection,
    };
  },
};
</script>
