<template>
  <div>
    <div
      class="page-header"
      style="margin-bottom: 0;"
      v-if="this.$route.meta.header.filter === 1"
    >
      <div class="row align-items-md-center">
        <div class="col-md-4 col-xl-5 ">
          <div class="page-title media">
            <a-icon class="top-icon" :type="this.$route.meta.header.logo" />
            <div v-for="item in LangList.data" :key="item.name">
              <div v-if="item.id == langID">Language {{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="col-md-8 col-xl-7">
          <!---->
          <div class="text-md-right mt-1">
            <div class="row">
              <div class="col-lg-3 plr-0-20">
                <a-select
                  default-value="Base Language"
                  style="width: 100%"
                  size="small"
                >
                  <a-select-option
                    v-for="item in LangList.data"
                    :key="item.name"
                  >
                    <lang-flag :iso="item.code" />
                    <span class="flagname">
                      {{ item.name }}
                    </span>
                  </a-select-option>
                </a-select>
              </div>
              <div class="col-md-3 plr-0-20">
                <!--a-select
                  default-value="Context"
                  style="width: 100%"
                  size="small"
                  v-model="contextFilter"
                >
                  <a-select-option v-for="item in pages" :key="item">
                    {{ item }}
                  </a-select-option>
                </a-select-->
                <a-select
                  style="width: 100%"
                  size="small"
                  show-search
                  placeholder="Context"
                  option-filter-prop="children"
                  v-model="contextFilter"
                  :filter-option="filterOption"
                >
                  <a-select-option value="all" selected>
                    All Context
                  </a-select-option>
                  <a-select-option v-for="item in pages" :key="item">
                    {{ item }}
                  </a-select-option>
                </a-select>
              </div>
              <div class="col-md-3 plr-0-20">
                <a-form-item>
                  <a-input v-model="filter" placeholder="Search" size="small">
                    <a-icon
                      slot="prefix"
                      type="search"
                      style="color:rgba(0,0,0,.25)"
                    />
                  </a-input>
                </a-form-item>
              </div>
              <div class="col-md-3 plr-0-20">
                <a-button
                  :icon="this.$route.meta.header.btnIcon"
                  class="btn-header"
                  @click="openModalAdd()"
                  size="small"
                >
                  Add Key
                </a-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a-table
      :columns="columns"
      :data-source="TradList"
      :pagination="paginationOpt"
    >
      <div slot="context" slot-scope="text, record">
        {{ record.context }}
        <a-popover>
          <template slot="content">
            <p>{{ record.note }}</p>
          </template>
          <a-icon type="info-circle" fill="red" theme="filled" />
          <!--a-button type="default" shape="circle" icon="question" /-->
        </a-popover>
      </div>

      <span slot="action" slot-scope="record">
        <a-dropdown-button @click="openModal(record)">
          <a-icon type="retweet" /> Translate
          <a-menu slot="overlay">
            <a-menu-item key="1" @click="openModalEdit(record)"
              ><a-icon type="edit" style="font-size:14px !important" />
              Edit key
            </a-menu-item>

            <a-menu-divider />

            <a-menu-item key="3" style="color:red" @click="DelKey(record)"
              ><a-icon type="delete" style="font-size:14px !important" /> Delete
            </a-menu-item>
          </a-menu>
        </a-dropdown-button>
      </span>
    </a-table>
    <add-trad ref="AddModal"></add-trad>
    <edit-key ref="EditKey"></edit-key>
    <edit-manage ref="EditModal"></edit-manage>
  </div>
</template>
<script>
import uniq from "lodash/uniq";
import LangFlag from "vue-lang-code-flags";
import { mapGetters } from "vuex";
import editManage from "./editManage.vue";
import AddTrad from "./addTrad.vue";
import EditKey from "./editKey.vue";
const columns = [
  {
    title: "Key",
    dataIndex: "name",
    key: "name",
    width: "30%",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Context",
    dataIndex: "context",
    key: "context",
    scopedSlots: { customRender: "context" },
    width: "20%",
    sorter: (a, b) => a.context.length - b.context.length,
  },
  {
    title: "Base value",
    key: "base",
    dataIndex: "base",
    scopedSlots: { customRender: "base" },
    width: "20%",
    sorter: (a, b) => a.base.length - b.base.length,
  },
  {
    title: "Target value",
    key: "value",
    dataIndex: "translation.value",
    scopedSlots: { customRender: "value" },
    width: "20%",
    sorter: (a, b) => a.value.length - b.value.length,
  },

  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
    width: "25%",
  },
];

export default {
  components: { editManage, AddTrad, LangFlag, EditKey },
  data() {
    return {
      pages: [],
      columns,
      filter: "",
      contextFilter: "all",
      langID: this.$route.params.key,
      modal2Visible: false,
      paginationOpt: {
        defaultCurrent: 1, // Default current page number
        defaultPageSize: 10, // The size of the default data displayed on the current page
      },
    };
  },
  computed: {
    //...mapGetters(["TradList"]),
    TradList() {
      let TradList = this.$store.getters.TradList?.data;
      this.pages = TradList ? uniq(TradList.map((item) => item.context)) : [];
      TradList = TradList?.filter((item) => {
        return (
          item.context == this.contextFilter || this.contextFilter == "all"
        );
      });
      let filter = this.filter.toLowerCase();
      //let ValueTrad = TradList?.translation;
      TradList = TradList?.filter((item) => {
        return item.name.toLowerCase().includes(filter); //|| item.value.toLowerCase().includes(filter)
      });
      return TradList;
    },
    LangList() {
      return this.$store.getters.LangList;
    },
   
  },
  methods: {
    DelKey(record) {
      this.$confirm({
        title: "Delete Key",
        content: (
          <div>
            Are you sure delete
            <span style="color :red"> {record.name}</span>
          </div>
        ),
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk: () => {
          this.DeleteKey(record.id);
          this.$store.dispatch("tradlist", this.$route.params.key).then();
        },
      });
    },
    DeleteKey: function(id) {
      this.$store
        .dispatch("DeleteKey", id)
        .then(console.log("ok"))
        .catch((err) => console.log(err));
    },
    openModal(record) {
      this.$refs.EditModal.openModal(record);
    },
    openModalAdd() {
      this.$refs.AddModal.openModal();
    },
    openModalEdit(record) {
      this.$refs.EditKey.openModal(record);
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
  },
  created() {
    this.$store.dispatch("tradlist", this.$route.params.key).then();
    this.$store.dispatch("languageList").then();
  },
};
</script>
