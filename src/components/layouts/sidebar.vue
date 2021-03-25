<template>
  <a-layout-sider
    v-model="collapsed"
    :trigger="null"
    collapsible
    class="side-nav"
  >
    <a-menu
      theme="light"
      mode="inline"
      :defaultOpenKeys="[
        (($route.name == 'Form Category' || $route.name == 'Form Store') &&
          'sub1') ||
          'none',
      ]"
      :defaultSelectedKeys="[
        (($route.name == 'Languages' ||
          $route.name == 'Add Language' ||
          $route.name == 'Manage') &&
          '7') ||
          (($route.name == 'users' || $route.name == 'User') && '9') ||
          ($route.name == 'Form Category' && '5') ||
          ($route.name == 'Form Store' && '6') ||
          '0',
      ]"
      class="ant-menu ant-menu-root ant-menu-inline side-nav-menu"
    >
      <a-menu-item key="7">
        <a-icon type="global" />
        <span class="font-weight-bold">Languages</span>
        <router-link to="/Languages"></router-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"
          ><a-icon type="form" /><span class="font-weight-bold"
            >Initial form settings</span
          ></span
        >
        <a-menu-item key="5">
          Form Category
          <router-link to="/formCategory"></router-link>
        </a-menu-item>
        <a-menu-item key="6">
          Form Store
          <router-link to="/formStore"></router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-menu-item key="9">
        <a-icon type="usergroup-add" />
        <span class="font-weight-bold">Users</span>
        <router-link to="/users"></router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    collapsed: {
      type: Boolean,
    },
  },
};
</script>

<style></style>
