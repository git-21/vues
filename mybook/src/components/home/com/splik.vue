<template>
  <div class="spk">
    <img src="http://img62.ddimg.cn/upload_img/00707/mobile/mao_title.jpg">
    <div class="time">
      <ul>
        <li>
          <span>{{stime.hours}}</span>
          <i>时</i>
        </li>
        <li>
          <span>{{stime.minutes}}</span>
          <i>分</i>
        </li>
        <li class="last">
          <span>{{stime.seconds}}</span>
          <i>秒</i>
        </li>
      </ul>
    </div>
    <div class="call">
      <ul ref="oul">
        <li ref="oli" v-for="(items,indexs) in shoplist" :key="indexs">
          <img :src="items.imges">
          <p>{{items.wenzi}}</p>
          <span class="sp">{{items.price}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gettime from '@/gongjv/times'
import {getshop} from '@/pri/ind.js'
export default {
  data () {
    return {
      shoplist: null,
      stime: {
        hours: '00',
        minutes: '00',
        seconds: '00'
      },
      time: null
    }
  },
  created () {
    this.time = setInterval(() => {
      this.stime = gettime('2019-04-30 13:56')
    }, 1000)
  },
  destroyed () {
    this.time = null
  },
  async mounted () {
    this.shoplist = await getshop()
    this.$nextTick(() => {
      // this.$refs.oli[0].offsetWidth获取li的宽度
      var width = this.$refs.oli[0].offsetWidth * this.shoplist.length
      this.$refs.oul.style.width = width + 'px'
    })
  }
}
</script>

<style>
.spk>img{
  width:100%;
}
.time ul{
  width:100%;
  display:flex;
  justify-content:center;
}
.time ul li{
  line-height:25px;
}
.time ul li>span{
  display:inline-block;
  height:25px;
  width:19px;
  background:#000;
  color:#fff;
  border-radius:5px;
  text-align:center;
  font-size:12px;
}
.time ul li>i{
  font-size:12px;
  margin:0 5px;
}
.time ul li.last>span{
  background:red;
}

.call{
  overflow-x:scroll;
}

.call ul{
  font-size:0;
}
.call li{
  width:116px;
  display:inline-block;
  padding:0 10px;
}
.call li>p{
  font-size:12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical
}
.call li .sp{
  font-size:13px;
  color:red;
}
.call li img{
  width:100%;
}
</style>
