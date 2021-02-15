<template>
  <a-modal v-model="modal2Visible" title="Edit Key" :footer="null" centered>
    <div id="components-form-demo-vuex">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            v-decorator="[
              'id',
              {
                initialValue: record.id,
              },
            ]"
            type="hidden"
          />
        </a-form-item>
        <a-form-item label="Key" :colon="false">
          <a-input
            v-decorator="[
              'name',
              {
                initialValue: record.name,
              },
            ]"
          />
        </a-form-item>

        <a-form-item label="Context" :colon="false">
          <a-input
            v-decorator="[
              'context',
              {
                initialValue: record.context,
              },
            ]"
          />
        </a-form-item>
        <a-form-model-item label="Note" :colon="false">
          <a-input
            v-decorator="[
              'note',
              {
                initialValue: record.note,
              },
            ]"
            type="textarea"
          />
        </a-form-model-item>
        <div class="ant-modal-footer">
          <div>
            <a-button type="default" @click="closeModal()">
              Cancel
            </a-button>
            <a-button type="primary" html-type="submit" :loading="iconLoading">
              Edit
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
      record: {},
    };
  },
  methods: {
    openModal(record) {
      (this.record = record), (this.modal2Visible = true);
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
          this.UpdateKey(values);
        }
      });
    },
    UpdateKey: function(values) {
      //console.log(values);
      this.$store
        .dispatch("UpdateKey", values)
        .then(this.StopLoader())
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
