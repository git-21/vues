<template>
  <div id="app">
    <navs></navs>
    <router-view />
  </div>
</template>

<script>
import '@/格式化/geshi.css'
import '@/格式化/fons.css'
import navs from '@/comment/navs.vue'
export default {
  name: 'App',
  app () {

  },
  components: {
    navs
  }
}
</script>

<style>
/* #app{} */
span.swiper-pagination-bullet{
  width:4px;
  height:4px;
  margin:0 2px;
  }
span.swiper-pagination-bullet-active{
  background:red;
}
</style>
