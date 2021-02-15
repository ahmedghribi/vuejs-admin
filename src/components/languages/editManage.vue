<template>
  <a-modal
    v-model="modal2Visible"
    :title="' Translate ' + record.name"
    :footer="null"
    centered
  >
    <div id="components-form-demo-vuex">
      <a-alert
        :message="record.context"
        :description="record.note"
        type="info"
        show-icon
      />

      <a-form :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            v-decorator="[
              'keyId',
              {
                initialValue: record.id,
              },
            ]"
            type="hidden"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'languageId',
              {
                initialValue: this.$route.params.key,
              },
            ]"
            type="hidden"
          />
        </a-form-item>

        <a-form-item>
          <label for="" class="ant-form-item-required"
            >Francais (Base value)
          </label>
          <a-input value="test" type="textarea" disabled />
        </a-form-item>
        <a-form-item v-if="record.translation == null">
          <label for="" class="ant-form-item-required">
            <lang-flag iso="en" /> Anglais (Target value)
          </label>
          <a-input
            v-decorator="[
              'value',
              {
                rules: [{ required: true, message: 'value is required!' }],
              },
            ]"
            type="textarea"
          />
        </a-form-item>
        <a-form-item v-if="record.translation !== null">
          <label for="" class="ant-form-item-required">
            <lang-flag iso="en" /> Anglais (Target value)
          </label>
          <a-input
            v-decorator="[
              'value',
              {
                initialValue: record.translation.value,
              },
            ]"
            type="textarea"
            id="valueInput"
          />
        </a-form-item>
        <label for="" class="ant-form-item-required">Options </label> <br />
        <a-radio-group
          v-model="value"
          style="padding-top:10px;padding-bottom:10px"
        >
          <a-radio :value="2">
            None
          </a-radio>
          <a-radio :value="0">
            Information
          </a-radio>
          <a-radio :value="1">
            Question
          </a-radio>
        </a-radio-group>
        <a-form-item v-if="value == 1">
           <a-input
            v-decorator="[
              'tooltip'
            ]"
            type="textarea"
            placeholder="Input your message"
          />
        </a-form-item>
        <a-form-item v-if="value == 0">
           <a-input
            v-decorator="[
              'tooltip'
            ]"
            type="textarea"
            placeholder="Input your message"
          />
        </a-form-item>
        <div class="ant-modal-footer">
          <div>
            <a-button type="default" @click="closeModal()">
              Cancel
            </a-button>
            <a-button type="primary" html-type="submit" :loading="iconLoading">
              Save
            </a-button>
          </div>
        </div>
      </a-form>
    </div>
  </a-modal>
</template>

<script>
import LangFlag from "vue-lang-code-flags";

export default {
  components: { LangFlag },
  name: "Modal",

  data() {
    return {
      value: 2,
      modal2Visible: false,
      iconLoading: false,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      record: {
        translation: {},
      },
    };
  },
  methods: {
    
    openModal(record) {
      (this.record = record), (this.modal2Visible = true);
    },
    closeModal() {
      this.modal2Visible = false;
       this.$store.dispatch("tradlist", this.$route.params.key);

      //document.getElementById('valueInput').value=" ";
    },
    StopLoader(){
      setTimeout(
        ()=> this.iconLoading = false, 1000
      );
        setTimeout(
        ()=> this.closeModal(), 1000
      );

    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.iconLoading = true;
          this.addTranslation(values);
          //console.log("Received values of form: ", values);
        }
      });
    },
    addTranslation: function(values) {
      this.$store
        .dispatch("addTranslation", values)
        .then(this.StopLoader())
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
