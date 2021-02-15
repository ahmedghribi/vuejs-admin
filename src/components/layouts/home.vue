<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <sidebar :collapsed="collapsed" />
    <a-layout>
      <navbar @nav-toggled="collapsed = !collapsed" />

      <a-layout-content :class="{ collapsed: collapsed }">
        <page-header></page-header>
        <router-view></router-view>
        <!--footer class="content-footer">
          <div class="footer">
            <div class="copyright">
              <span
                >Copyright © 2020
                <a href="http://www.web-graphique.fr/"
                  ><b class="text-dark">Web-Graphique</b></a
                >. All rights reserved.</span
              >
              <span class="go-right">
                <a href="" class="text-gray mrg-right-15"
                  >Term &amp; Conditions</a
                >
                <a href="" class="text-gray">Privacy &amp; Policy</a>
              </span>
            </div>
          </div>
        </footer-->
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import PageHeader from "../pages/page-header.vue";
import navbar from "./navbar.vue";
import sidebar from "./sidebar";
export default {
  components: { navbar, sidebar, PageHeader },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
.ant-layout-sider {
  background: white !important;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
