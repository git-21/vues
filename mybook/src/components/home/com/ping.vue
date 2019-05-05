<template>
  <div class="pip">
    <img src="http://img61.ddimg.cn/upload_img/00528/000000/biaoti-101-1523330132.jpg" alt="">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <ul class="pin">
          <li v-for="(item1,index1) in slide.list" :key="index1">
            <img :src="item1" alt="">
          </li>
        </ul>
      </swiper-slide>

    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
import {getping} from '@/pri/ind.js'
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true
      },
      swiperSlides: []
    }
  },
  mounted () {},
  async created () {
    this.swiperSlides = await getping()
  }
}
</script>

<style scoped>
.pip{
  position:relative;
}
.pip>img{
  width:100%;
  height:41px;
}
.pin{
  display:flex;
  flex-wrap:wrap;
}
.pin li{
  /* flex:1; */
  width:20%;
}
.pin li img{
  width:100%;
}
.swiper-pagination{
  top:25px;
  right:20px;
}
</style>
