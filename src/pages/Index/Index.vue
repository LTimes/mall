<template>
  <div class="index">
    <div class="mains" :class="{'float_header': headerFlag}">
      <nav-header></nav-header>
      <tabs :tabs='tabs'></tabs>
    </div>
    <banners :banners="banner"></banners>
    <!-- 菜单 -->
    <div class="menu">
      <div class="list-box">
        <ul class="list clearfloat">
          <li v-for="item in listData" :key="item.listId">
            <div>
              <h2 class="title">{{item.title}}</h2>
              <a href="#">
                <img :src="item.ImgUrl" class="list-img" alt="">
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import "@/assets/css/index.css";
import NavHeader from "@/components/header/NavHeader";
import NavFooter from "@/components/footer/NavFooter";
import Tabs from "@/components/common/tabs";
import Banners from "@/components/common/banners";

export default {
  data() {
    return {
      tabs: [
        {
          tabId: 10,
          Text: "首页",
          active: true
        },
        {
          tabId: 11,
          Text: "主粮",
          active: false
        },
        {
          tabId: 12,
          Text: "罐头超市",
          active: false
        },
        {
          tabId: 13,
          Text: "猫砂",
          active: false
        },
        {
          tabId: 14,
          Text: "医疗保健",
          active: false
        },
        {
          tabId: 15,
          Text: "美容香波",
          active: false
        },
        {
          tabId: 16,
          Text: "零食玩具",
          active: false
        }
      ],
      banner: [
        {
          bannerId: 0,
          Text: "首页",
          ImgUrl:
            "https://m.360buyimg.com/mobilecms/s750x366_jfs/t23716/336/1603088629/187331/eb0e19a7/5b6421acN4efade98.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        },
        {
          bannerId: 1,
          Text: "手机",
          ImgUrl:
            "https://m.360buyimg.com/mobilecms/s750x366_jfs/t20029/272/1765431541/135543/fbf22a8b/5b25a7d0Ncdb4f0f3.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        },
        {
          bannerId: 2,
          Text: "超市",
          ImgUrl:
            "https://m.360buyimg.com/mobilecms/s750x366_jfs/t24826/94/21004539/271266/2c625944/5b62e4a6N23620156.jpg!cr_1125x549_0_72!q70.jpg.dpg"
        }
      ],
      listData: [
        {
          listId: 0,
          title: '新宠专区',
          ImgUrl: 'http://img2.epetbar.com/nowater/2018-07/27/14/d9e620a500c8a5c58730537a7ccbfa78.jpg?x-oss-process=style/water'
        },
        {
          listId: 1,
          title: '品牌特卖',
          ImgUrl: 'http://img2.epetbar.com/2018-08/02/15/e5987bfba6800e003506ebc8819a7ecc.jpg?x-oss-process=style/water'
        },
        {
          listId: 2,
          title: '萌爪联盟',
          ImgUrl: 'http://img2.epetbar.com/nowater/2018-06/28/11/c68daaf84d4ed1d2ec17e21875f013c7.png?x-oss-process=style/water'
        },
        {
          listId: 3,
          title: 'VIP俱乐部',
          ImgUrl: 'http://img2.epetbar.com/nowater/2018-06/25/16/ee2d14d6ed35e3c1bd420303a093ade1.jpg?x-oss-process=style/water'
        }
      ],
      supriseData: 4,
      headerFlag: false // 判断是否吸顶
    };
  },
  components: {
    NavHeader,
    NavFooter,
    Banners,
    Tabs
  },
  methods: {
    init() {
      var _this = this;
      document.onscroll = function() {
        var scrolls = document.documentElement.scrollTop;
        if (scrolls > 1) {
          _this.headerFlag = true;
        } else {
          _this.headerFlag = false;
        }
      };
    },
    getList() {

    }
  },
  mounted() {
    this.init();
  },
  created() {
    this.getList();
  },
};
</script>

<style scoped>
.index {
  margin-bottom: 2.75rem;
}
.list .title {
  padding-left: 1rem;
  font-size: .9rem;
  line-height: 2.5rem;
  position: relative;
}
.list .title::before {
  content: '';
  position: absolute;
    left: .3rem;
    top: .8rem;
    width: .25rem;
    height: .9rem;
    border-radius: .1rem;
    background: #f10;
    background: linear-gradient(to top, #f10, #f90);
}
.list a {
  width: 100%;
  height: 100%;
  display: block;
}
.list-img {
  width: 18.75rem;
}
</style>

