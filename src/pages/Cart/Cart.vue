<template>
<div class="cart">
    <header class="cart-header">
        <a class="back" href="javascript:;">返回</a>
        <h2 class='cart-title'>购物车</h2>
    </header>
    <section class="nocart">
        <div class="nocart-content">
            <img src="../../assets/img/nocart.png" class="nocart-img" alt="">
            <span>您的购物车很空</span>
            <span class="btn">浏览商品</span>
        </div>
    </section>
    
<nav-footer></nav-footer>
    
</div>
</template>

<script>
import NavFooter from '@/components/footer/NavFooter'
    export default {
        data() {
            return {

            }
        },
        components: {
            NavFooter
        }
    }
</script>
<style scoped>
    .cart-header {
        height: 2.2rem;
        text-align: center;
        font-size: .7rem;
        border-bottom: 1px solid #eeeeee;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .cart-title {
        font-size: .9rem;
        width: 13.5rem;
    }
    .back {
        padding: .6rem;
    }
    .nocart-content {
        margin-top: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .nocart-img {
        width: 4.5rem;
    }
    .nocart-content span {
        line-height: 1.5rem;
        font-size: .7rem;
    }
    .nocart-content .btn{
        width: 5rem;
    height: 2.2rem;
    background: #f10;
    color: #fff;
    text-align: center;
    line-height: 2.2rem;
    border-radius: .3rem;
    }
</style>
