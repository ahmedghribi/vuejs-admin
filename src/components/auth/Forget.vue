<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item
      class="mb-3"
      label="E-mail"
      :colon='false'
      :validate-status="EmailError() ? 'error' : ''"
      :help="EmailError() || ''"
    >
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {
                required: true,
                message: 'Please input your E-mail!',
              },
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
            ],
          },
        ]"
        placeholder="Enter your email adress"
      >
        <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.55)" />
      </a-input>
    </a-form-item>

    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
        :disabled="hasErrors(form.getFieldsError())"
      >
        CONTINUE
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "normal_login" }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    EmailError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("email") && getFieldError("email");
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
