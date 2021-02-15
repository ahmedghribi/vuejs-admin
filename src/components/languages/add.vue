<template>
  <a-modal
    v-model="modal2Visible"
    :title="this.$route.meta.header.btnName"
    :footer="null"
    centered
  >
    <div id="components-form-demo-vuex">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="Language code" :colon="false">
          <a-input
            v-decorator="[
              'code',
              {
                rules: [
                  { required: true, message: 'Language code is required!' },
                ],
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="Language Name" :colon="false">
          <a-input
            v-decorator="[
              'name',
              {
                rules: [
                  { required: true, message: 'Language name is required!' },
                ],
              },
            ]"
          />
        </a-form-item>

        <div class="ant-modal-footer">
          <div>
            <a-button type="default" @click="closeModal()">
              Cancel
            </a-button>
            <a-button type="primary" html-type="submit" :loading="iconLoading">
              Add
            </a-button>
          </div>
        </div>
      </a-form>
    </div>
  </a-modal>
</template>

<script>
export default {
  name: "Modal",

  data() {
    return {
      iconLoading: false,
      modal2Visible: false,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "languages" }),
    };
  },
  methods: {
    openModal() {
      this.modal2Visible = true;
    },
    closeModal() {
      this.modal2Visible = false;
     this.$store.dispatch("languageList");
    },
    StopLoader() {
      setTimeout(() => (this.iconLoading = false), 1000);
      setTimeout(() => this.closeModal(), 1000);
    },
    handleSubmit(e) {
      
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.iconLoading = true;
          this.addlanguage(values);
          //console.log("Received values of form: ", values);
        }
      });
    },
    addlanguage: function(values) {
      //console.log(values);
      this.$store
        .dispatch("addlanguage", values)
        .then(this.StopLoader())
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
