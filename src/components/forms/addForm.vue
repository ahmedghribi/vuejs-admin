<template>
  <a-modal
    v-model="modal2Visible"
    :title="this.$route.meta.header.btnName"
    :footer="null"
    centered
  >
    <div id="components-form-demo-vuex">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="Title" :colon='false'>
          <a-input
            v-decorator="[
              'Title',
              {
                rules: [{ required: true, message: 'Title is required!' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-model-item label="Description" :colon='false'>
          <a-input type="textarea" />
        </a-form-model-item>
        <a-form-model-item label="Options" :colon='false'>
          <a-input type="textarea" />
        </a-form-model-item>
        <div class="row">
          <div class="col-md-6">
            <a-form-item label="Monthly Price" :colon='false'>
              <a-input
                v-decorator="[
                  'month',
                  {
                    rules: [{ required: true, message: 'Monthly Price is required!' }],
                  },
                ]"
              />
            </a-form-item>
          </div>
          <div class="col-md-6">
            <a-form-item label="Annually Price" :colon='false'>
              <a-input
                v-decorator="[
                  'Annually',
                  {
                    rules: [{ required: true, message: 'Annually Price is required!' }],
                  },
                ]"
              />
            </a-form-item>
          </div>
        </div>

        <a-form-item label="Has SubCategory" has-feedback defaultValue="parent" :colon='false'>
          <a-select
            v-decorator="[
              'subcategory',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please select your subcategory!',
                  },
                ],
              },
            ]"
            placeholder="Please select a subcategory"
          >
            <a-select-option value="parent">
              Parent
            </a-select-option>
            <a-select-option value="Option 1">
              Option 1
            </a-select-option>
            <a-select-option value="Option 2">
              Option 2
            </a-select-option>
          </a-select>
        </a-form-item>

        <div class="ant-modal-footer">
          <div>
            <a-button type="default" @click="closeModal()">
              Cancel
            </a-button>
            <a-button type="primary" html-type="submit">
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
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    normFile(e) {
      console.log("Upload event:", e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
  },
};
</script>

<style></style>
