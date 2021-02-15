<template>
  <div class="app">
    <div class="container-fluid p-h-0 p-v-20 bg full-height d-flex login">
      <div class="d-flex flex-column justify-content-between w-100">
        <div class="container d-flex h-100">
          <div class="row align-items-center w-100">
            <div class="col-md-7 col-lg-5 m-lr-auto">
              <a-card class="mb-0 shadow-lg1">
                <div
                  class="align-items-center justify-content-between mb-10 mt-10 ng-star-inserted "
                >
                  <img
                    class="img-fluid centerA"
                    alt=""
                    src="../../assets/img/Picto-Spondei.svg"
                  />
                </div>
                <div
                  class="align-items-center justify-content-between mb-5 Blockcenter"
                >
                  <h2 class="mb-0 text-center" style="font-size: 24px; margin-top: 15px;">
                    Login
                  </h2>
                </div>
                <login />
              </a-card>
            </div>
          </div>
        </div>
        <div class="d-none d-md-flex ph-40 justify-content-between">
          <span class="">Copyright © 2020 Spondei. All rights reserved .</span>
          <ul class="list-inline">
            <li class="list-inline-item">
              <a class="text-dark text-link" href="">Legal</a>
            </li>
            <li class="list-inline-item">
              <a class="text-dark text-link" href="">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../../components/auth/Login.vue";
export default {
  components: { Login },
};
</script>

<style></style>
