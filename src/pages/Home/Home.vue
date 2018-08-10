<template>
<div class="category">
    <div class="category-box">
        <header class="cart-header">
            <h2 class='cart-title'>我的</h2>
        </header>
        <section class="info">
            <div class="info-box">
                <img src="" alt="">
                <span class="name"></span>
            </div>
        </section>
        <section class="cart"></section>
        <section class="list"></section>
        <section class="btn">
            <div class="btn-box">退出</div>
        </section>
    </div>
    <nav-footer></nav-footer>
</div>
</template>

<script>
import NavFooter from "@/components/footer/NavFooter";
export default {
  data() {
    return {};
  },
  components: {
    NavFooter
  }
};
</script>