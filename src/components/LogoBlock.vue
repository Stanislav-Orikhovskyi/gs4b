<script setup>

</script>

<template>
  <v-btn class="logo" href="#">
    <span class="logo-main">
      <v-img
        :width="170"
        :height="42"
        aspect-ratio="16/9"
        src="@/assets/images/logo-part-1.svg"
      ></v-img>
    </span>
    <span class="logo-secondary">
      <v-img
        :width="40"
        :height="42"
        aspect-ratio="16/9"
        src="@/assets/images/logo-part-2.svg"
      ></v-img>
    </span>
  </v-btn>
</template>

<style scoped>
  .logo{
    background: var(--black-bg-color);
    overflow: hidden;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .logo.v-btn.v-btn--density-default{
    height: auto;
    margin-left: 0;
    padding: 0;
  }
  .logo-main{
    padding: 6px 14px 6px 24px;
  }
  .logo-secondary{
    padding: 3px 12px;
    background: var(--red-bg-color);
  }
</style>
