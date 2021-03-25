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
        <a-form-item>
          <label for="" class="ant-form-item-required">Tooltip options</label>
          <br />
          <a-radio-group v-model="value" style="padding-bottom: 10px">
            <a-radio value="text"> Tooltip </a-radio>
            <a-radio value="exclamation"> Exclamation </a-radio>
            <a-radio value="question"> Question </a-radio>
          </a-radio-group>
          <a-form-item v-if="value == 'text'">
            <a-input
              v-if="
                record.translation == null ||
                record.translation.tooltip == null ||
                record.tooltipLocation != 'text'
              "
              v-decorator="['tooltip']"
              type="textarea"
              placeholder="Input your tooltip"
            />
            <a-input
              v-if="
                record.translation != null &&
                record.translation.tooltip &&
                record.tooltipLocation == 'text'
              "
              v-decorator="[
                'tooltipEdit',
                {
                  initialValue: record.translation.tooltip,
                },
              ]"
              type="textarea"
              id="valueInput"
            />
          </a-form-item>
          <a-form-item v-if="value == 'exclamation'">
            <a-input
              v-if="
                record.translation == null ||
                record.translation.tooltip == null ||
                record.tooltipLocation != 'exclamation'
              "
              v-decorator="['tooltip']"
              type="textarea"
              placeholder="Input your exclamation"
            />
            <a-input
              v-if="
                record.translation != null &&
                record.translation.tooltip &&
                record.tooltipLocation == 'exclamation'
              "
              v-decorator="[
                'tooltipEdit',
                {
                  initialValue: record.translation.tooltip,
                },
              ]"
              type="textarea"
            />
          </a-form-item>
          <a-form-item v-if="value == 'question'">
            <a-input
              v-if="
                record.translation == null ||
                record.translation.tooltip == null ||
                record.tooltipLocation != 'question'
              "
              v-decorator="['tooltip']"
              type="textarea"
              placeholder="Input your question"
            />
            <a-input
              v-if="
                record.translation != null &&
                record.translation.tooltip &&
                record.tooltipLocation == 'question'
              "
              v-decorator="[
                'tooltipEdit',
                {
                  initialValue: record.translation.tooltip,
                },
              ]"
              type="textarea"
              id="valueInput"
            />
          </a-form-item>
        </a-form-item>
        <div class="ant-modal-footer">
          <div>
            <a-button type="default" @click="closeModal()"> Cancel </a-button>
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
      record: {
        translation: {},
      },
      value: "",
      tooltipvalue: {},
      modal2Visible: false,
      iconLoading: false,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  methods: {
    openModal(record) {
      (this.record = record), (this.modal2Visible = true);
      this.value = this.record.tooltipLocation;
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
          this.addTranslation(values);
          //console.log("Received values of form: ", values);

          this.tooltipvalue = {
            id: values.keyId,
            name: this.record.name,
            context: this.record.context,
            tooltipType: this.value,
          };

          this.UpdateTooltip(this.tooltipvalue);
          //console.log(this.tooltipvalue);
        }
      });
    },
    addTranslation: function (values) {
      this.$store
        .dispatch("addTranslation", values)
        .then()
        .catch((err) => console.log(err));
    },
    UpdateTooltip: function (values) {
      this.$store
        .dispatch("UpdateTooltip", values)
        .then(this.StopLoader())
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style></style>
