<template>
  <div class="cate">
    <ul>
      <router-link to="/home" tag="li" v-for="(item,index) in localList" :key="index" class="sty">
      <img :src="item" alt="">
      </router-link>
    </ul>
  </div>
</template>

<script>
import {getcate} from '@/pri/ind.js'
export default {
  data () {
    return {
      localList: []
    }
  },
  async created () {
    this.localList = await getcate()
  }
}
</script>

<style scoped>
.cate ul{
  display:flex;
  flex-wrap:wrap;
  background:#FFF3FD;
}
.cate ul li{
  width:20%;
}
.cate ul li img{
  width:100%;
}
</style>
