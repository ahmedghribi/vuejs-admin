<template>
  <div class="fullModal">
    <div class="headerModalPreview">
      <div class="leftPreviewForm">
          <a @click="$router.go(-1)">
        <a-icon type="left" />
        <a-divider type="vertical"></a-divider>
        <span class="text-leftHeader pointer"
          >back</span ></a>
      </div>
      <div class="rightPreviewForm pt-0 pb-0">
        <button aria-label="Close" class="ant-modal-close closeFull">
          <span class="ant-modal-close-x ">
              <a-icon class="iconFull" type="close" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
