<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="" class="lbs">
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
  </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      // 选项开关
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        // 配置
        autoplay: true
      },
      swiperSlides: [
        'http://img62.ddimg.cn/upload_img/00609/mao/UI1242x366-1-1555331601.jpg',
        'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/40272/28/340/81840/5cb94365Ecfb8e46e/663f883c93af49de.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        'http://m.360buyimg.com/mobilecms/s750x366_jfs/t27763/337/1729467195/110444/afed7a62/5bead1dfN1ce9dbde.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        'http://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31237/34/14766/642166/5cbedc69E8e8df868/4839b0ced0d4a486.jpg!cr_1125x549_0_72!q70.jpg.dpg'
      ]
    }
  },
  mounted () {
    // setInterval(() => {
    //   console.log('simulate async data')
    //   if (this.swiperSlides.length < 10) {
    //     this.swiperSlides.push(this.swiperSlides.length + 1)
    //   }
    // }, 3000)
  }
}
</script>

<style scoped>
.lbs{
  width:100%;
  height:110px;
}
</style>
