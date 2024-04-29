<script setup>

</script>

<template>
  <div class="social-section">
    <a class="social-btn"  href="https://www.instagram.com/">
      <v-img :width="24" :height="24" src="@/assets/images/icons/icon-inst.svg"></v-img>
    </a>
    <a class="social-btn" href="#">
      <v-img width="24" :height="24" src="@/assets/images/icons/icon-telegram.svg"></v-img>
    </a>
    <a class="social-btn" href="https://www.facebook.com/">
      <v-img :width="24" :height="24" src="@/assets/images/icons/icon-facebook.svg"></v-img>
    </a>
    <a class="social-btn" href="#">
      <v-img :width="24" :height="24" src="@/assets/images/icons/icon-viber.svg"></v-img>
    </a>
    <a class="social-btn" href="https://www.youtube.com/">
      <v-img :width="24" :height="24" src="@/assets/images/icons/icon-youtube.svg"></v-img>
    </a>
    <a class="social-btn" href="https://www.tiktok.com/">
      <v-img :width="24" :height="24" src="@/assets/images/icons/icon-tiktok.svg"></v-img>
    </a>
  </div>
</template>

<style scoped>
  .social-section{
    display: flex;
  }
  .social-btn{
    background: none;
    padding: 5px;
    height: auto;
    display: block;
  }
  .social-btn:not(:last-child){
    margin-right: 15px;
  }
</style>
