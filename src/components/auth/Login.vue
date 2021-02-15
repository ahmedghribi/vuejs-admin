<template>
  <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item
      label="Login"
      :colon="false"
      :validate-status="loginError() ? 'error' : ''"
      :help="loginError() || ''"
    >
      <a-input
        v-decorator="[
          'login',
          {
            rules: [
              {
                required: true,
                message: 'Please input your username!',
              },
            ],
          },
        ]"
        placeholder="Login"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item
      label="Password"
      :colon="false"
      :validate-status="passwordError() ? 'error' : ''"
      :help="passwordError() || ''"
    >
      <a-input
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Please input your Password!',
              },
            ],
          },
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <router-link
        to="/forgot"
        class="float-right font-size-13  text-muted1 pb-3"
        >Forgot password ?</router-link
      >
      <a-button
        type="primary"
        html-type="submit"
        class="login-form-button"
        :disabled="hasErrors(form.getFieldsError())"
      >
        Login
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
      login: "",
      password: "",
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
    loginError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("login") && getFieldError("login");
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.loginUser(values.login, values.password);
          // console.log("Received values of form: ", values);
        }
      });
    },
    loginUser: function(login, password) {
      console.log(login, password);
      this.$store
        .dispatch("login", { login, password })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
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
