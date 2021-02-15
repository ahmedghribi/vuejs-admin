<template>
  <a-modal
    v-model="modal2Visible"
    title="Edit Language"
    :footer="null"
    centered
  >
    <div id="components-form-demo-vuex">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item >
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
        <a-form-item label="Language code" :colon='false'>
          <a-input
            v-decorator="[
              'code',
              {
                initialValue: record.code,
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="Language Name" :colon='false'>
          <a-input
            v-decorator="[
              'name',
              {
                initialValue: record.name,
              },
            ]"
          />
        </a-form-item>

        <div class="ant-modal-footer">
          <div>
            <a-button type="default" @click="closeModal()">
              Cancel
            </a-button>
            <a-button type="primary" html-type="submit">
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
      modal2Visible: false,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "languages" }),
      record: {},
    };
  },
  methods: {
    openModal(record) {
      (this.record = record), (this.modal2Visible = true);
    },
    closeModal() {
      this.modal2Visible = false;
      //document.getElementById('languages_code').value=" ";
      //document.getElementById('languages_name').value=" ";
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.updateLanguage(values);
          //console.log("Received values of form: ", values);
        }
      });
    },
    updateLanguage: function(values) {
      console.log(values);
      this.$store
        .dispatch("updateLanguage", values)
        .then(this.closeModal())
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
