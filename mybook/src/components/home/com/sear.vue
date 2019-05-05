<template>
    <div class="cs">
        <img src="../imgs/logo.png" alt="" class="logo">
        <div>
            <img src="../imgs/search.png" alt="">
            <input type="text" placeholder="书香节，每满100减50">
        </div>
        <img src="../imgs/cate.png" alt="" class="cat">
    </div>
</template>

<style scoped>
    .cs{
        width: 100%;
        display: flex;
        height:50px;
        justify-content: space-between;
          /* 侧轴方向 */
        align-items: center;
    }

    .cs div{
        flex: 1;
        background: #eee;
        height:30px;
        border-radius: 15px;
        display: flex;
        align-items: center;
    }

    .cs div>img{
        width: 20px;
        height:20px;
        margin:0 8px 0 10px;
    }
    .cs div>input{
        background: #eee;
        flex: 1;
        height:20px;
        border-radius: 5px;
        margin-right: 5px;
    }
    .cs div>input::placeholder{
        color:#aaa;
    }

    .cs .logo{
        width: 37px;
        height: 30px;
        margin:0 10px;
    }

    .cs .cat{
        width:37px;
        height:30px;
    }
</style>
