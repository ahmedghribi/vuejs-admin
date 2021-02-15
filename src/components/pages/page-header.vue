<template>
  <div>
    <div
      class="page-header"
      style="margin-bottom: 0;"
      v-if="this.$route.meta.header.filter === 0"
    >
      <div class="row align-items-md-center">
        <div class="col-md-8 ">
          <div class="page-title media">
            <a-icon class="top-icon" :type="this.$route.meta.header.logo" />
            {{ this.$route.name }}
          </div>
        </div>
        <div class="col-md-4">
          <!---->
          <div class="text-md-right mt-1">
            <div class="row">
              <div
                v-if="this.$route.meta.header.btnName == 'none'"
                class="col-md-12 plr-0-20"
              >
                <a-form-item v-if="this.$route.meta.header.search === 1">
                  <a-input v-decorator="['Search']" placeholder="Search" size="small">
                    <a-icon
                      slot="prefix"
                      type="search"
                      style="color:rgba(0,0,0,.25)"
                    />
                  </a-input>
                </a-form-item>
              </div>
              <div
                v-if="this.$route.meta.header.btnName != 'none'"
                class="col-md-6 plr-0-20"
              >
                <a-form-item v-if="this.$route.meta.header.search === 1">
                  <a-input v-decorator="['Search']" placeholder="Search" size="small">
                    <a-icon
                      slot="prefix"
                      type="search"
                      style="color:rgba(0,0,0,.25)"
                    />
                  </a-input>
                </a-form-item>
              </div>
              <div class="col-md-6 plr-0-20">
                <router-link
                  v-if="this.$route.meta.header.btnRoute != 'none'"
                  :to="{ name: this.$route.meta.header.btnRoute }"
                >
                  <a-button
                    :icon="this.$route.meta.header.btnIcon"
                    class="btn-header" size="small"
                  >
                    {{ this.$route.meta.header.btnName }}
                  </a-button>
                </router-link>
                <a-button
                  v-if="
                    this.$route.meta.header.modal == true &&
                      this.$route.meta.header.btnName == 'Add language'
                  "
                  size="small"
                  :icon="this.$route.meta.header.btnIcon"
                  class="btn-header"
                  @click="openModal()"
                >
                  {{ this.$route.meta.header.btnName }}
                </a-button>
                <a-button
                  v-if="
                    this.$route.meta.header.modal == true &&
                      this.$route.meta.header.btnName == 'Add Category'
                  "
                  size="small"
                  :icon="this.$route.meta.header.btnIcon"
                  class="btn-header"
                  @click="openModalCat()"
                >
                  {{ this.$route.meta.header.btnName }}
                </a-button>
                <a-button
                  v-if="
                    this.$route.meta.header.modal == true &&
                      this.$route.meta.header.btnName == 'Add Form'
                  "
                  size="small"
                  :icon="this.$route.meta.header.btnIcon"
                  class="btn-header"
                  @click="openModalForm()"
                >
                  {{ this.$route.meta.header.btnName }}
                </a-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <add-form ref="addForm"></add-form>
      <add-category ref="addCategory"></add-category>
      <add ref="addModal"></add>
    </div>
  </div>
</template>

<script>
import AddCategory from "../forms/addCategory.vue";
import AddForm from "../forms/addForm.vue";
import add from "../languages/add.vue";
export default {
  components: { add, AddCategory, AddForm },
  data() {
    return {
      modal2Visible: false,
    };
  },
  methods: {
    openModal() {
      this.$refs.addModal.openModal();
    },
    openModalCat() {
      this.$refs.addCategory.openModal();
    },
    openModalForm() {
      this.$refs.addForm.openModal();
    },
  },
};
</script>

<style></style>
