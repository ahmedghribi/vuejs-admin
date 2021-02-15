<template>
  <a-table :columns="columns" :data-source="data">
    <span slot="User" slot-scope="User">
      <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> {{User}}
    </span>
    <span slot="Plan" slot-scope="Plan">
      <a-tag
        v-for="Pl in Plan"
        :key="Pl"
        :color="(Pl == '1' && 'green') || (Pl == '0' && 'red')"
      >
        {{ (Pl == "1" && "Premium Plan") || (Pl == "0" && "Basic Plan") }}
      </a-tag>
    </span>
    <!--span slot="action"-->
    <span slot="action" slot-scope="record">
      <router-link :to="{ path: '/user/' + record.key }">
        <a-button
          type="default"
          icon="eye"
          class="btn-edit"
          :to="{ path: '/user/' + record.key }"
        >
          View
        </a-button></router-link
      >
    </span>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "User",
    dataIndex: "User",
    key: "User",
    // slots: { title: 'customLanguages' },
    scopedSlots: { customRender: "User" },
    width: "20%",
    sorter: (a, b) => a.User.length - b.User.length,
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
    width: "30%",
  },
  {
    title: "Phone",
    key: "Phone",
    dataIndex: "Phone",
    scopedSlots: { customRender: "Phone" },
    width: "20%",
  },
  {
    title: "Plan",
    key: "Plan",
    dataIndex: "Plan",
    scopedSlots: { customRender: "Plan" },
    width: "20%",
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
    User: "Taieb Meftah",
    Email: "taiebmeftah@webgraphique.fr",
    Phone: "+216 00 000 000",
    Plan: "1",
  },
  {
    key: "2",
    User: "Ahmed Ghribi",
    Email: "AhmedGhribi@webgraphique.fr",
    Phone: "+216 00 000 000",
    Plan: "1",
  },
  {
    key: "3",
    User: "Omar chaari",
    Email: "omarchaari@webgraphique.fr",
    Phone: "+216 00 000 000",
    Plan: "0",
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
