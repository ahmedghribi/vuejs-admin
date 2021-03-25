<template>
  <div>
    <a-table :columns="columns" :data-source="LangList.data">
      <div slot="name" slot-scope="text, record">
        <lang-flag :iso="record.code" />

        <span class="flagname">
          {{ record.name }}
        </span>
      </div>
      <span slot="isActive" slot-scope="text, record">
        <a-tag
          :color="
            (record.isActive == true && 'green') ||
            (record.isActive == false && 'red')
          "
        >
          {{
            (record.isActive == true && "Enabled") ||
            (record.isActive == false && "Disabled")
          }}
        </a-tag>
      </span>

      <!--span slot="action"-->
      <span slot="action" slot-scope="text, record">
        <a-dropdown-button>
          <router-link :to="{ path: '/manage/' + record.id }">
            <a-icon type="setting" /> Manage
          </router-link>

          <a-menu slot="overlay">
            <a-menu-item key="1" @click="openModal(record)"
              ><a-icon type="edit" style="font-size: 14px !important" /> Edit
            </a-menu-item>
            <a-menu-divider />

            <a-menu-item key="2" style="color: red" @click="DelLang(record)"
              ><a-icon type="delete" style="font-size: 14px !important" />
              Delete
            </a-menu-item>
          </a-menu>
        </a-dropdown-button>
      </span>
    </a-table>
    <edit-lang ref="EditModal"></edit-lang>
  </div>
</template>
<script>
import LangFlag from "vue-lang-code-flags";

const columns = [
  {
    title: "Languages",
    dataIndex: "name",
    key: "name",
    // slots: { title: 'customLanguages' },
    scopedSlots: { customRender: "name" },
    width: "30%",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
    width: "20%",
    sorter: (a, b) => a.code.length - b.code.length,
  },
  {
    title: "Status",
    key: "isActive",
    dataIndex: "isActive",
    scopedSlots: { customRender: "isActive" },
    width: "20%",
    sorter: (a, b) => a.isActive - b.isActive,
  },
  {
    title: "Created",
    key: "created",
    dataIndex: "created",
    scopedSlots: { customRender: "created" },
    width: "20%",
    sorter: function (a, b) {
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
    Languages: "Francais",
    Code: "fr",
    status: "1",
    created: "09/01/2021",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png",
  },
  {
    key: "2",
    Languages: "Anglais",
    Code: "en",
    status: "0",
    created: "05/01/2021",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
  },
  {
    key: "3",
    Languages: "Arabic",
    Code: "ar",
    status: "1",
    created: "11/01/2021",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1280px-Flag_of_Saudi_Arabia.svg.png",
  },
];

import { mapGetters } from "vuex";
import EditLang from "./editLang.vue";

export default {
  components: { LangFlag, EditLang },
  data() {
    return {
      data,
      columns,
    };
  },
  computed: {
    ...mapGetters(["LangList"]),
  },
  methods: {
    openModal(record) {
      this.$refs.EditModal.openModal(record);
    },
    DelLang(record) {
      this.$confirm({
        title: "Delete Language",
        content: (
          <div>
            Are you sure delete
            <span style="color :red"> {record.name}</span>
          </div>
        ),
        okText: "Yes",
        cancelText: "No",
        onOk: () => {
          this.DeleteLanguage(record.id);
          this.$store.dispatch("languageList", this.$route.params.key).then();
        },
      });
    },
    DeleteLanguage: function (id) {
      this.$store
        .dispatch("DeleteLanguage", id)
        .then(console.log("ok"))
        .catch((err) => console.log(err));
    },
  },
  created() {
    this.$store.dispatch("languageList").then();
  },
};
</script>
