<template>
  <ul class="nav">
      <router-link to="/home" tag="li">
      <i class="iconfont icon-zhuye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/cat" tag="li">
      <i class="iconfont icon-fenlei"></i>
      <span>分类</span>
      </router-link>
      <router-link to="/buy" tag="li">
      <i class="iconfont icon-baobao"></i>
      <span>值得买</span>
      </router-link>
      <router-link to="/shop" tag="li">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
      </router-link>
      <router-link to="/my" tag="li">
      <i class="iconfont icon-weibiaoti2fuzhi12"></i>
      <span>我的</span>
      </router-link>
    </ul>
</template>
<style scoped>
.router-link-exact-active{
  color: red;
}
.router-link-exact-active i{
            /* 提高优先级(权重问题)*/
  color: red !important;
}
  .nav{
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width:100%;
  background: #fff;
  z-index:111;
}
.nav li{
  flex: 1;
  text-align: center;
  height:45px;
  flex-direction: column;
}
.nav li>i{
  color:#ccc;
  font-size:25px;
  display: block;
}
.nav li>span{
  font-size: 12px;
}
</style>
