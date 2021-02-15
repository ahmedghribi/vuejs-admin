<template>
  <!--a-layout-header style="background: #fff; padding: 0">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="$emit('nav-toggled', collapsed)"
    />
    <div style="float:right;margin-right: 10px;">
      <a-dropdown :trigger="['click']" v-model="show">
        <div slot="overlay">
          <a-spin :spinning="loading">
            <a-tabs
              class="dropdown-tabs"
              :tabBarStyle="{ textAlign: 'center' }"
              :style="{ width: '297px' }"
            >
              <a-tab-pane tab="Notification" key="1">
                <a-list class="tab-pane">
                  <a-list-item>
                    <a-list-item-meta
                      title="You have 14 new notif"
                      description="day"
                    >
                      <a-avatar
                        style="background-color: white"
                        slot="avatar"
                        src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"
                      />
                    </a-list-item-meta>
                  </a-list-item>
                </a-list>
              </a-tab-pane>
            </a-tabs>
          </a-spin>
        </div>
        <span @click="fetchNotice" class="header-notice">
          <a-badge class="notice-badge" :dot="show">
            <a-icon :class="['header-notice-icon']" type="bell" />
          </a-badge>
        </span>
      </a-dropdown>
      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          <span class="ant-pro-account-avatar">
            <a-avatar
              size="large"
              :src="deepFind(userProfile, 'avatar.url')"
              class="antd-pro-global-header-index-avatar"
            />
          </span>
        </a>
        <a-menu slot="overlay">
          <a-menu-item key="0">
            <li class="ph-1 pb-1 mb-1 border-bottom">
              <div class="d-flex mr-2">
                <a-avatar
                  size="large"
                  :src="deepFind(userProfile, 'avatar.url')"
                  class="antd-pro-global-header-index-avatar"
                />
                <div class="ml-5">
                  <p class="mb-0 text-dark font-weight-semibold">
                    {{ userProfile.name }}
                  </p>
                </div>
              </div>
            </li>
          </a-menu-item>
          <a-menu-item key="1">
            <a @click="logout">Logout</a>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item key="3"> {{ userProfile.username }} </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </a-layout-header-->
  <div class="header">
    <div class="logo logo-dark" :class="{ collapsed: collapsed }">
      <a href="">
        <img
          class="logo-header"
          src="../../assets/img/Logo-Spondei.svg"
          alt="Logo"
        />
        <img
          class="logo-fold"
          src="../../assets/img/Picto-Spondei.svg"
          alt="Logo"
        />
      </a>
    </div>
    <div class="nav-wrap">
      <ul class="nav-left">
        <li class="desktop-toggle">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="
              $emit('nav-toggled', collapsed);
              collapsed = !collapsed;
            "
          />
        </li>
        <li class="mobile-toggle">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="
              $emit('nav-toggled', collapsed);
              collapsed = !collapsed;
            "
          />
        </li>
      </ul>

      <ul class="nav-right">
        <li>
          <a-dropdown :trigger="['click']" v-model="show">
            <div slot="overlay">
              <a-spin :spinning="loading">
                <a-tabs
                  class="dropdown"
                  :tabBarStyle="{ textAlign: 'center' }"
                  :style="{ width: '297px' }"
                >
                  <div a-menu class="pop-notification">
                    <div
                      class="p-v-15 p-h-25 border-bottom d-flex justify-content-between align-items-center"
                    >
                      <p class="text-dark font-weight-semibold m-b-0">
                        <a-icon :class="['header-notice-icon']" type="bell" />
                        <span class="m-l-10">Notification</span>
                      </p>
                      <a Size="small" class="p-v-5">
                        <small>View All</small>
                      </a>
                    </div>
                    <div class="overflow-y-auto" style="max-height: 300px">
                      <a-list class="ant-list-item-links">
                        <a-template>
                          <a-list-item>
                            <a>
                              <div class="d-flex">
                                <div class="m-l-15">
                                  <p class="m-b-0 text-dark">
                                    aaa
                                  </p>
                                  <p class="m-b-0">
                                    <small>56+6 ago</small>
                                  </p>
                                </div>
                              </div>
                            </a>
                          </a-list-item>
                        </a-template>
                      </a-list>
                    </div>
                  </div>
                </a-tabs>
              </a-spin>
            </div>
            <span @click="fetchNotice" class="header-notice">
              <a-badge class="notice-badge" :dot="show">
                <a-icon :class="['header-notice-icon']" type="bell" />
              </a-badge>
            </span>
          </a-dropdown>
        </li>
        <li class="">
          <a-dropdown :trigger="['click']">
            <a
              class="ant-dropdown-link avatar-drop"
              @click="(e) => e.preventDefault()"
            >
              <span class="ant-pro-account-avatar">
                <a-avatar
                  :src="deepFind(userProfile, 'avatar.url')"
                  class="antd-pro-global-header-index-avatar"
                />
              </span>
            </a>
            <a-menu slot="overlay">
              <a-menu-item key="0">
                <li class="ph-1 pb-1 mb-1 border-bottom">
                  <div class="d-flex mr-2">
                    <a-avatar
                      :src="deepFind(userProfile, 'avatar.url')"
                      class="antd-pro-global-header-index-avatar"
                    />
                    <div class="ml-5">
                      <p class="mb-0 text-dark font-weight-semibold">
                        {{ userProfile.name }}
                      </p>
                    </div>
                  </div>
                </li>
              </a-menu-item>
              <a-menu-item key="1">
                <a @click="logout">Logout</a>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3"> {{ userProfile.username }} </a-menu-item>
            </a-menu>
          </a-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      collapsed: false,
      loading: false,
      show: false,
    };
  },
  computed: {
    ...mapGetters(["userProfile"]),
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    fetchNotice() {
      if (this.loading) {
        this.loading = false;
        return;
      }
      this.loadding = true;
      setTimeout(() => {
        this.loadding = false;
      }, 1000);
    },
    deepFind: function(obj, path) {
      if (obj) {
        var paths = path.split("."),
          current = obj,
          i;

        for (i = 0; i < paths.length; ++i) {
          if (current[paths[i]] == undefined) {
            return undefined;
          } else {
            current = current[paths[i]];
          }
        }
        return current;
      } else {
        return undefined;
      }
    },
  },
  created() {
    this.$store.dispatch("profile").then();
  },
};
</script>

<style lang="less"></style>
