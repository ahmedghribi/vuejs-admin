<template>
  <div>
    <div
      class="page-header"
      style="margin-bottom: 0;"
      v-if="this.$route.meta.header.filter === 1"
    >
      <div class="row align-items-md-center">
        <div class="col-md-9 ">
          <div class="page-title media">
            <a-icon class="top-icon" :type="this.$route.meta.header.logo" />
            User
          </div>
        </div>
        <div class="col-md-3">
        <a-form-item >
                  <a-input v-decorator="['Search']" placeholder="Search">
                    <a-icon
                      slot="prefix"
                      type="search"
                      style="color:rgba(0,0,0,.25)"
                    />
                  </a-input>
                </a-form-item>
        </div>
      </div>
    </div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="Tab 1" class="tabs-content">
        <div class="ant-table-wrapperTab">
          <datatable :columns="columns" :data="data"> </datatable>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" class="tabs-content">
        <div class="ant-table-wrapperTab">
          <datatable :columns="columns" :data="data"> </datatable>
        </div>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3" class="tabs-content">
        <div class="ant-table-wrapperTab">
          <datatable :columns="columns" :data="data"> </datatable>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
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

<style></style>
