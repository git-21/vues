<template>
    <div class="home">
        <!-- 搜索栏 -->
        <sear></sear>
        <!-- 轮播图 -->
        <lunbo></lunbo>
        <!-- 物品栏 -->
        <hcate></hcate>
        <!-- 品牌街 -->
        <ping></ping>
        <!-- 今日秒杀 -->
        <splik></splik>
    </div>
</template>

<script>
import sear from './com/sear.vue'
import lunbo from './com/lunbo.vue'
import hcate from './com/hcate.vue'
import ping from './com/ping.vue'
import splik from './com/splik.vue'
export default {
  components: {
    sear,
    lunbo,
    hcate,
    ping,
    splik
  }
}
</script>

<style scoped>
.home{
  padding-bottom:45px;
}
</style>
