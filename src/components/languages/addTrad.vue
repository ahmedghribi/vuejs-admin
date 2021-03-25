<template>
  <a-modal v-model="modal2Visible" title="Add Key" :footer="null" centered>
    <div id="components-form-demo-vuex">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="Key" :colon="false">
          <a-input
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: 'Key is required!' }],
              },
            ]"
          />
        </a-form-item>

        <a-form-item label="Context" :colon="false">
          <a-input
            v-decorator="[
              'context',
              {
                rules: [{ required: true, message: 'context is required!' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'tooltipLocation',
              {
                initialValue: 'text',
              },
            ]"
            type="hidden"
          />
        </a-form-item>
        <a-form-model-item label="Note" :colon="false">
          <a-input
            v-decorator="[
              'note',
              {
                rules: [{ required: true, message: 'note is required!' }],
              },
            ]"
            type="textarea"
          />
        </a-form-model-item>
        <div class="ant-modal-footer">
          <div>
            <a-button type="default" @click="closeModal()"> Cancel </a-button>
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
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  methods: {
    openModal() {
      this.modal2Visible = true;
    },
    closeModal() {
      this.modal2Visible = false;
      this.$store.dispatch("tradlist", this.$route.params.key);
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
          //console.log("Received values of form: ", values);
          this.addKey(values);
        }
      });
    },
    addKey: function (values) {
      //console.log(values);
      this.$store
        .dispatch("addKey", values)
        .then(this.StopLoader())
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
