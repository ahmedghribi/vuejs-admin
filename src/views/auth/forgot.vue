<template>
  <div class="app">
    <div class="container-fluid p-h-0 p-v-20 bg full-height d-flex login">
      <div class="d-flex flex-column justify-content-between w-100">
        <div class="container d-flex h-100">
          <div class="row align-items-center w-100">
            <div class="col-md-7 col-lg-5 m-lr-auto">
              <a-card class="mb-0 shadow-lg">
                <div
                  class="align-items-center justify-content-between mb-10 mt-10"
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
                  <h2 class="mb-0 text-center" style="font-size: 24px;">
                    Forgot your password?
                  </h2>
                  <p class="text-center">
                    We'II send you an email with instructions.
                  </p>
                </div>
                <forgot />
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
import Forgot from "../../components/auth/Forget.vue";
export default {
  components: { Forgot },
};
</script>

<style></style>
